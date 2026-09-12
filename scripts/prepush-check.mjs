#!/usr/bin/env node
/**
 * Push 前静态检查：死链 / 缺失本地资源（对齐 CI 构建前可发现的问题）。
 * 用法：npm run docs:check
 * 完整门禁（再跑与 CI 相同的 build）：npm run docs:check:build
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, extname, join, normalize, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const docsRoot = join(root, 'docs')
const publicRoot = join(docsRoot, '.vuepress', 'public')

const ASSET_EXTS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.ico',
  '.mp4',
  '.pdf',
  '.zip',
  '.mp3',
  '.wav',
])

const errors = []

function walk(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.vuepress' || name === '.vitepress') continue
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, out)
    else if (name.endsWith('.md')) out.push(p)
  }
  return out
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---\n') && !raw.startsWith('---\r\n')) return { fm: {}, body: raw }
  const end = raw.indexOf('\n---', 4)
  if (end === -1) return { fm: {}, body: raw }
  const block = raw.slice(4, end)
  const body = raw.slice(end + 4).replace(/^\r?\n/, '')
  const fm = {}
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!m) continue
    let v = m[2].trim()
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1)
    }
    fm[m[1]] = v
  }
  return { fm, body }
}

function stripIgnored(body) {
  return body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '')
    .replace(/````[\s\S]*?````/g, '')
    .replace(/@\[[^\]]*]\([^)]*\)/g, '')
    // inline code
    .replace(/`[^`\n]+`/g, '')
}

function normalizeHref(href) {
  let p = href.trim()
  try {
    p = decodeURIComponent(p)
  } catch {
    /* keep */
  }
  return p.split('#')[0].split('?')[0]
}

function normalizeRoute(path) {
  let p = normalizeHref(path)
  if (!p) return '/'
  if (!p.startsWith('/')) p = `/${p}`
  return p
}

function fileToRoutes(file) {
  const rel = relative(docsRoot, file).split(sep).join('/')
  const { fm } = parseFrontmatter(readFileSync(file, 'utf8'))
  const routes = new Set()
  if (fm.permalink) {
    const p = fm.permalink.startsWith('/') ? fm.permalink : `/${fm.permalink}`
    routes.add(normalizeRoute(p))
  }
  if (rel === 'README.md') {
    routes.add('/')
  } else if (rel.endsWith('/index.md')) {
    const base = `/${rel.slice(0, -'/index.md'.length)}/`
    routes.add(normalizeRoute(base))
    routes.add(normalizeRoute(base.replace(/\/$/, '')))
  } else {
    const noExt = `/${rel.replace(/\.md$/, '')}`
    routes.add(normalizeRoute(`${noExt}.html`))
    routes.add(normalizeRoute(`${noExt}/`))
    routes.add(normalizeRoute(noExt))
  }
  return routes
}

function routeExists(routes, href) {
  const n = normalizeRoute(href)
  if (routes.has(n)) return true
  if (routes.has(n.endsWith('/') ? n.slice(0, -1) : `${n}/`)) return true
  if (n.endsWith('.html')) {
    const bare = n.slice(0, -5)
    if (routes.has(bare) || routes.has(`${bare}/`)) return true
  } else if (routes.has(`${n}.html`)) return true
  return false
}

function isExternal(href) {
  return /^(https?:|mailto:|tel:|data:|javascript:)/i.test(href) || href.startsWith('//')
}

function isAssetPath(href) {
  return ASSET_EXTS.has(extname(normalizeHref(href)).toLowerCase())
}

function assetExists(href) {
  const clean = normalizeHref(href).replace(/^\//, '')
  const inPublic = join(publicRoot, clean)
  if (existsSync(inPublic)) return true
  // VuePress 也会打包 docs 目录旁路资源（绝对路径按站点根 ≈ docs 根）
  const inDocs = join(docsRoot, clean)
  return existsSync(inDocs)
}

function extractRefs(body) {
  const text = stripIgnored(body)
  const refs = []
  const patterns = [
    /!\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g,
    /\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g,
    /\b(?:href|image|icon|src)=["']([^"']+)["']/g,
  ]
  for (const re of patterns) {
    let m
    while ((m = re.exec(text))) refs.push(m[1])
  }
  return refs
}

function resolveRelative(fromFile, href) {
  const base = dirname(fromFile)
  return normalize(resolve(base, normalizeHref(href)))
}

const mdFiles = walk(docsRoot)
const routes = new Set()
for (const f of mdFiles) {
  for (const r of fileToRoutes(f)) routes.add(r)
}

for (const file of mdFiles) {
  const rel = relative(root, file)
  const raw = readFileSync(file, 'utf8')
  const { body } = parseFrontmatter(raw)

  for (const href of extractRefs(body)) {
    if (!href || href.startsWith('#') || isExternal(href)) continue

    if (href.startsWith('/')) {
      if (isAssetPath(href)) {
        if (!assetExists(href)) errors.push(`${rel}: missing asset ${href}`)
        continue
      }
      if (!routeExists(routes, href)) {
        // directory-like public path
        if (assetExists(href)) continue
        errors.push(`${rel}: dead page link ${href}`)
      }
      continue
    }

    const target = resolveRelative(file, href)
    if (!target.startsWith(docsRoot) && !target.startsWith(publicRoot)) continue
    if (existsSync(target)) continue
    if (existsSync(`${target}.md`)) continue
    if (existsSync(join(target, 'index.md'))) continue
    errors.push(`${rel}: missing relative ref ${href}`)
  }
}

for (const must of ['/logo.svg', '/logo-dark.svg']) {
  if (!assetExists(must)) errors.push(`public: missing required ${must}`)
}

console.log(`Checked ${mdFiles.length} markdown files, ${routes.size} route aliases.`)

if (errors.length) {
  console.error(`\nFailed: ${errors.length} issue(s)`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}

console.log('OK: no dead local links or missing assets found.')

import { defineCollections } from 'vuepress-theme-plume'
import { knowledgeCollections } from './collections/knowledge'
import { portalCollections } from './collections/portal'

/**
 * 集合入口：知识库 + 门户。
 * 知识库 → docs/{dev,design,ai,...}；门户 → docs/portal/* + environment + about
 */
export default defineCollections([
  ...knowledgeCollections,
  ...portalCollections,
])

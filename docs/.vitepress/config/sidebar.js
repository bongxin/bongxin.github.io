import { generateSidebar } from 'vitepress-sidebar';
import { getSidebar } from 'vitepress-plugin-auto-sidebar'
const rootDir = './docs';

export default function sidebar() {
  return {
    // '/config/': generate('/config', '配置'),
    // '/guide/': generate('/guide', '指南'),
    // '/system/togaf/': generate('/system/togaf', 'TOGAF'),

    '/system/togaf/': getSidebar({ contentRoot: '/', contentDirs: ['system/togaf'], collapsible: true, collapsed: true }),

    // '/system/togaf/': generateSidebar({
    //   root: 'docs/system/togaf',
    //   // rootGroupText: 'Contents',
    //   // useTitleFromFileHeading: true,
    //   hyphenToSpace: true,
    //   // underscoreToSpace: true,
    //   collapsible: true,
    //   collapsed: true          ,
    //   // collapseDepth: 2,
    //   // sortByFileName: ['first.md', 'second', 'third.md'],
    //   // withIndex: true,
    //   // includeEmptyGroup: false
    // }),
    '/guide/': [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/what-is-vitepress' },
          {
            text: 'Quick Start',
            link: '/guide/what-is-vitepress',
          },
        ],
      },
    ],
    // '/guide/': generateSidebar({
    //   root: '/',
    //   // rootGroupText: 'Contents',
    //   // useTitleFromFileHeading: true,
    //   hyphenToSpace: true,
    //   // underscoreToSpace: true,
    //   collapsible: true,
    //   collapsed: true          ,
    //   // collapseDepth: 2,
    //   // sortByFileName: ['first.md', 'second', 'third.md'],
    //   // withIndex: true,
    //   // includeEmptyGroup: false
    // }),
    '/config/': generateSidebar({
      root: '/',
      // rootGroupText: 'Contents',
      // useTitleFromFileHeading: true,
      hyphenToSpace: true,
      // underscoreToSpace: true,
      collapsible: true,
      collapsed: true,
      // collapseDepth: 2,
      // sortByFileName: ['first.md', 'second', 'third.md'],
      // withIndex: true,
      // includeEmptyGroup: false
    }),
  };
}

function generate(url, rootGroupText) {
  return generateSidebar({
    root: rootDir + url,
    // root: '/',
      // rootGroupText: 'Contents',
      // useTitleFromFileHeading: true,
      hyphenToSpace: true,
      // underscoreToSpace: true,
      collapsible: true,
      collapsed: false
      // collapseDepth: 2,
      // sortByFileName: ['first.md', 'second', 'third.md'],
      // withIndex: true,
      // includeEmptyGroup: false
  });
}

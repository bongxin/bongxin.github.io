import { generateSidebar } from 'vitepress-sidebar';

export default function sidebar() {
  return {
    '/guide/': generateSidebar({
      root: './docs/guide',
      // rootGroupText: 'Contents',
      // useTitleFromFileHeading: true,
      hyphenToSpace: true,
      // underscoreToSpace: true,
      collapsible: true,
      collapsed: false,
      // collapseDepth: 2,
      // sortByFileName: ['first.md', 'second', 'third.md'],
      // withIndex: true,
      // includeEmptyGroup: false
    }),
    '/config/': generateSidebar({
      root: './docs/config',
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
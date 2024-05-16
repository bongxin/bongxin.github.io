import { sidebarExample } from './example';
import { sidebarNpm, sidebarPhp, sidebarVue } from './skill';
import { sidebarFigma,sidebarUML } from './design';
import { sidebarPmp, sidebarCsmm } from './management';
import { sidebarMarkdown } from './others';
import { sidebarAI } from './ai';

export default function sidebar() {
  return {
    // '/example/': { base: '/example/', items: sidebarExample() },
    '/skill/development/npm': { base: '/skill/development/npm/', items: sidebarNpm() },
    '/skill/development/php': { base: '/skill/development/php/', items: sidebarPhp() },
    '/skill/development/vue': { base: '/skill/development/vue/', items: sidebarVue() },

    '/skill/design/figma': { base: '/skill/design/figma/', items: sidebarFigma() },

    '/skill/design/uml': { base: '/skill/design/uml/', items: sidebarUML() },

    '/skill/management/pmp': { base: '/skill/management/pmp/', items: sidebarPmp() },
    '/skill/management/csmm': { base: '/skill/management/csmm/', items: sidebarCsmm() },

    '/others/markdown': { base: '/others/markdown/', items: sidebarMarkdown() },
    
    '/ai': { base: '/ai/', items: sidebarAI() }

  }
}
import { sidebarExample } from "./example";
import { sidebarNpm, sidebarPhp, sidebarJava, sidebarVue } from "./skill";
import { sidebarFigma, sidebarUML } from "./design";
import { sidebarPmp, sidebarCsmm } from "./management";
import { sidebarUbuntu, sidebarBt, sidebarOthers } from "./DevOps";
import { sidebarMarkdown } from "./others";
import { sidebarAI } from "./ai";
import { sidebarCli } from "./operation";
import { sidebarMusic } from "./music";

export default function sidebar() {
  return {
    // '/example/': { base: '/example/', items: sidebarExample() },
    "/skill/development/npm": {
      base: "/skill/development/npm/",
      items: sidebarNpm(),
    },
    "/skill/development/php": {
      base: "/skill/development/php/",
      items: sidebarPhp(),
    },
    "/skill/development/java": {
      base: "/skill/development/java/",
      items: sidebarJava(),
    },
    "/skill/development/vue": {
      base: "/skill/development/vue/",
      items: sidebarVue(),
    },

    "/skill/design/figma": {
      base: "/skill/design/figma/",
      items: sidebarFigma(),
    },

    "/skill/design/uml": { base: "/skill/design/uml/", items: sidebarUML() },

    "/skill/management/pmp": {
      base: "/skill/management/pmp/",
      items: sidebarPmp(),
    },
    "/skill/management/csmm": {
      base: "/skill/management/csmm/",
      items: sidebarCsmm(),
    },

    "/skill/DevOps/ubuntu": {
      base: "/skill/DevOps/ubuntu/",
      items: sidebarUbuntu(),
    },
    "/skill/DevOps/bt": { base: "/skill/DevOps/bt/", items: sidebarBt() },
    "/skill/DevOps/others": {
      base: "/skill/DevOps/others/",
      items: sidebarOthers(),
    },

    "/skill/operation": { base: "/skill/operation/", items: sidebarCli() },

    "/others/markdown": { base: "/others/markdown/", items: sidebarMarkdown() },

    "/ai": { base: "/ai/", items: sidebarAI() },

    "/music": { base: "/music/", items: sidebarMusic() },
  };
}

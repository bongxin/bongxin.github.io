export default function sidebar() {
  const rootDir = './docs'
  return {
    '/skill/development/framework/': [
      walk(rootDir + '/skill/development/framework/', '前后端框架'),
    ],
    '/skill/development/npm/': [
      walk(rootDir + '/skill/development/npm/', 'npm'),
      walk(rootDir + '/skill/development/npm/', 'Yarn'),
      walk(rootDir + '/skill/development/npm/', 'cnpm'),
    ],
    '/skill/development/vue/': [
      walk(rootDir + '/skill/development/vue/', 'Vue'),
      walk(rootDir + '/skill/development/vue/', 'Element Plus'),
      walk(rootDir + '/skill/development/vue/', 'Vant'),
      walk(rootDir + '/skill/development/vue/', 'VitePress'),
      walk(rootDir + '/skill/development/vue/', 'VueUse'),
    ],
    '/skill/development/php/': [
      walk(rootDir + '/skill/development/php/', 'PHP'),
      walk(rootDir + '/skill/development/php/', 'WordPress'),
    ],
    '/skill/development/nestjs/': [
      walk(rootDir + '/skill/development/nestjs/', 'NestJS'),
    ],
    '/skill/design/figma/': [
      walk(rootDir + '/skill/design/figma/', 'Figma'),
    ],
    '/skill/design/ps/': [
      walk(rootDir + '/skill/design/ps/', 'PhotoShop'),
    ],
    '/skill/operation/bt/': [
      walk(rootDir + '/skill/operation/bt/', '宝塔面板'),
    ],
    '/skill/operation/github/': [
      walk(rootDir + '/skill/operation/github/', 'GitHub'),
    ],
    '/skill/operation/openwrt/': [
      walk(rootDir + '/skill/operation/', 'openwrt'),
    ],
    '/skill/operation/ubuntu/': [
      walk(rootDir + '/skill/operation/ubuntu/', '基本配置'),
      walk(rootDir + '/skill/operation/ubuntu/', '常见操作'),
      walk(rootDir + '/skill/operation/ubuntu/', '常见问题'),
    ],
    '/skill/editing/pr/': [
      walk(rootDir + '/skill/editing/pr/', 'Premiere Pro'),
    ],
    '/skill/management/pmp/': [
      walk(rootDir + '/skill/management/pmp/', 'PMP'),
    ],
    '/bernsine/acappella/': [
      walk(rootDir + '/bernsine/acappella/', ''),
    ],
    '/bernsine/guangzhou/': [
      walk(rootDir + '/bernsine/guangzhou/', ''),
    ],
    '/crack/': [
      walk(rootDir + '/crack/','软件'),
    ],
    '/knowledge/': [
      walk(rootDir + '/knowledge/','简述'),
    ],
    '/resource/': [
      walk(rootDir + '/resource/','副业网站'),
      walk(rootDir + '/resource/','冷门生意'),
    ],
  };
}

const path = require('path');
const fs = require('fs');

// 动态生成侧边栏函数
const walk = function (dir, subDir = '') {
  let results = [];
  const list = fs.readdirSync(dir + subDir);
  list.forEach((file) => {
    file = dir + subDir + '/' + file;
    if (path.extname(file) === '.md') {
      results.push(file);
    }
  })
  const items = results.map((item) => {
    return {
      text: path.basename(item, '.md'),
      link: item.slice(6, -3)
    }
  }).sort((a, b) => {
    const index1 = Number(a.text.split('.')[0])
    const index2 = Number(b.text.split('.')[0])
    return index1 - index2
  })
  return {
    text: subDir,
    collapsible: true,
    collapsed: false,
    items: items
  }
};

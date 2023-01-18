export default function sidebar() {
  const rootDir = './docs'
  return {
    '/skill/development/vue/': [
      walk(rootDir + '/skill/development/vue/', 'VitePress'),
    ],
    '/skill/development/php/': [
      walk(rootDir + '/skill/development/php/', 'PHP'),
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
    '/skill/editing/pr/': [
      walk(rootDir + '/skill/editing/pr/', 'Premiere Pro'),
    ],
    '/skill/management/pmp/': [
      walk(rootDir + '/skill/management/pmp/', 'PMP'),
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

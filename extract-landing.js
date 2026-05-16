const fs = require('fs');
const text = fs.readFileSync('landing.html', 'utf8');
const match = text.match(/https?:\/\/[^\s"'>]+/g) || text.match(/[a-zA-Z0-9_\-\/]+\.(?:png|jpg|jpeg|webp|svg)/g);
if (match) {
  console.log([...new Set(match)].join('\n'));
}

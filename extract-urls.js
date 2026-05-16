const fs = require('fs');
const text = fs.readFileSync('app.js', 'utf8');
const urls = text.match(/https?:\/\/[^\s"']+/g);
if (urls) {
  console.log([...new Set(urls)].join('\n'));
}

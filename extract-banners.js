const fs = require('fs');
const text = fs.readFileSync('app.js', 'utf8');
const match = text.match(/https?:\/\/[^\s"']+/g);
if (match) {
  console.log([...new Set(match.filter(m => m.includes('banner') || m.includes('offer')))].join('\n'));
}

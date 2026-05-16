const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const regex = /["']([^"']*?\.(?:png|jpg|jpeg|webp|svg|gif))["']/g;
const matches = content.match(regex);
if (matches) {
  const unique = [...new Set(matches.map(m => m.slice(1, -1)))];
  console.log(unique.join('\n'));
} else {
  console.log('No matches');
}

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.apbook.in/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 5000));
  const html = await page.content();
  const start = html.indexOf('<div id="app"');
  console.log(html.substring(start, start + 2000));
  await browser.close();
})();

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://landingpage.apbook.in/T1/index.html?v=20849', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'iframe-only.png', fullPage: true });
  await browser.close();
  console.log("Screenshot saved to iframe-only.png");
})();

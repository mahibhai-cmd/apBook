const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.apbook.in/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'apbook-real-home.png', fullPage: true });
  await browser.close();
  console.log("Screenshot saved to apbook-real-home.png");
})();

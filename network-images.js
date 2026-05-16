const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const imageUrls = new Set();
  
  page.on('response', response => {
    const url = response.url();
    if (response.request().resourceType() === 'image') {
      imageUrls.add(url);
    }
  });

  console.log("Loading home...");
  await page.goto('https://www.apbook.in/', { waitUntil: 'networkidle2' });
  
  console.log("Loading login...");
  await page.goto('https://www.apbook.in/login', { waitUntil: 'networkidle2' });

  console.log("Loading register...");
  await page.goto('https://www.apbook.in/register', { waitUntil: 'networkidle2' });
  
  console.log("Images found via network:");
  console.log(Array.from(imageUrls).join('\n'));
  
  await browser.close();
})();

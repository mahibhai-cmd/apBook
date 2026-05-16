const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const imgDir = path.join(__dirname, 'public');
  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

  let imageCount = 1;

  page.on('response', async response => {
    try {
      const request = response.request();
      if (request.resourceType() === 'image') {
        const url = response.url();
        const buffer = await response.buffer();
        
        let filename = 'image_' + imageCount + '.jpg';
        if (url.includes('.png')) filename = 'image_' + imageCount + '.png';
        if (url.includes('.webp')) filename = 'image_' + imageCount + '.webp';
        if (url.includes('.svg')) filename = 'image_' + imageCount + '.svg';
        
        if (url.includes('login-right-img')) filename = 'login-bg.jpg';
        if (url.includes('signup-right-img')) filename = 'register-bg.jpg';
        if (url.includes('apbook2032')) filename = 'logo.png';
        if (url.includes('c38d0307') || url.includes('banner')) filename = 'banner.jpg';
        if (url.includes('live-casino-popup')) filename = 'banner.jpg';

        fs.writeFileSync(path.join(imgDir, filename), buffer);
        console.log(`Saved ${filename} from ${url}`);
        imageCount++;
      }
    } catch (e) {}
  });

  console.log("Loading apbook.in...");
  await page.goto('https://www.apbook.in/', { waitUntil: 'networkidle0' });
  
  console.log("Loading apbook.in/login...");
  await page.goto('https://www.apbook.in/login', { waitUntil: 'networkidle0' });

  console.log("Loading apbook.in/register...");
  await page.goto('https://www.apbook.in/register', { waitUntil: 'networkidle0' });

  await browser.close();
  console.log("Done");
})();

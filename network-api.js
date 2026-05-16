const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('response', async response => {
    const url = response.url();
    if (response.request().resourceType() === 'xhr' || response.request().resourceType() === 'fetch') {
      try {
        const text = await response.text();
        if (text.includes('png') || text.includes('jpg') || text.includes('webp') || text.includes('banner')) {
          console.log("API URL:", url);
          console.log("Response Snippet:", text.substring(0, 500));
        }
      } catch (e) {}
    }
  });

  await page.goto('https://www.apbook.in/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 5000)); // Wait for extra API calls
  await browser.close();
})();

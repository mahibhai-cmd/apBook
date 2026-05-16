const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Go to the home page
  await page.goto('https://www.apbook.in/', { waitUntil: 'networkidle0' });
  
  // Extract all img tags and background images
  const images = await page.evaluate(() => {
    const urls = new Set();
    
    // Get img tags
    document.querySelectorAll('img').forEach(img => {
      if (img.src) urls.add(img.src);
    });
    
    // Get background images
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        const urlMatch = bg.match(/url\(['"]?(.*?)['"]?\)/);
        if (urlMatch && urlMatch[1]) urls.add(urlMatch[1]);
      }
    });
    
    return Array.from(urls);
  });
  
  // Also try login page
  await page.goto('https://www.apbook.in/login', { waitUntil: 'networkidle0' });
  const loginImages = await page.evaluate(() => {
    const urls = new Set();
    document.querySelectorAll('img').forEach(img => {
      if (img.src) urls.add(img.src);
    });
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        const urlMatch = bg.match(/url\(['"]?(.*?)['"]?\)/);
        if (urlMatch && urlMatch[1]) urls.add(urlMatch[1]);
      }
    });
    return Array.from(urls);
  });

  // Also try register page
  await page.goto('https://www.apbook.in/register', { waitUntil: 'networkidle0' });
  const registerImages = await page.evaluate(() => {
    const urls = new Set();
    document.querySelectorAll('img').forEach(img => {
      if (img.src) urls.add(img.src);
    });
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        const urlMatch = bg.match(/url\(['"]?(.*?)['"]?\)/);
        if (urlMatch && urlMatch[1]) urls.add(urlMatch[1]);
      }
    });
    return Array.from(urls);
  });

  const allImages = [...new Set([...images, ...loginImages, ...registerImages])];
  console.log("Images found:\n" + allImages.join('\n'));
  
  fs.writeFileSync('images.json', JSON.stringify(allImages, null, 2));

  await browser.close();
})();

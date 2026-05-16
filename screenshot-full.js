const puppeteer = require('puppeteer');
(async () => {
  const b = await puppeteer.launch({ args: ['--no-sandbox'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto('https://www.apbook.in/', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 6000));
  const frames = p.frames();
  const iframe = frames.find(f => f.url().includes('landingpage'));
  if (iframe) {
    const h = await iframe.evaluate(() => document.body.scrollHeight);
    console.log('iframe height:', h);
    await p.evaluate((height) => {
      const el = document.querySelector('iframe');
      if (el) { el.style.height = height + 'px'; el.style.position = 'static'; }
      document.body.style.margin = '0'; document.body.style.padding = '0';
    }, h);
    await p.setViewport({ width: 1440, height: h });
    await new Promise(r => setTimeout(r, 1500));
    await p.screenshot({ path: 'apbook-real-full.png', fullPage: true });
    console.log('Saved apbook-real-full.png height=' + h);
  }
  await b.close();
})().catch(e => console.error(e.message));

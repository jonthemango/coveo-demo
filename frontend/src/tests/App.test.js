const puppeteer = require('puppeteer');


describe('App', () => {
    test('app loads correctly', async () => {
      let browser = await puppeteer.launch({
        headless: true
      });

      const page = await browser.newPage();
  
      page.emulate({
        viewport: {
          width: 2000,
          height: 2400
        },
        userAgent: ''
      });
  
      await page.goto('http://localhost:3000');
      await page.waitForSelector('.coveo-app');
  
      const html = await page.$eval('.coveo-app', e => e.innerHTML);
      const content = await page.content();
      //console.log(content)
      expect(html).toContain("SAQ");
      

      browser.close();
    }, 16000);
  });
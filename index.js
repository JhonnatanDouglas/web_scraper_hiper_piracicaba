const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto("");

  await browser.close();
})();

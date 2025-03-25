const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.goto(
    "https://mercado.carrefour.com.br/bebidas#crfint=hm|header-menu-corredores|bebidas|4",
    { waitUntil: "domcontentloaded", timeout: 60000 }
  );

  // Wait for all necessary selectors to load on the page
  await page.waitForSelector('a[data-testid="product-link"]');
  await page.waitForSelector('span[data-test-id="price"]');
  await page.waitForSelector('div[data-test="discount-badge"]');
  await page.waitForSelector(
    'div[data-testid="store-product-card-image"] > img'
  );
  await page.waitForSelector("article > p");

  // Extract product information
  const productsToJson = await page.evaluate(() => {
    const drinksList = [];

    // Get the necessary elements from the DOM
    const titlesElements = document.querySelectorAll(
      'a[data-testid="product-link"]'
    );
    const pricesElements = document.querySelectorAll(
      'span[data-test-id="price"]'
    );
    const discountElements = document.querySelectorAll(
      'div[data-test="discount-badge"]'
    );
    const images = document.querySelectorAll(
      'div[data-testid="store-product-card-image"] > img'
    );
    const sponsoredElements = document.querySelectorAll("article > p");

    titlesElements.forEach((title, i) => {
      // Get elements for each product
      const priceElement = pricesElements[i] || null;
      const imageElement = images[i] || null;
      const discountElement = discountElements[i]
        ? discountElements[i].querySelector("div > span")
        : null;
      const sponsoredText = sponsoredElements[i]
        ? sponsoredElements[i].textContent.trim()
        : null;

      // Extract and format product details
      const productTitle = title ? title.textContent.trim() : "Title not found";
      const productPrice = priceElement
        ? priceElement.getAttribute("data-value").trim()
        : "Price unavailable";
      const productDiscount = discountElement
        ? discountElement.textContent.replace("-", "").replace("%", "").trim()
        : "0";
      const productUrl = title ? title.getAttribute("href").trim() : "#";
      const imageUrl = imageElement ? imageElement.src : "Image unavailable";
      const isSponsored = sponsoredText && sponsoredText === "Patrocinado";

      // Add product data to the drinksList
      drinksList.push({
        productTitle,
        productPrice,
        productDiscount,
        productUrl,
        imageUrl,
        isSponsored,
      });
    });

    return drinksList;
  });

  // Write the list of products to a JSON file
  fs.writeFileSync("output.json", JSON.stringify(productsToJson, null, 2));

  await browser.close();
})();

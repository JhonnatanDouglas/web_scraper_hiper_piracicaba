const puppeteer = require("puppeteer");
const fs = require("fs");

const formatDiscount = (product) => {
  const originalPrice = product.sellers[0].commertialOffer.ListPrice || 0;
  const currentPrice = product.sellers[0].commertialOffer.Price || 0;

  const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
  const discountPercentage =
    originalPrice > currentPrice ? Math.round(discount) : 0;

  return { originalPrice, currentPrice, discountPercentage };
};

const allProductsList = [];

const scrapHandle = (data) => {
  const productsList = data.data.search.products.edges;

  productsList.forEach((edge) => {
    const product = edge.node;

    const { originalPrice, currentPrice, discountPercentage } =
      formatDiscount(product);

    const stockQuantity =
      product.sellers[0].commertialOffer.AvailableQuantity || 0;

    allProductsList.push({
      id: product.id,
      name: product.name,
      properties: product.properties,
      brandName: product.brand.name,
      unitType: product.measurementUnit,
      gtinCode: product.gtin,
      slug: product.slug,
      imageUrls: product.image,
      originalPrice: originalPrice,
      discountedPrice: currentPrice,
      discountPercentage: discountPercentage,
      stockQuantity: stockQuantity,
    });
  });
};

const fetchingAllProductsPagination = async (browser) => {
  let after = 0;
  const limit = 60;

  while (true) {
    const apiUrl = `https://mercado.carrefour.com.br/api/graphql?operationName=ProductsQuery&variables=%7B%22isPharmacy%22%3Afalse%2C%22first%22%3A${limit}%2C%22after%22%3A%22${after}%22%2C%22sort%22%3A%22score_desc%22%2C%22term%22%3A%22%22%2C%22selectedFacets%22%3A%5B%7B%22key%22%3A%22category-1%22%2C%22value%22%3A%22bebidas%22%7D%5D%7D`;

    try {
      const cookies = await browser.cookies();
      const cookiesToString = cookies
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join("; ");

      const res = await fetch(apiUrl, {
        headers: {
          Cookie: cookiesToString,
        },
      });
      const data = await res.json();

      if (!data?.data?.search?.products?.edges?.length) break;

      const products = data.data.search.products.edges;

      if (products.length === 0) break;

      console.log(
        `🔍 Searching page ${after / limit + 1} | 📦 Products returned: ${
          products.length
        }`
      );

      scrapHandle(data);
      after += limit;
    } catch (error) {
      console.error("❌ Error: pulling products pagination! ", error);
      break;
    }
  }
};

(async () => {
  let browser;

  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://mercado.carrefour.com.br/bebidas#crfint=hm|header-menu-corredores|bebidas|4"
    );

    await fetchingAllProductsPagination(browser);

    fs.writeFileSync("output.json", JSON.stringify(allProductsList, null, 2));
    console.log(
      `\n📦 Total products collected: ${allProductsList.length}, saved in output.json!`
    );
  } catch (error) {
    console.error("❌ Error: running web scraper! ", error);
  } finally {
    if (browser) await browser.close();
  }
})();

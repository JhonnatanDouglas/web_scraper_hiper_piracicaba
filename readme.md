# 🏆 Web Scraper - Carrefour (Hiper Piracicaba)

This project is a **web scraper** developed in **Node.js** using **Puppeteer** to collect data from the drinks section of `Carrefour`, `Hiper Piracicaba` store.

## 🚀 Technologies used

- **Node.js**
- **Puppeteer**
- **Fetch API**

## 📌 Description

The script **navigates to the drinks page of Carrefour** and extracts relevant information such as:

✅ Product ID  
✅ Product name  
✅ Product properties  
✅ Product brand  
✅ Unit of measurement type  
✅ GTIN code  
✅ Product slug  
✅ Image URLs  
✅ Original price  
✅ Discounted price  
✅ Discount percentage  
✅ Stock quantity

**The collected data is saved in a `output.json` file.**

## 🛠️ Scraping Strategy

1. The script accesses the Carrefour **drinks** category page.
2. It uses Carrefour's GraphQL API to get the paginated products.
3. It extracts relevant data for each product.
4. It saves the results to a JSON file.

The scraper makes multiple requests to ensure **all products** are collected, iterating through the result pages until **no more products are available**.

## 📂 Project structure

```
📦 web-scraper-project
 ├── 📜 index.js        # Main script that runs the scraper
 ├── 📜 output.json     # JSON file containing the collected data
 ├── 📜 package.json    # Project dependencies
 ├── 📜 .gitignore      # Files ignored by Git
 └── 📜 README.md       # Project documentation
```

## ⚙️ How to run

1.  Clone this repository:

    ```sh
    git clone https://github.com/JhonnatanDouglas/web_scraper_hiper_piracicaba.git
    ```

    - Then navigate to the folder:

      ```sh
      cd web_scraper_hiper_piracicaba
      ```

2.  Install the dependencies:
    ```sh
    npm i
    ```
3.  Run the script:
    ```sh
    node index.js
    ```
4.  The result will be saved in the `output.json` file.

## 📌 Notes

- The scraper uses **session cookies** to ensure correct access to the data.
- The process may take a few minutes, depending on the number of available products.
- If an error occurs during extraction, the script will display detailed error messages in the console.

---

Resolved and made with care by [Jhonnatan Douglas](https://github.com/JhonnatanDouglas) 🚀

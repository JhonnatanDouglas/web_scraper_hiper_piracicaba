# 🏆 Web Scraper - Carrefour (Hiper Piracicaba)

Este projeto é um **web scraper** desenvolvido em **Node.js** usando **Puppeteer** para coletar dados da seção de bebidas do Carrefour, loja Hiper Piracicaba.

## 🚀 Tecnologias utilizadas

- **Node.js**
- **Puppeteer**
- **Fetch API**

## 📌 Descrição

O script **navega até a página de bebidas do Carrefour** e extrai informações relevantes, como:  
✅ Nome do produto  
✅ Preço do produto  
✅ Valor do desconto  
✅ Porcentagem do desconto  
✅ Src da imagem  
✅ Alt da imagem

Os dados coletados são salvos em um arquivo `output.json`.

## 📂 Estrutura do projeto

```
📦 projeto-web-scraper
 ├── 📜 index.js        # Script principal que executa o scraper
 ├── 📜 output.json     # Arquivo JSON contendo os dados coletados
 ├── 📜 package.json    # Dependências do projeto
 ├── 📜 .gitignore      # Arquivos ignorados no Git
 └── 📜 README.md       # Documentação do projeto
```

## ⚙️ Como executar

1. Clone este repositório:
   ```sh
   git clone https://github.com/JhonnatanDouglas/web_scraper_hiper_piracicaba.git
   cd pasta-do-web-scraper
   ```
2. Instale as dependências:
   ```sh
   npm i
   ```
3. Execute o script:
   ```sh
   node index.js
   ```
4. O resultado será salvo no arquivo `output.json`.

---

Resolvido e feito atenciosamente por [Jhonnatan Douglas](https://github.com/JhonnatanDouglas) 🚀

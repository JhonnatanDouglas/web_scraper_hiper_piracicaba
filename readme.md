# 🏆 Web Scraper - Carrefour (Hiper Piracicaba)

Este projeto é um **web scraper** desenvolvido em **Node.js** usando **Puppeteer** para coletar dados da seção de bebidas do `Carrefour`, loja `Hiper Piracicaba`.

## 🚀 Tecnologias utilizadas

- **Node.js**
- **Puppeteer**
- **Fetch API**

## 📌 Descrição

O script **navega até a página de bebidas do Carrefour** e extrai informações relevantes, como:

✅ ID do produto  
✅ Nome do produto  
✅ Propriedades do produto  
✅ Marca do produto  
✅ Tipo de unidade de medida  
✅ Código GTIN  
✅ Slug do produto  
✅ URLs das imagens  
✅ Preço original  
✅ Preço com desconto  
✅ Porcentagem do desconto  
✅ Quantidade em estoque

**Os dados coletados são salvos em um arquivo `output.json`.**

## 🛠️ Estratégia de Scraping

1. O script acessa a página da categoria **bebidas** do Carrefour.
2. Usa a API GraphQL do Carrefour para obter os produtos paginados.
3. Extraí os dados relevantes de cada produto.
4. Salva os resultados em um arquivo JSON.

O scraper faz múltiplas requisições para garantir que **todos os produtos** sejam coletados, iterando pelas páginas de resultados até que **não haja mais produtos disponíveis**.

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

1.  Clone este repositório:

    ```sh
    git clone https://github.com/JhonnatanDouglas/web_scraper_hiper_piracicaba.git
    ```

    - Depois entre na pasta:

      ```sh
      cd web_scraper_hiper_piracicaba
      ```

2.  Instale as dependências:
    ```sh
    npm i
    ```
3.  Execute o script:
    ```sh
    node index.js
    ```
4.  O resultado será salvo no arquivo `output.json`.

## 📌 Observações

- O scraper utiliza **cookies da sessão** para garantir acesso aos dados corretamente.
- O processo pode demorar alguns minutos, dependendo da quantidade de produtos disponíveis.
- Caso ocorra algum erro durante a extração, o script exibirá mensagens de erro detalhadas no console.

---

Resolvido e feito atenciosamente por [Jhonnatan Douglas](https://github.com/JhonnatanDouglas) 🚀

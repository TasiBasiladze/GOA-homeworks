const http = require("http");
const fs = require("fs");

let products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET" && req.url === "/products") {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(products));
  }

  if (req.method === "POST" && req.url === "/products") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newProduct = JSON.parse(body);
      products.push(newProduct);

      fs.writeFileSync("products.json", JSON.stringify(products));

      res.setHeaders("Content-Type", "application/json");
      res.end(JSON.stringify(newProduct));
    });
  }
});

server.listen(3000, () => {
  console.log("server is listening...");
});
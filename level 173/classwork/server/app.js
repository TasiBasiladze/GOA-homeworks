const http = require("http");
const fs = require("fs");
let products = fs.readFileSync("products.json", "utf-8");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    if(req.method === "GET"){
        res.setHeader("content-type", "application/json");
        res.end(products)
    }
})

server.listen(3000, () => {
    console.log("server is listening...")
})
const http = require("http");
const fs = require("fs");
const cars = fs.readFileSync("cw.json", "utf-8");

const server = http.createServer((req, res) => {
    if(req.url == "/cars" && req.method == "GET"){
        res.setHeader("Content-type", "application/json");
        res.end(cars);
    } else if(req.url == "/cars" && req.method == "POST"){
        res.end("car added successfully!");
    }
})

server.listen(3000, () => {
    console.log("server is listening...");
});


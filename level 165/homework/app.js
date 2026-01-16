const http = require("http");
const fs = require("fs");
const cars = fs.readFileSync("hw.json", "utf-8");
const names = fs.readFileSync("hw2.json", "utf-8");

const server = http.createServer((req, res) => {
    if(req.url === "/cars" && req.method === "GET"){
        res.setHeader("content-type", "application/json");
        res.end(cars);
    } else if(req.url === "/cars" && req.method === "POST"){
        res.end("car added successfully!")
    } else if(req.url === "/names" && req.method === "GET"){
        res.setHeader("content-type", "application/json");
        res.end(names);
    }
})

//Headers are additional information about data that tell the program 
//how to handle the request or response, including in which format 
//the data should be read.
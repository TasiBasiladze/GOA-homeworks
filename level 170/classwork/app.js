const http = require("http");
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const splitUser = url.pathname.slice(1).split("/");
    if(url.pathname == "/register" && req.method == "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        req.on("end", () => {
            const objBody = JSON.parse(body);
            objBody.id = Date.now();
            users.push(objBody);
            fs.writeFileSync("users.json", JSON.stringify(users), "utf-8")
            res.end("user registered successfully!")
        })
    } else if(url.pathname == "/users" && req.method == "GET"){
        res.setHeader("content-type", "application/json")
        res.end(JSON.stringify(users))
    }
})


const http = require("http");
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const splitUser = url.pathname.slice(1).split("/");
    const query = url.searchParams
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
    } else if(url.pathname == "/users" && req.method == "GET" && query.size > 0){
        const paramDetails = Object.entries(Object.fromEntries(query))
        const filtUsers = users.filter((user) => {
            for(let [key, value] of paramDetails){
                if(String(user[key]) != value){
                    return false
                }
            }
            return true
        })
        res.setHeader("content-type", "application/json")
        res.end(JSON.stringify(filtUsers))
    } else if(url.pathname == "/users" && req.method == "GET"){
        res.setHeader("content-type", "application/json")
        res.end(JSON.stringify(users))
    } else if(splitUser[0] == "users" && req.method == "GET" && splitUser.length == 2){
        const userId = users.findIndex(user => user.id == splitUser[1]);
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(users[userId]));
    } else if(splitUser[0] == "users" && req.method == "DELETE" && splitUser.length == 2){
        const delId = users.findIndex(user => user.id == splitUser[1]);
        users.splice(delId, 1);
        fs.writeFileSync("users.json", JSON.stringify(users), "utf-8");
        res.end("user deleted successfully!")
    }
})

server.listen(3000, () => {
    console.log("server is listening...")
})
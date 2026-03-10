const http = require("http");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json"));

const app = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const query = url.searchParams
    if(url.pathname == "/users" && req.method == "GET" && query.size == 1){
        const queryItem = query.get("email");
        const indexUser = data.findIndex(user => user.email == queryItem);
        if (indexUser == -1){
            res.statusCode = 404;
            res.end("user not found");
        } else{
            res.statusCode = 200;
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify(data[indexUser]))
        }
    } else if(url.pathname == "/users" && req.method == "GET"){
        if(data.length == 0){
            res.statusCode = 404;
            res.end("no users found")
        } else{
            res.statusCode = 200;
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify(data))
        };
    } else if(url.pathname == "/users" && req.method == "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        req.on("end", () => {
            if (!body) {
                res.statusCode = 400;
                res.end("body is required");
                return;
            }
            let parsedBody = JSON.parse(body);
            let count = 0;
            for(let i = 0; i < data.length; i++){
                if(data[i].email == parsedBody.email){
                    count += 1
                }
            }
            if (count == 0){
                parsedBody.id = data.length + 1;
                data.push(parsedBody);
                fs.writeFileSync("data.json", JSON.stringify(data), "utf-8");
                res.statusCode = 201;
                res.end("user added successfully!")
            } else{
                res.statusCode = 409;
                res.end("user with this email already exists!");
            }
        })
    } else if(url.pathname == "/users" && req.method == "PUT" && query.size == 1){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        req.on("end", () => {
            if (!body) {
                res.statusCode = 400;
                res.end("body is required");
                return;
            }
            let parsedBody = JSON.parse(body);
            const queryItem = query.get("email");
            const indexUser = data.findIndex(user => user.email == queryItem);
            if(indexUser == -1){
                res.statusCode = 404;
                res.end("user not found");
            } else{
                data[indexUser] = {...data[indexUser], ...parsedBody}
                fs.writeFileSync("data.json", JSON.stringify(data), "utf-8");
                res.end("email changed successfully")
            }
        })
    } else if (url.pathname == "/users" && req.method == "DELETE" && query.size == 1) {
        const queryItem = query.get("email");
        const indexUser = data.findIndex(user => user.email == queryItem);
        if(indexUser === -1){
            res.statusCode = 404;
            res.end("user not found");
        } else {
            data.splice(indexUser, 1);
            fs.writeFileSync("data.json", JSON.stringify(data), "utf-8");
            res.statusCode = 200;
            res.end("User deleted successfully");
        }
    } else {
        res.statusCode = 404;
        res.end("route not found");
    }
})

app.listen(3000, () => {
    console.log("server is listening...")
})
const express = require("express");
const app = express()
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));


app.get("/admin", (req, res) => {
    res.json(users);
})

app.post("/register", express.json(), (req, res) => {
    if(Object.keys(req.body).length !== 3){
        return res.status(400).end();
    }
    users.push({"id": users.length, ...req.body});
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.status(201).end();
})

app.post("/authorisation", express.json(), (req, res) => {
    if(Object.keys(req.body).length !== 2){
        return res.status(400).end();
    }
    if(users.some(user => Object.entries(req.body).every(([key, value]) => user[key] == value))){
        res.status(200).end();
    } else{
        res.status(400).end();
    }
})

app.delete("/main/:id", (req, res) => {
    const delId = parseInt(req.params.id);
    const index = users.findIndex(obj => obj.id == delId);
    users.splice(index, 1);
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.status(204).end();
})

app.listen(3000, () => {
    console.log("server is listeninig...")
})
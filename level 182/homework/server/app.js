const express = require("express");
const cors = require("cors");
const app = express()
app.use(cors());
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));


app.get("/admin", (req, res) => {
    const userId = parseInt(req.query.id);

    if (userId !== 0) {
        return res.status(403).end();
    }

    res.status(200).json(users);
})

app.post("/register", express.json(), (req, res) => {
    if(Object.keys(req.body).length !== 3){
        return res.status(400).end();
    }
    
    const exists = users.some(user => user.email === req.body.email);
    if(exists){
        return res.status(409).end(); 
    }

    users.push({"id": users.length, ...req.body});
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.status(201).end();
})

app.post("/authorisation", express.json(), (req, res) => {
    if (Object.keys(req.body).length !== 2) {
        return res.status(400).end();
    }

    const user = users.find(user => 
        Object.entries(req.body).every(([key, value]) => user[key] == value)
    );

    if (user) {
        return res.status(200).json(user);
    } else {
        return res.status(400).end();
    }
});

app.delete("/main/:id", (req, res) => {

    const userId = parseInt(req.query.userId);
    const delId = parseInt(req.params.id);

    if(userId !== 0 && userId !== delId){
        return res.status(403).end();
    }

    const index = users.findIndex(user => user.id === delId);

    if (index === -1) {
        return res.status(404).end();
    }

    users.splice(index, 1);

    fs.writeFileSync("users.json", JSON.stringify(users));

    res.status(204).end();
});

app.listen(3000, () => {
    console.log("server is listeninig...")
})
const express = require("express");
const app = express();
let users = [];

app.get("/users", (req, res) => {
    res.json(users);
})

app.get("/users/:id", (req, res) => {
    const getId = parseInt(req.params.id);
    const index = users.findIndex(cur => cur.id == getId);
    if(index == -1){
        res.status(404).send("id not found")
    } else {
        res.json(users[index]);
    }
    
})

app.post("/users", express.json(), (req, res) => {
    users.push({id: users.length + 1, ...req.body });
    res.status(201).send("user added succsesfully!");
})

app.delete("/users/:id", (req, res) => {
    const delId = parseInt(req.params.id);
    const index = users.findIndex(cur => cur.id == delId);
    if(index == -1){
        res.status(404).send("id not found");
    } else{ 
        users.splice(index, 1);
        res.send("user deleted successfullt");
    }
})

app.listen(3000, () => {
    console.log("server is listening...");
})
const express = require("express");
const app = express();
let users = [];

app.get("/users", (req, res) => {
    if(!Object.keys(req.query).length){
        return res.json(users);
    }
    let filteredUsers = users.filter(cur => {
        for(key in req.query){
            if(cur[key] != req.query[key]){
                return false
            }
        }
        return true
    })
    res.json(filteredUsers);
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

app.put("/users/:id", express.json(), (req, res) => {
    const getId = parseInt(req.params.id);

    const index = users.findIndex(cur => cur.id == getId);
    if(index == -1){
        return res.status(404).send("id not found");
    }

    const keys = Object.keys(req.body);

    if (
        (keys.length == 1 || keys.length == 2) &&
        keys.every(key => key === "name" || key === "age")
    ){
        users[index] = { ...users[index], ...req.body };
        res.send("user changed successfully");
    } else {
        res.status(400).send("bad request");
    }
});

app.listen(3000, () => {
    console.log("server is listening...");
})
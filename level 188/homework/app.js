//task 1
//middleware function is a funnction that is called after request and is executed before response. 
//for example, express.json(). also any callback function of the route handler is а middleware function.

//task 2
//we use next() function to get to the next middleware function after current was executed. 
//we use it cause if callback function hasn't sent any response then client is still waiting for it,
//and understandably doesn't get anything, which causes eternal loading. if we use next() function tho 
//it is gonna tell server to switch to the next middleware right after current function is executed, 
//which is going to prevent said problem.

//task 3
const express = require("express");
const app = express();
let posts = [];

app.use(express.json())

app.use((req, res, next) => {
    console.log(`method: ${req.method}, path: ${req.path}`);
    next();
})

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.post("/posts", (req, res) => {
    posts.push(req.body);
    res.send("post is added successfully");
});

app.listen(3000, () => {
    console.log("server is listening...");
});
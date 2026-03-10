const express = require("express");
const postRouter = require("./router/postRouter");
const app = express();
app.use(express.json());
app.use("/posts", postRouter);

app.listen(3000, () => {
    console.log("server is listening...")
})
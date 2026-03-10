const express = require("express");
const cors = require("cors");
const app = express()
app.use(cors());
const userRouter = require("./router/userRouter.js");
app.use(express.json());
app.use("/users", userRouter);


app.listen(3000, () => {
    console.log("server is listeninig...")
})
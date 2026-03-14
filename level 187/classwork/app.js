const express = require("express");
const studentsRouter = require("./router/studentsRouter");
const app = express();
app.use(express.json());
app.use("/students", studentsRouter);

app.listen(3000, () => {
    console.log("server is listening...")
})
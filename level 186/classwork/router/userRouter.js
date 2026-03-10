const express = require("express");
const { getUsers, register, authorisation, deleteUsers } = require("../controller/users.controller.js");
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/register", register);
userRouter.post("/authorisation", authorisation);
userRouter.delete("/main/:id", deleteUsers);



module.exports = userRouter;
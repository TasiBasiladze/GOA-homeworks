const express = require("express");
const { getPosts, getPost, addPost, changePost, addComment, deletePost } = require("../controller/post.controller");
const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);
postRouter.post("/add", addPost);
postRouter.patch("/change/:id", changePost);
postRouter.post("/comment/:id", addComment);
postRouter.delete("/delete/:id", deletePost);


module.exports = postRouter;
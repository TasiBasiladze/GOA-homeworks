const fs = require("fs");
let posts = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));

const getPosts = (req, res) => {
    res.status(200).json(posts);
};

const addPost = (req, res) => {
    posts.push({id: posts.length == 0 ? 1 : posts.at(-1).id + 1, ...req.body});
    fs.writeFileSync("./data/posts.json", JSON.stringify(posts));
    res.status(201).send("post added successfully");
}

const getPost = (req, res) => {
    const index = posts.findIndex(post => post.id == req.params.id);
    if(index == -1){
        return res.status(400).send("post not found");
    }
    res.status(200).json(posts[index]);
}

const changePost = (req, res) => {
    const index = posts.findIndex(post => post.id == req.params.id);
    if(index == -1){
        return res.status(400).send("post not found");
    }
    posts[index] = {...posts[index], ...req.body}
    fs.writeFileSync("./data/posts.json", JSON.stringify(posts));
    res.status(200).send("post changed successfully");
}

const addComment = (req, res) => {
    const index = posts.findIndex(post => post.id == req.params.id);
    if(index == -1){
        return res.status(400).send("post not found");
    }
    let comments = posts[index].comments || []
    comments.push(req.body)
    posts[index] = {...posts[index], comments: comments}
    fs.writeFileSync("./data/posts.json", JSON.stringify(posts));
    res.status(200).send("comment added successfully");
}

const deletePost = (req, res) => {
    const index = posts.findIndex(post => post.id == req.params.id);
    if(index == -1){
        return res.status(400).send("post not found");
    }
    posts.splice(index, 1);
    fs.writeFileSync("./data/posts.json", JSON.stringify(posts));
    res.status(200).send("post deleted successfully");
}

module.exports = { getPosts, addPost, getPost, changePost, addComment, deletePost }


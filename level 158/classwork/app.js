const events = require("events");

const registerEmitter = new events.EventEmitter(); 
const authorizationEmitter = new events.EventEmitter();

let users = [];


registerEmitter.on("register", (user) => {
    users.push(user);
    console.log("user registered successfully");
})

registerEmitter.on("printUsers", () => {
    console.log(users);
})

authorizationEmitter.on("authorization", (email, password) => {
    if (users.some(user => user.email == email && user.password == password)){
        console.log("Authorization successfully");
    } else{
        console.log("user not found");
    }
});

const user1Info ={
    userName: "Taso",
    email: "Taso@gmail.com",
    password: "123"
};

const user2Info ={
    userName: "mari",
    email: "mari@gmail.com",
    password: "321"
};

registerEmitter.emit("register", user1Info);
registerEmitter.emit("register", user2Info);
registerEmitter.emit("printUsers");
authorizationEmitter.emit("authorization", "Taso@gmail.com", "123");
authorizationEmitter.emit("authorization", "mari@gmail.com", "321");
authorizationEmitter.emit("authorization", "uieyiweu", "78978");
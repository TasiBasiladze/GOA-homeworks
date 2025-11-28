const events = require("events");
const userEmitter = new events.EventEmitter();
const messageEmitter = new events.EventEmitter();

userEmitter.on("userJoined", (user) => {
    process.stdout.write(`user joined: ${user}\n`);
});

messageEmitter.on("message", (message) => {
    process.stdout.write(`message recieved: ${message}\n`);
});

userEmitter.emit("userJoined", "Taso");
userEmitter.emit("userJoined", "Hello, i am new user");
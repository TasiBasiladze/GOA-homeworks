// core module is built-in module, which is located in lib/ folder. we need to import it from there
//example: event

//global module is module which programming language has by default, we dont't need to import it.
//example: console, process

const arr = process.argv;

console.log(parseInt(arr[2]) + parseInt(arr[3]) + parseInt(arr[4]));
console.log(process.memoryUsage());

me = require("./script");
console.log(me)
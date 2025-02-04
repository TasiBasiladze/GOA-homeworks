//task 1
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = form.elements.username;
    let gmail = form.elements.email;
    let pass = form.elements.password;
    console.log(name.value);
    console.log(gmail.value);
    console.log(pass.value);
});

//task 2
//ES6 is update for js that came out in the 2015. during that update in js
// was added a lot of things that made coding more comfortable, like let and const keywords, arrow functions and much more

//task 3
//Scopeg defines where a variable or function has access in the code. Simply put, 
//it determines from where you can use a variable and where you cannot. e.g if variable
//is decleared inside code block, you cant call it on the level that is lower than this block's level

//task 4
let age = 14;
let name = "taso";
let lastName = "basiladze";
console.log(`i am ${age}`);
console.log(`my name is ${name}`);
console.log(`my last name is ${lastName}`);

//task 5
let balance = 100;
let hasMoney = false;
if(balance >= 100){
    hasMoney = true;
}
console.log(hasMoney ? "has money" : "doesn't have money");

let temperature = 30;
let isHot = false;
if (temperature > 25){
    isHot = true;
}
console.log(isHot ? "It's hot outside" : "It's cold outside");

let score = 85;
let passed = false;
if (score >= 50){
    passed = true;
}
console.log(passed ? "You passed the exam" : "You failed the exam");

//task 6
let balance2 = 100;
let hasMoney2 = false;
if(balance2 >= 100){
    hasMoney2 = true;
}
hasMoney2 && console.log("has money")

let temperature2 = 30;
let isHot2 = false;
if (temperature2 > 25){
    isHot2 = true;
}
isHot2 && console.log("it's hot outside");

let score2 = 85;
let passed2 = false;
if (score2 >= 50){
    passed2 = true;
}
passed2 && console.log("You passed the exam");


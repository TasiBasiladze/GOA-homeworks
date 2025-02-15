//task 2
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = form.elements.username;
    let gmail = form.elements.email;
    let pass = form.elements.password;
    console.log(name.value);
    console.log(gmail.value);
    console.log(pass.value);
    name.style.border = "2px solid green"; 
    gmail.style.border = "2px solid green"; 
    pass.style.border = "2px solid green"; 
    name.value = ""; 
    gmail.value = ""; 
    pass.value = ""; 
});

//task 3
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome!" : "Please log in";
console.log(message);

let age = 18;
let canDrive = (age >= 16) ? "Allowed to drive" : "Not allowed to drive";
console.log(canDrive);

//task 4
let isLoggedIn2 = true;
let hasPermission = true;
isLoggedIn2 && hasPermission && console.log("Access granted!"); 

let num2 = 8;
(num2 > 0 && num2 % 2 === 0) && console.log("The number is positive and even");

let input = "Hello";
input.length > 0 && console.log("Input is not empty");

//task 5
//how does work ternary operations: you write some condition or variable, after that write "?"
//and two options of output separated with ":". if condition or variable is true, output is option 
//that is on the left side of ":", if it's false, output is on the right side of ":".

//how does work && operations: here as well, you write some condition or variable, console.log
//and separate them with &&. as we know, && operation works only if both conditions are true, 
//so if condition is true, then whatever is in "console.log" outputs, and vice versa if it's false

//task 6
function varExample() {
    if (true) {
        var x = 10;
    }
    console.log(x); //Works (var is function-scoped)
}
varExample();

function letExample() {
    if (true) {
        let y = 20;
    }
    console.log(y); //Error (y is block-scoped)
}
letExample();

function constExample() {
    if(true) {
        const z = 30;
    }
    console.log(z); //Error (z is block-scoped)
}
constExample();
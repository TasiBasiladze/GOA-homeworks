//task 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(0, 4));
console.log(numbers.slice(6));
console.log(numbers.slice(4, 6));

//task 3
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let second = date.getSeconds();
console.log(`${year}/${month}/${day}/${hour}/${second}`);

//task 4
function randomPassword() {
    let length = 8;
    let symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*/_-";
    let pass = "";
    for(let i = 0; i < length; ++i){
        pass += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return pass
}

console.log(randomPassword())
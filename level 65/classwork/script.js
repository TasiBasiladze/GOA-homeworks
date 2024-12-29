//task 1
const array1 = ["taso", "basiladze", "tbilisi", 14];
console.log(array1);

//task 2
const array2 = new Array("taso", "basiladze", "tbilisi", 14);
console.log(array2);

//task 3
const array3 = new Array(4);
array3[0] = "taso";
array3[1] = "basiladze";
array3[2] = "tbilisi";
array3[3] = 14;
console.log(array3)

//task 4
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);

console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);

console.log(array3[0]);
console.log(array3[1]);
console.log(array3[2]);
console.log(array3[3]);

//task 5
console.log(array1.slice(0, 3));
console.log(array2.slice(3));
console.log(array3.slice(2));

//task 6
function random(max) {
    return Math.floor(Math.random() * max); 
  }

let randomNum = random(11);
console.log(randomNum);

//task 7
let counter = 0;
let interval = setInterval(function() {
  counter += 1;
  console.log(counter); 
  if (counter === 30) {
    clearInterval(interval);
  }
}, 1000);

//task 8
const today = new Date(); 
const day = today.getDate(); 
const month = today.getMonth();
const year = today.getFullYear(); 

console.log(day); 
console.log(month); 
console.log(year); 

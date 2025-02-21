//task 2
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b); 

//task 3
function args(first, ...others) {
    console.log("First argument:", first);  
    console.log("Other arguments:", others);  
}
args(1, 2, 3, 4);  

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first);   
console.log(second);  
console.log(rest);

const person = {
    name: "John",
    age: 30,
    job: "Developer",
    country: "USA"
};
const { name, job, ...otherInfo } = person;
console.log(name);      
console.log(job);       
console.log(otherInfo);

//task 4
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

const numbers = [1, 2, 3, 4];
function sum(a, b, c, d) {
  return a + b + c + d;
}
const result = sum(...numbers); 
console.log(result);
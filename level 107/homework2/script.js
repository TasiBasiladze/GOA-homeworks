//task 1
//Modularity in programming means dividing code into independent parts modules, 
//each with its own specific function. Every module works separately from the 
//others, which makes the code easier to read, modify, and reuse. Modular code 
//is more organized, and different parts of the program are easier to locate and test.

//task 2
//The key attribute in React is used as a unique identifier for elements in lists (arrays). 
//It helps React determine which items have changed, been added, or removed. This makes 
//updating lists faster and more efficient. The key should be unique for each element within its context.

//task 5
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 

const names = ["Taso", "Luka", "Nika"];
const greetings = names.map(name => "Hello, " + name);
console.log(greetings); 


const numbers2 = [-2, 3, 0, 7, -5];
const positives = numbers2.filter(num => num > 0);
console.log(positives); 

const fruits = ["apple", "kiwi", "banana", "fig"];
const longFruits = fruits.filter(fruit => fruit.length > 4);
console.log(longFruits);





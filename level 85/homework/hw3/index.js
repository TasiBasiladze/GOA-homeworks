import { calculate, filter } from "./calculator.js"
console.log(calculate(2, 5, "*"));
console.log(filter([1, 2, 3, 4, 5], num => num % 2 == 0));
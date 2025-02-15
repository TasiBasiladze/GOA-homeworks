//task 1
//for... of loop is used for arrays and strings

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num); 
}

const text = "Hello";
for (const char of text) {
  console.log(char); 
}

const words = ["apple", "banana", "cherry"];
for (const word of words) {
  console.log(word); 
}

//task 2
//for... in loop is used for objects

const person = { name: "Alice", age: 25, city: "New York" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

const car = { brand: "Toyota", model: "Corolla", year: 2022 };
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

const book = { title: "1984", author: "George Orwell", pages: 328 };
for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}

//task 3
const sum = (a, b) => {
    return a + b;
};
  
console.log(sum(3, 5));

  const repeatText = (text, times) => {
    return text.repeat(times);
};
  
console.log(repeatText("Hello ", 3));

//task 4
const sum2 = (a, b = 5) => {
    return a + b;
};

console.log(sum2(3)); 
//task 2
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    if (num % 2 == 0) {
        console.log(num)
    }
}

const text = "Hello";
let index = 0;
for (const char of text) {
    if (index % 2 == 0) {
        console.log(char);
    }
    index++;
}

const words = ["apple", "banana", "cherry"];
let index2 = 0;
for (const word of words) {
  if (index2 % 2 == 0) {
    console.log(word);
  }
  index2++;
}

//task 3
const person = { name: "Alice", age: 25, city: "London" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}

const car = {
    brand: "Toyota",
    model: "Corolla",
    details: {
        color: "blue",
        year: 2020
    }
};

for (const key in car) {
    console.log(key + ": " + car[key]);
}

const school = {
    name: "ABC School",
    students: ["John", "Mary", "Peter"],
    teachers: ["Mr. Smith", "Ms. Johnson"]
};

for (const key in school) {
    console.log(key + ": " + school[key]);
}

//task 4
const add = (a, b) => a + b;
console.log(add(5, 3));

const isEven = (num) => num % 2 === 0;
console.log(isEven(4));

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Taso"));

//task 5
const person2 = {
    name: "Alice",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(person2.greet());

const car2 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getCarInfo: function() {
        return `This car is a ${this.year} ${this.make} ${this.model}.`;
    }
};

console.log(car2.getCarInfo());

const bankAccount = {
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
        return `Deposit successful! New balance: $${this.balance}`;
    },
    withdraw: function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return `Withdrawal successful! New balance: $${this.balance}`;
        } else {
            return "Insufficient funds!";
        }
    }
};

console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(300));

//task 6
const propertyName = "age";
const person3 = {
  name: "Alice",
  [propertyName]: 25  
};

console.log(person3.age);

const userType = "admin";  
const user = {
  name: "Bob",
  [`${userType}_permissions`]: true  
};

console.log(user.admin_permissions);

const prefix = "item";
const items = {
  [`${prefix}_1`]: "Value for 1",
  [`${prefix}_2`]: "Value for 2",
  [`${prefix}_3`]: "Value for 3"
};

console.log(items);

//task 7
const person4 = { name: "Alice", age: 30 };
const additionalInfo = { city: "New York", occupation: "Engineer" };

const updatedPerson = Object.assign({}, person4, additionalInfo);

console.log(updatedPerson);

const defaultSettings = { theme: "light", language: "en" };
const userSettings = { language: "fr", notifications: true };

const finalSettings = Object.assign({}, defaultSettings, userSettings);

console.log(finalSettings);

const car3 = { make: "Toyota", model: "Corolla" };
const updatedCar = Object.assign({}, car3, { model: "Camry", year: 2022 });

console.log(updatedCar);
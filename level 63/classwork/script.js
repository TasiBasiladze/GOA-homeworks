//task 1
const person1 = {
    name: "taso",
    lastname: "basiladze",
    age: 14
};

console.log(person1.name)
console.log(person1.lastname)
console.log(person1.age)

const person2 = {
    name: "nana",
    lastname: "jafaridze",
    age: 21
};

console.log(person2.name)
console.log(person2.lastname)
console.log(person2.age)


const person3 = {
    name: "mari",
    lastname: "berulava",
    age: 16
};

console.log(person3.name)
console.log(person3.lastname)
console.log(person3.age)


//task 2
function Car(brand, model, year) {
    this.brand = brand; 
    this.model = model; 
    this.year = year;   
}

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("BMW", "X5", 2021);
const car3 = new Car("Mercedes", "C-Class", 2022);

console.log(car1);
console.log(car2);
console.log(car3);

//task 3
function Person(name, lastname, age, nation) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.nation = nation;
}

const firstPerson = new Person("taso", "basiladze", 14, "georgian");
const secondPerson = new Person("nana", "jafaridze", 21, "georgian");
const thirdPerson = new Person("mari", "berulava", 16, "georgian");
console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);

//task4
function Animal(species, age, habitat) {
    this.species = species;
    this.age = age;         
    this.habitat = habitat;
}

const animal1 = new Animal("Dog", 5, "Home");
const animal2 = new Animal("Lion", 8, "Savanna");
const animal3 = new Animal("Penguin", 4, "Arctic");

console.log(animal1); 
console.log(animal2); 
console.log(animal3);

//task 5
//constructor function is used to create new objects and assign them initial properties. 
//It is a function that defines a template (or blueprint) for an object, allowing you to
//easily create multiple similar objects.







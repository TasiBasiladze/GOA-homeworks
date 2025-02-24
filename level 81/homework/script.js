//task 2
class Book{
    constructor(author, title, year, gener){
        this.author = author;
        this.title = title;
        this.year = year;
        this.gener = gener;
        this.isAvilible = true
    }

    takeBook(){
        if (this.isAvilible){
            console.log(`you've borrowed ${this.title}`);
            this.isAvilible = false;
        }
        else{
            console.log("you cant borrow this book anymore");
        }
    }

    returnBook(){
        if (this.isAvilible){
            console.log("you cant return this book. first you need to take it");
        }
        else{
            console.log(`you"ve returned ${this.title}`);
            this.isAvilible = true;
        }
    }
}

class Studen{
    constructor(name, grade, avargeMark){
        this.name = name;
        this.grade = grade;
        this.avargeMark = avargeMark;
    }

    portfolio(){
        console.log(`${this.name}, ${this.grade}th grade,s student's avarge mark for the year is ${this.avargeMark}`)
    }
}

class Recipe {
    constructor(name, ingredients, time, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.instructions = instructions;
        this.cookingTime = 0;
    }

    cookingList() {
        console.log(`Recipe of: ${this.name}, we need: ${this.ingredients}, time of cooking: ${this.time}, cook by these instructions: ${this.instructions}`);
    }

    ready() {
        const interval = setInterval(() => {
            if (this.cookingTime < this.time) {
                this.cookingTime += 1;
                console.log("Wait, it is not ready yet.");
            } else if (this.cookingTime === this.time) {
                console.log("It's ready!");
                clearInterval(interval);
            }
        }, 1000);
    }
}

//task 3
class Animals{
    constructor(name, species){
        this.species = species;
        this.name = name;
    }

    makeSound(){
        console.log("Animal sound");
    }
}

class Lion extends Animals{
    constructor(name, species){
        super(name, species);
        this.kingOfAnimals = True;
    }

    makeSound(){
        console.log("Roar!");
    }
}

class Monkey extends Animals{
    constructor(name, species){
        super(name, species);
    }

    makeSound(){
        console.log("chatter!")
    }
}

class Wolf extends Animals{
    constructor(name, species){
        super(name, species);
    }

    makeSound(){
        console.log("Woof!");
    }
}

//task 4
//Inheritance allows a child class to inherit properties and methods from a parent class using the extends keyword, and the super() function is used to call the parent class's constructor and methods from the child class.

//task 5
//Classes are a fundamental concept in object-oriented programming (OOP) that allow us to represent real-world concepts (like cars, people, animals) and their interactions within a program. They are used to define objects with specific properties and behaviors, helping to organize code by encapsulating data and functions into reusable structures. Classes are particularly useful for avoiding repetitive code, creating modular components, and making code more efficient and easier to read.
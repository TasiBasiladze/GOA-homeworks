//task 1
class Car{
    constructor(mark, model, year, color){
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0
    }

    move(speedIncrease){
        this.speed += speedIncrease;
    }

    stand(){
        console.log(this.speed = 0);
    }
}

const car1 = new Car('Toyota', 'Corolla', 2020, 'Red');
const car2 = new Car('BMW', 'X5', 2022, 'Black');
const car3 = new Car('Ford', 'Mustang', 2021, 'Blue');

car1.move(300); 
car2.move(400);
car3.move(500);

console.log(car1.speed);  
console.log(car2.speed);  
console.log(car3.speed);  

car1.stand(); 
car2.stand();
car3.stand();


//task 2
class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }

    get name() {
        return this._name;
    }
    
      get age() {
        return this._age;
    }
  }
  
  const person1 = new Person('John', 30);
  
  console.log(person1.name);
  console.log(person1.age);
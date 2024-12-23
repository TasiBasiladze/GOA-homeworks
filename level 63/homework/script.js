//task 3
//this keyword is a special word that refers to the context in which the code is executed. Its value depends on how and where it is used. In an object, this refers to the object that is calling the method.

//task 4
function Computer(brand, processor, ram, storage) {
    this.brand = brand; 
    this.processor = processor; 
    this.ram = ram; 
    this.storage = storage;
    this.displaySpecs = function () {
      return `Brand: ${this.brand}, Processor: ${this.processor}, RAM: ${this.ram}GB, Storage: ${this.storage}GB`;
    };
  }
  
  const myComputer = new Computer("Apple", "M1", 16, 512);
  console.log(myComputer.displaySpecs());

  function Keyboard(type, connection, keys) {
    this.type = type;
    this.connection = connection;
    this.keys = keys; 
    this.describe = function () {
      return `Type: ${this.type}, Connection: ${this.connection}, Keys: ${this.keys}`;
    };
  }
  
  const myKeyboard = new Keyboard("Mechanical", "Wireless", 104);
  console.log(myKeyboard.describe());

  function Bus(model, seats, fuelType) {
    this.model = model; 
    this.seats = seats; 
    this.fuelType = fuelType; 
  
    this.busDetails = function () {
      return `Model: ${this.model}, Seats: ${this.seats}, Fuel: ${this.fuelType}`;
    };
  }
  
  const cityBus = new Bus("Mercedes-Benz Sprinter", 30, "Diesel");
  console.log(cityBus.busDetails());
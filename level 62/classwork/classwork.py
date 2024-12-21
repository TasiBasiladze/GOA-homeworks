#task 1
def sum_all(*args):
    return sum(args)

result = sum_all(1, 2, 3, 4, 5)
print(result)

#task 2
def greet_user(**kwargs):
    for key, value in kwargs.items():
        print(f"{key.capitalize()}: {value}")

greet_user(name="taso", age=14, city="Tbilisi")

#task 3
def simple_decorator(func):
    def wrapper():
        print("Decorator: Starting the function...")
        func()
        print("Decorator: Function has finished.")
    return wrapper

@simple_decorator
def say_hello():
    print("Hello world!")
    
say_hello()

#task 4
class Animal:
    def speak(self):
        return "I am an animal."

class Mammal(Animal):
    def walk(self):
        return "I can walk."

class Dog(Mammal):
    def bark(self):
        return "Woof! Woof!"

dog = Dog()
print(dog.speak())
print(dog.walk())
print(dog.bark())

#task 5
class car:
    def __init__(self, brand, state):
        self.brand = brand         
        self._state = state       

    def car_state(self):
        print(self._state)


car1 = car("audi", "wrecked")

car1.car_state()

#task 6
class Person:
    def __init__(self, name, age):
        self.name = name         
        self.__age = age         

    def get_age(self):
        print(self.__age)

person = Person("Alice", 25)

person.get_age()
print(person.name)
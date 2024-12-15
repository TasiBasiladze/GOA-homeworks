#task 1
class car:
    def __init__(self, model, color, year, brand):
        self.model = model
        self.color = color
        self.year = year
        self.brand = brand

    def go(self):
        print(f"{self.brand} is going")

    def stop(self):
        print(f"{self.brand} stopped")

car1 = car("A4", "black", 2004, "Audi")
car2 = car("Citan", "red", 2000, "Mercedes")
car3 = car("X5", "white", 2010, "BMW")

print(car1.model)
print(car1.color)
print(car1.year)
print(car1.brand)
car1.go()
car1.stop()

print(car2.model)
print(car2.color)
print(car2.year)
print(car2.brand)
car2.go()
car2.stop()

print(car3.model)
print(car3.color)
print(car3.year)
print(car3.brand)
car3.go()
car3.stop()

#task 2
class person:

    count = 0

    def __init__(self, name, lastname, age):
        self.name = name
        self.lastname = lastname
        self.age = age
        person.count += 1

    def stand(self):
        print(f"{self.name} is standing")

    def sit(self):
        print(f"{self.name} is sitting")

person1 = person("Taso", "Basiladze", 14)
person2 = person("Nana", "Jafaridze", 19)
person3 = person("Tasya", "Berulava", 16)


print(person1.name)
print(person1.lastname)
print(person1.age)
print(person2.name)
print(person2.lastname)
print(person2.age)
print(person.count)

person1.stand()
person1.sit()
person2.stand()
person2.sit()

#task 3
#A dunder method is a special method in Python with names surrounded by 
#double underscores, defining specific behavior for objects.

#task 4
#Instance variables are variables that are defined inside a class and belong 
#to a specific object, storing data unique to that instance.

#task 5
#Class variables are variables that are defined within a class 
#but outside any methods, and they are shared by all instances of the class.

#task 6
#Blueprint is a plan or template used to create 
#something, such as a class in programming, which 
#defines the structure and behavior of objects. In programming, a class 
#acts as a blueprint for creating instances (objects).
#task 2
#_prefix less strict. it doesn't mean anything for program and computer, though it's sign for programmer that this inftormation shouldn't be In open access.
#__prefix is more strict, and even if you wan't, you won't be able to print element with __prefix In the usual way

#task 4
class Animal:
    def __init__(self, name):
        self.name = name

    def move(self):
        return f"{self.name} is moving."

class Prey(Animal):
    def flee(self):
        return f"{self.name} is fleeing to avoid predators."

class Predator(Animal):
    def hunt(self):
        return f"{self.name} is hunting for food."

class Rabbit(Prey):
    def eat_grass(self):
        return f"{self.name} is eating grass."

class Hawk(Predator):
    def fly(self):
        return f"{self.name} is flying high to spot prey."


rabbit = Rabbit("Rabbit")
hawk = Hawk("Hawk")

print(rabbit.move())       
print(rabbit.flee())       
print(rabbit.eat_grass())  

print(hawk.move())         
print(hawk.hunt())         
print(hawk.fly())
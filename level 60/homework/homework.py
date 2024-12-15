#task 4
class motorcycle:
    count = 0
    def __init__(self, type, engine, speed, color):
        self.type = type
        self.engine = engine
        self.speed = speed
        self.color = color
        motorcycle.count += 1

motorcycle1 = motorcycle("sportbike", 50, 180, "black")
motorcycle2 = motorcycle("cruiser", 100, 220, "red")
motorcycle3 = motorcycle("enduro", 200, 300, "white")
print(motorcycle.count)

#task 5
class animals:
    def __init__(self, animal):
        self.animal = animal

    def noise(self):
        print(f"{self.animal} makes noises")
class horse(animals):
    def neigh(self):
        print(f"{self.animal} whinnys")
class frog(animals):
    def ribit(self):
        print(f"{self.animal} croaks")
class pig(animals):
    def oink(self):
        print(f"{self.animal} grunts")

animal1 = animals("any animal")
animal1.noise()
animal2 = horse("Horse")
animal2.neigh()
animal2.noise()
animal3 = frog("Frog")
animal3.ribit()
animal3.noise()
animal4 = pig("Pig")
animal4.oink()
animal4.noise()
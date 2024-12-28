#task 1
#instance methods operate on specific objects, while class methods operate on the class itself, 
#allowing for actions like creating objects or modifying class-level attributes.

#task 2
#static methods are utility functions within a class that don't require access to instance or class attributes.

#task 3
#class methods operate on the class itself and may access class-level attributes, while static methods are 
#independent functions within a class that have no access to class or instance attributes.

#task 4
#Use class methods when you need to operate on the class itself, such as creating objects from alternative sources or
#modifying class-level attributes, and use static methods for utility functions that don't require access to class or instance data.

#task 5
class Counter:
    count = 0

    @classmethod
    def increment_count(cls):
        cls.count += 1 

    def __init__(self):
        Counter.increment_count() 

counter1 = Counter()
counter2 = Counter()
counter3 = Counter()

print(Counter.count) 

#task 6
class E:
    def __init__(self, n, p):
        self.n = n
        self.p = p

    def g(self):
        return self.n + " = " + self.p

    @staticmethod
    def v(p):
        v = ["M", "C", "K", "J"]
        return p in v

e1 = E("E", "M")
e2 = E("S", "C")
e3 = E("S", "K")

print(E.v("J"))





#task 1
def my_name(name):
    print(f"Hello {name}!")
my_name("Anastasia")

#task 2
def numbers_sum(x, y, k):
    print(x + y + k)
numbers_sum(4, 8, 7)

#task 3
def numbers(start, end):
    for i in range(start, end):
        print(i)
numbers(1, 11)

#task 4
def me(name, surname, academy):
    print(f"my name is {name}, my surname is {surname}, i study in {academy}")
me(input("enter your name: "), input("enter your surname: "), input("enter your academy: "))

#task 5
def nums_times(x, y, k):
    return x * y * k
num = nums_times(5, 2, 9)
print(num)

#task 6
def discount(x):
    if x >= 18:
        print("you cant get discount")
    else:
        print("you can get discount")
discount(int(input("enter your age: ")))

#task 7
def list_print(lst):
    for i in lst:
        print(i)
list_print([1, 2, 3, 4, 5])
#task 1
#TypeError - this error occurse when an operation
#or function is applied to an object of an inappropriate type.

#ValueError - this error occurse when a function receives an 
# argument of the correct type but an inappropriate value.

#IndexError - this error occurse when you trying to access 
# an element in an indexing collection using an invalid index. for example, one that is out of range.

#SyntaxError - this error occurse when code contains some incorrect syntax that interferes computer reading code

#NameError - this error occurse when the code references a variable of function that has not been defined

#task 2
name = "Taso"

try:
    print(name)
except NameError:
    print("this variable isn't defined")

#task 3
listn = [1, 2, 3, 4, 5]

try:
    print(listn[7])
except IndexError:
    print("Invalid index")

#task 4
number = input("enter your number: ")
try:
    print(int(number))
except ValueError:
    print("Error")

#task 5
#try/except is used for handling exceptions 
# and preventing the program from crashing when errors occur
#task 2
num1 = 5
num2 = 7
print(num1 + num2)

#task 3
name = "Taso"
surname = "Basiladze"
print(name + " " + surname)

#Concatenating means obtaining a new string that contains both of the original strings.

#task 4
num3 = 8
num4 = 2
print(num3 / num4)
# # when you use comperasion operation / output is float
# #implict

#task 5
print(8 != 9)
print(6 == 2)
print(3 > 1)
print(6 < 10)
print(3 >= 4)
print( 6 <= 3)

# #task 6
print(6 * 2 == 6 + 6)
print(7 - 2 != 6 + 5)
print(3 + 3 > 2 + 2)
print(5 - 5 < 4 + 0)
print(4 - 3 >= 7 + 8)
print(5 + 11 <= 4 / 2)

#task 7
print(True and True)
print(True and False)
print(False and False)
print(False and True)
print(True or False)
print(False or False)
print(False or True)
print(True or True)

#task 8
print(5 > 3 and 9 == 9)
print(7 >= 5 or 12 != 45)
print(6 < 6 or 3 > 5)
print(5 == 3 and 7 > 3)
print(3 <= 6 or 5 == 6)

#task 9
for i in range(1, 10):
    print(i)

#task 10
listk = [1, 2, 3, 4, 5]
for i in range(1):
    print(listk[0] + listk[1] + listk[2] + listk[3] + listk[4])

#task 11
word = "Hello World"
for i in word:
    print(i)

#task 12
num5 = 1
while num5 < 10:
    print(num5)
    num5 = num5 + 1

#task 13
num6 = 1
while num6 < 100:
    if num6 in range(50, 60):
        pass
    else:
        print(num6)
    num6 = num6 + 1

#task 14
num7 = 1
num = 0
while num7 <= 10:
    num = num + num7
    num7 = num7 + 1
print(num - 5)

# #task 15
def num(x):
    if x % 3 == 0:
        return x
    elif x % 5 == 0:
        return x
    else:
        pass
number = num(int(input("Enter your number: ")))
print(number)

# #task 19
greeting = "HellO"
print(greeting.upper())
print(greeting.lower())
print(greeting.capitalize())
print(greeting.find("l"))
print(len(greeting))


listm = [1, 2, 3, 4, 5]
print(listm.index(3))
print(listm.insert(1, "hi"))

#task 1
age = int(input("enter your age: "))
if age <= 12:
    print("you are child")
elif age > 12 and age < 20:
    print("you are teenager")
else:
    print("you are adult")

#task 2
i = 1
while i < 100:
    if i in range(40, 51):
        pass
    else:
        print(i)
    i = i + 1

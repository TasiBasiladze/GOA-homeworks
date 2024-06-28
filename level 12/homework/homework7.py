#task 8
num1 = int(input("enter your number: "))
if num1 in range(90, 101):
    print("Grade A")
elif num1 in range(80, 90):
    print("Grade B")
elif num1 in range(70, 80):
    print("Grade C")
elif num1 in range(60, 70):
    print("Grade D")
elif num1 in range(0, 60):
    print("Grade F") 
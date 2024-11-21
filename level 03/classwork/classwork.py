#task 1
num1 = 5
num2 = 3.6
print(num1 + num2)
#output is float, becoase floating-point numbers have a higher precision, and when you add a float to an int conversion happens automatically to prevent data loss

#task 2
is_programmer = True
is__not_programmer = False
print(int(is_programmer) + int(is__not_programmer))
#output is 1, cause value of False in int type is 0, and value of True is 1

#task 3
num3 = 20
num4 = 24
print(str(num3) + str(num4))
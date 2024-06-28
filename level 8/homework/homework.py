#task 1
print(9 != 3)
print(6 >= 5)
print(8 <= 4)

#task 2
number1 = 6
number2 = 1
number3 = 9
number4 = 4
number5 = 7
is_programmer = True
is_not_programmer = False

print(number1 == number1) #true
print(number5 > number4) #true
print(number2 > number1) #false
print(number3 < number5) #false
print(number3 != number3) #false
print(number3 != number4) #true
print(number2 <= number5) #true
print(number3 >= number1) #true
print(number1 >= number1) #true
print(number2 == number2) #true
print(number2 != number1) #true
print(number4 > number5) #false
print(is_programmer or is_not_programmer) #true
print(is_not_programmer or is_not_programmer) #false
print(is_programmer and is_programmer) #true
print(is_not_programmer and is_programmer) #false
print(is_not_programmer and is_not_programmer) #false
print(is_programmer or is_programmer) #true
print(number5 == number5) #true
print(number3 == number5) #false

#task 3
#if you write "and" it will be "true" only if value of both variables is true. in any other case it will be "false"
#if you write "or" it will be "false" only if value of both variebles is false. in any other case it will be "true"

#task 4
num1 = int(input("write yout number:" ))
num2 = int(input("write your number:" ))
print(num1 > num2)
print(num1 == num2)
print(num1 < num2)
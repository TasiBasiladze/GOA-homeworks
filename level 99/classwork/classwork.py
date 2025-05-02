#task 1
def manual_isalnum(word):
    alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    for i in word:
        if not i in alphanumeric:
            return False
    return True

print(manual_isalnum("amfeoa87687"))

#task 2
def manual_startswith(start, word):
    if word[:len(start)] == start:
        return True
    return False

print(manual_startswith("wo", "word"))

#task 3
def manual_endswith(end, word):
    if word[-len(end):] == end:
        return True
    return False

print(manual_endswith("rd", "word"))


#task 4
def manual_round(num):
    integer = int(num)
    factorial = num - integer
    if factorial >= 0.5:
        return integer + 1
    else:
        return integer
    
print(manual_round(5.4))
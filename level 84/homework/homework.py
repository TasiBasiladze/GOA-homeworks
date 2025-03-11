#task 2
def decimal(b):
    return sum(int(str(b)[::-1][i]) * 2 ** i for i in range(len(str(b))))
print(decimal(111100))

#task 3
def binary(n):
    binary = ""
    while n > 0:
        binary += str(n % 2)
        n //= 2
    return int(binary[::-1])
print(binary(60))
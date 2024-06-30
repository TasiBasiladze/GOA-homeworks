#task 4
total = 0
for i in range(1000):
    if i not in range(500, 600):
        total = total + i
print(total)
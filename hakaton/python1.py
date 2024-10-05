#1
def max_num(x, y, k):
    if x > y and x > k:
        return x
    elif y > x and y > k:
        return y
    elif k > y and k > x:
        return k
print(max_num(1, 6, 4))


#4
def even_nums(listn):
    res = []
    for i in listn:
        if i % 2 == 0:
            res.append(i)
    return res
print(even_nums([1, 34, 7, 9, 8]))

#5
def my_func(num):
    if num <= 1:
        return False
    x = num * 2 + 1
    return x
print(my_func(5))

    
    
    
    
    
    
    
    
#task 1
def aritmetic(nums):
    return sum(nums) / len(nums)
print(aritmetic([2, 6, 8]))

#task 2
def manual_abs(num):
    if num == -num:
        return num 
    else:
        pass
print(manual_abs(-9))

def manualabs(num):
    return abs(num)
print(manualabs(-9))

#task 3
def none_repeat(listn):
    lst = []
    for i in range(len(listn)):
        if listn[i] != listn[i]:
             return lst + listn
        else:
            return lst
    
print(none_repeat([1, 2, 4, 4, 7]))
#task 1
def aritmetic(nums):
    return sum(nums) / len(nums)
print(aritmetic([2, 6, 8]))

#task 2
def mean(nums):
    if nums < 0:
        return -nums
    else:
        return nums
print(mean(-10))

#task 3
def dup_list(listn):
    result = []
    for i in listn:
        if i not in result:
            result.append(i)
    return result
print(dup_list([1, 2, 3, 1]))

            

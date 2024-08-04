#task 2
def manula_min(list1):
    minimum = list1[0]
    for i in list1:
        if i < minimum:
            minimum = i
    return minimum
    
print(manula_min([7, 2, 9, 13, 4]))

#task 3
def manula_max(list2):
    maximum = list2[0]
    for i in list2:
        if i > maximum:
            maximum = i
    return maximum
    
print(manula_max([7, 2, 9, 13, 4]))

#task 4
def manual_len(list3):
    counter = 0
    for _ in list3:
        counter += 1
    return counter

print(manual_len([2, 6, 9, 4, 1]))

#task 5
def manual_sum(list4):
    num_sum = 0
    for i in list4:
        num_sum += i
    return num_sum
print(manual_sum([1, 7, 19, 4, 6]))

#task 6
def manual_replace(str1, pre, after):
    res = ""
    for i in str1:
        if i == pre:
            res = res + after
        else:
             res = res + i
    return res
print(manual_replace("hello!", "!", ""))

#task 7
def manual_find(str1, find_value):
    for i in range(len(str1)):
        if find_value == str1[i]:
            return i
        else:
            pass
print(manual_find("hello", "e"))

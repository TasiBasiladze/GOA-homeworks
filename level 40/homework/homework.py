#task 1
nums = [2, 5, 8, 3, 5, 4]
by_5 = list(map(lambda x: x * 5, nums))
print(by_5)

#task 2
str_nums = ["1", "2", "3"]
int_nums = list(map(lambda x: int(x), str_nums))
print(int_nums)

#task 3
words = ["hello", "goodbye"]
plus = list(map(lambda x: x + "!", words))
print(plus)

#task 4
from math import *
nums_sq = [6, 2, 9, 4, 3, 5]
nums_root = list(map(lambda x: sqrt(x), nums_sq))
print(nums_root)

#task 5
numbers = [2, 7, 5, 4, 6]
num_booleans = list(map(lambda x: True if x % 2 == 0 else False, numbers))
print(num_booleans)
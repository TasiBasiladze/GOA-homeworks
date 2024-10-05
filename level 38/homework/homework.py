#task 1
tuple_list = [(1, 3), (4, 1), (5, 2)]
sorted_list = sorted(tuple_list, key=lambda x: x[1])
print(sorted_list)

#task 2
nums_list = [4, 2, 9, 8]
func = lambda sq: [x ** 2 for x in sq]
sq_lst = func(nums_list)
print(sq_lst)

#task 3
word = lambda x: x if len(x) >= 4 else None
print(word("programming"))
print(word("GOA"))

#task 4
lst = ["a", "b", "c"]
big_letters = list(map(lambda x: x.upper(), lst))
print(big_letters)

#task 5
nums = [2, 6, 3, 4, 1]
plus_five = list(map(lambda x: x + 5, nums))
print(plus_five)

#task 6
names = ["taso", "mary", "nana"]
star_names = list(map(lambda x: x[0] + "-star" + x[1:], names))
print(star_names)

#task 7
nums2 = [1, 2, 3, 4, 5, 6]
even = list(filter(lambda x: x % 2 == 0, nums2))
print(even)

#task 8
random_words = ["apple", "Africa", "magazine", "club"]
words_with_a_begin = list(filter(lambda x: x[0] == "a" or x[0] == "A", random_words))
print(words_with_a_begin)

#task 9
random_nums = [1, -5, -7, 9, 4]
plus_nums = list(filter(lambda x: x > 0, random_nums))
print(plus_nums)
#codewars 1
#Moving Zeros To The End
#Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
#move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    non_zeros = [x for x in lst if x != 0]
    zeros = [0] * lst.count(0)
    return non_zeros + zeros


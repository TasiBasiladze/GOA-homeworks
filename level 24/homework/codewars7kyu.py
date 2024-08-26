#codewars 1
#The highest profit wins!

#Story
# Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
# Task
# Write a function that returns both the minimum and maximum number of the given list/array.
# Examples (Input --> Output)
# [1,2,3,4,5] --> [1,5]
# [2334454,5] --> [5,2334454]
# [1]         --> [1,1]
# Remarks
# All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

def min_max(lst):
    lst = sorted(lst)
    min_val = lst[0]
    max_val = lst[-1]
    return [min_val, max_val]

#codewars 2
#Find the stray number

#You are given an odd-length array of integers, in which all of them are the same, except for one single number.
# Complete the method which accepts such an array, and returns that single different number.
# The input array will always be valid! (odd-length >= 3)
# Examples
# [1, 1, 2] ==> 2
# [17, 17, 3, 17, 17, 17, 17] ==> 3

def stray(arr):
    stray = [x for x in arr if arr.count(x) == 1]
    return stray[0]

#codewars 3
#Sort Numbers

#Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
# For example:
# solution([1,2,3,10,5]) # should return [1,2,3,5,10]
# solution(None) # should return []

def solution(nums):
    if nums == None:
        return []
    else:
        return sorted(nums)
    
#codewars 4
#Breaking chocolate problem

#Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
#For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
#If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

def break_chocolate(n, m):
    if n == 0 and m == 0:
        return 0
    return n * m - 1

#codewars 5
#Sort array by string length

#Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
# For example, if this array were passed as an argument:
# ["Telescopes", "Glasses", "Eyes", "Monocles"]
# Your function would return the following array:
# ["Eyes", "Glasses", "Monocles", "Telescopes"]
# All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

def sort_by_length(arr):
    return sorted(arr, key=len)

#codewars 6
#Simple Fun #176: Reverse Letter

#Task
# Given a string str, reverse it and omit all non-alphabetic characters.
# Example
# For str = "krishan", the output should be "nahsirk".
# For str = "ultr53o?n", the output should be "nortlu".
# Input/Output
# [input] string str
# A string consists of lowercase latin letters, digits and symbols.
# [output] a string

def reverse_letter(st):
    word = [x for x in st if x.isalpha()]
    return "".join(word[::-1])
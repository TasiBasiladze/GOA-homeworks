#5kyu:
#codewars 1
#Simple Pig Latin

#Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

def pig_it(text):
    text = text.split(" ")
    res = []
    for i in text:
        if len(i) == 1 and i.isalpha() == True:
            res.append(i + "ay")
        elif len(i) == 1 and i.isalpha() == False:
            res.append(i)
        else:
            res.append(i[1:] + i[0] + "ay")
    return " ".join(res)

#8kyu:
#codewars 1
#You Can't Code Under Pressure #1

#Code as fast as you can! You need to double the integer and return it.

def double_integer(i):
    return i * 2

#codewars 2
#Keep Hydrated!

#Nathan loves cycling.
# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
# For example:
# time = 3 ----> litres = 1
# time = 6.7---> litres = 3
# time = 11.8--> litres = 5

import math

def litres(time):
    return math.floor(time * 0.5)

#codewars 3
#Sentence Smash

#Sentence Smash
# Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
# Example
# ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

def smash(words):
    return " ".join(words)

#codewars 4
#Find Maximum and Minimum Values of a List

#Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
# Examples (Input -> Output)
# * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
# * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
# * [42, 54, 65, 87, 0]             -> min = 0, max = 87
# * [5]                             -> min = 5, max = 5

def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)

#codewars 5
#Grasshopper - Personalized Message

#Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
# Use conditionals to return the proper message:
# case	return
# name equals owner	'Hello boss'
# otherwise	'Hello guest'

def greet(name, owner):
    if name == owner:
        return 'Hello boss'
    else:
        return 'Hello guest'
    
#codewars 6
#Grasshopper - Grade book

#Grade book
# Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
# Numerical Score	Letter Grade
# 90 <= score <= 100	'A'
# 80 <= score < 90	'B'
# 70 <= score < 80	'C'
# 60 <= score < 70	'D'
# 0 <= score < 60	'F'
# Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

def get_grade(s1, s2, s3):
    if 90 <= (s1 + s2 + s3) // 3 <= 100:
        return "A"
    elif 80 <= (s1 + s2 + s3) // 3 < 90:
        return "B"
    elif 70 <= (s1 + s2 + s3) // 3 < 80:
        return "C"
    elif 60 <= (s1 + s2 + s3) // 3 < 70:
        return "D"
    elif 0 <= (s1 + s2 + s3) // 3 < 60:
        return "F"
    
#codewars 7
#Thinkful - Logic Drills: Traffic light

#You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
#Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
# For example, when the input is green, output should be yellow.

def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"
    
#codewars 8
#Third Angle of a Triangle

# You are given two interior angles (in degrees) of a triangle.
# Write a function to return the 3rd.
# Note: only positive integers will be tested.

def other_angle(a, b):
    return 180 - (a + b)

#codewars 9
#Area or Perimeter

#You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
# If it is a square, return its area. If it is a rectangle, return its perimeter.
# Example(Input1, Input2 --> Output):
# 6, 10 --> 32
# 3, 3 --> 9
# Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

def area_or_perimeter(l , w):
    if l == w:
        return l * w
    else:
        return l * 2 + w * 2
    
#codewars 10
#L1: Set Alarm

# Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
# The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
# employed | vacation 
# true     | true     => false
# true     | false    => true
# false    | true     => false
# false    | false    => false

def set_alarm(employed, vacation):
    if employed == True and vacation == False:
        return True
    else:
        return False
    
#7kyu
#codewars 1
#You're a square!

# A square of squares
# You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
# However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
# Task
# Given an integral number, determine if it's a square number:
# In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
# The tests will always use some integral number, so don't worry about that in dynamic typed languages.
# Examples
# -1  =>  false
#  0  =>  true
#  3  =>  false
#  4  =>  true
# 25  =>  true
# 26  =>  false

import math

def is_square(n):    
    if n < 0:
        return False
    elif math.sqrt(n) ** 2 == n:
        return True
    elif n == 0:
        return True
    else:
        return False
    
#codewars 2
#Exes and Ohs

#Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
# Examples input/output:
# XO("ooxx") => true
# XO("xooxx") => false
# XO("ooxXm") => true
# XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
# XO("zzoo") => false

def xo(s):
    s = s.lower()
    exes = s.count("x")
    ohs = s.count("o")
    if exes == ohs:
        return True
    else:
        return False     

#codewars 3
#Jaden Casing Strings   

#Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

# Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
# Example:
# Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
# Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

def to_jaden_case(string):
    string = string.split(" ")
    capitalized_string = [word.capitalize() for word in string]
    return " ".join(capitalized_string) 

#codewars 4
#String ends with? 

#Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
# Examples:
# solution('abc', 'bc') # returns true
# solution('abc', 'd') # returns false  

def solution(text, ending):
    return text.endswith(ending)     

#codewars 5
#Complementary DNA                     

#Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
# In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
# Example: (input --> output)
# "ATTGC" --> "TAACG"
# "GTAT" --> "CATA"

def DNA_strand(dna):
    trans_dna = str.maketrans("ATCG", "TAGC")
    return dna.translate(trans_dna)

#6kyu:
#codewras 1
#Find the odd int

#Given an array of integers, find the one that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.
# Examples
# [7] should return 7, because it occurs 1 time (which is odd).
# [0] should return 0, because it occurs 1 time (which is odd).
# [1,1,2] should return 2, because it occurs 1 time (which is odd).
# [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i

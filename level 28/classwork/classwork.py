#8kyu:
#codewars 1
#Convert a string to an array

#Write a function to split a string and convert it into an array of words.
#Examples (Input ==> Output):
#"Robin Singh" ==> ["Robin", "Singh"]
#"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

def string_to_array(s):
    return s.split(" ")

#codewars 2
#Sum without highest and lowest number

#Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
#The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
#Mind the input validation.
#Example
# { 6, 2, 1, 8, 10 } => 16
# { 1, 1, 11, 2, 3 } => 6
# Input validation
# If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

def sum_array(arr):
    if arr == None:
        return 0
    return sum(sorted(arr)[1:-1])

#codewars 3
#Array plus array

#I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
#P.S. Each array includes only integer numbers. Output is a number too.

def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)

#codewars 4
#Reversed Words

#Complete the solution so that it reverses all of the words within the string passed in.
#Words are separated by exactly one space and there are no leading or trailing spaces.
#Example(Input --> Output):
#"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

def reverse_words(s):
    return " ".join(s.split(" ")[::-1])

#codewars 5
#Keep up the hoop

#Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.
#Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:
#If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
#If he doesn't get 10 hoops, return the string "Keep at it until you get it".

def hoop_count(n):
    if n >= 10:
        return "Great, now move on to tricks"
    else:
        return "Keep at it until you get it"
    
#codewars 6
#Function 2 - squaring an argument

#Now you have to write a function that takes an argument and returns the square of it.

def square(n):
    return n ** 2

#codewars 7
#Shortest Word

#Simple, given a string of words, return the length of the shortest word(s).
#String will never be empty and you do not need to account for different data types.

def find_short(s):
    return len(sorted(s.split(" "), key=len)[0])

#codewars 8
#Friend or Foe?

#Make a program that filters a list of strings and returns a list with only your friends name in it.
#If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
# Input = {"Ryan", "Kieran", "Jason", "Yous"}
# Output = {"Ryan", "Yous"}
# Input = {"Peter", "Stephen", "Joe"}
# Output = {}
# Input strings will only contain letters. Note: keep the original order of the names in the output.

def friend(x):
    res = []
    for i in x:
        if len(i) == 4:
            res.append(i)
    return res

#codewars 9
#Credit Card Mask

#Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
#Your task is to write a function maskify, which changes all but the last four characters into '#'.
#Examples (input --> output):
#"4556364607935616" --> "############5616"
#"64607935616" -->      "#######5616"
#"1" -->                "1"
#                 "" -->                 ""
#// "What was the name of your first pet?"
#"Skippy" --> "##ippy"
#"Nananananananananananananananana Batman!" --> "####################################man!"

def maskify(cc):
    return (len(cc) - 4) * "#" + cc[-4:]

#codewars 10
#Odd or Even?

#Task:
# Given a list of integers, determine whether the sum of its elements is odd or even.
# Give your answer as a string matching "odd" or "even".
# If the input array is empty consider it as: [0] (array with a zero).
# Examples:
# Input: [0]
# Output: "even"
# Input: [0, 1, 4]
# Output: "odd"
# Input: [0, -1, -5]
# Output: "even"
# Have fun!

def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return "even"
    else:
        return "odd"
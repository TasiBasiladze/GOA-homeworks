#codewars
#Duplicate Encoder

#The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))((" 
# Notes
# Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

def duplicate_encode(word):
    word = word.lower()
    res = ""
    for i in word:
        if word.count(i) == 1:
            res += "("
        elif word.count(i) > 1:
            res += ")"
    return res

#1. i made every symbol lower to ignore capitalization
#2. i createt variable res to add there elements that i need
#3. i made conditions, that if symbol appears only once, add instead it "(" in res variable, and if more than once, add ")"
#4. then i returned res variable
#codewars 2
#Convert PascalCase string into snake_case

#Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
# Examples
# "TestController"  -->  "test_controller"
# "MoviesAndBooks"  -->  "movies_and_books"
# "App7Test"        -->  "app7_test"
# 1                 -->  "1"

def to_underscore(string):
    res = ""
    if type(string) == int:
        res += str(string)
        return res
    for i in string:
        if i.isupper():
            if res:
                res += "_"
            res += i.lower()
        else:
            res += i
    return res

#1. first i decleared variable and called it res, to add there result
#2. i wrote condition that if string is integer, convert it into string and return that way, to avoid any problems with that in the future
#3. wrote loop that will check all "string"'s elements
#4. then made condition, that if element is upper add it into res as lower, and also in condition made another condition, that if variable "res" is not empty, add "_" before element
#5. in any other case just add elemet into res
#6. returned res
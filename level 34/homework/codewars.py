#5kyu
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

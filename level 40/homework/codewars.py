#codewars 1
#Directions Reduction

#Once upon a time, on a way through the old wild mountainous west,…
# … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

# Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

# How I crossed a mountainous desert the smart way.
# The directions given to the man are, for example, the following (depending on the language):

# ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
# or
# { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
# or
# [North, South, South, East, West, North, West]
# You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

# ["WEST"]
# or
# { "WEST" }
# or
# [West]
# Other examples:
# In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

# The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

# In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

# Task
# Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

# The Haskell version takes a list of directions with data Direction = North | East | West | South.
# The Clojure version returns nil when the path is reduced to nothing.
# The Rust version takes a slice of enum Direction {North, East, West, South}.
# See more examples in "Sample Tests:"
# Notes
# Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

def dir_reduc(arr):
    opposite = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "WEST": "EAST",
        "EAST": "WEST"
    }
    stack = []
    for i in arr:
        if stack and stack[-1] == opposite[i]:
            stack.pop()
        else:
            stack.append(i)
    return stack

#1. first i made dictonary which represents which direction is opposite to each.
#2. then i made empty list to add there elements which i need
#3. then i made loop which will check each element in "arr"
#4. then wrote condition, that says that if stack isn't empty and it's last element is equal of key in "opposite" dictonary pop it
#5. and last, made condition that in any other case just adds element in stack

#codewars 2
#Not very secure

#In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

# The string has the following conditions to be alphanumeric:

# At least one character ("" is not valid)
# Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
# No whitespaces / underscore

def alphanumeric(password):
    if " " in password:
        return False
    has_alpha = False
    has_digit = False
    for i in password:
        if i.isalpha():
            has_alpha = True
        elif i.isdigit():
            has_digit = True
        else:
            return False
    return has_digit or has_alpha
        
#1. first i wrote condition that if password contains " " it will be False
#2. then made variables that will check if contained symbols are digits or letters
#3. then made loop that will check each symbol in password
#4. wrote conditions that if "i" will be letter, has_alpha's value will be changed from false to true, and same thing with has_digit
#5. wrote one more condition, that if there will be any other symbol it will return false
#6. returned has_digit or has_alpha. that way if values of at least one's was changed to "true", it will return true

#codewars 3
#Build Tower

#Build Tower
# Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

# For example, a tower with 3 floors looks like this:

# [
#   "  *  ",
#   " *** ", 
#   "*****"
# ]
# And a tower with 6 floors looks like this:

# [
#   "     *     ", 
#   "    ***    ", 
#   "   *****   ", 
#   "  *******  ", 
#   " ********* ", 
#   "***********"
# ]

def tower_builder(n_floors):
    return [("*" * (2 * i + 1)).center(2 * n_floors - 1) for i in range(n_floors)]
#6kyu:
#codewars 1
#Stop gninnipS My sdroW!

#Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
# Examples:
# "Hey fellow warriors"  --> "Hey wollef sroirraw" 
# "This is a test        --> "This is a test" 
# "This is another test" --> "This is rehtona test"

def spin_words(sentence):
    sentence = sentence.split()
    res = []
    for i in sentence:
        if len(i) >= 5:
            res.append(i[::-1])
        else:
            res.append(i)
    return " ".join(res)

#codewars 2
#Bit Counting

#Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
#Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

def count_bits(n):
    return bin(n).count("1")

#codewars 3
#Counting Duplicates

#Count the number of Duplicates
# Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
# Example
# "abcde" -> 0 # no characters repeats more than once
# "aabbcde" -> 2 # 'a' and 'b'
# "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
# "indivisibility" -> 1 # 'i' occurs six times
# "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
# "aA11" -> 2 # 'a' and '1'
# "ABBA" -> 2 # 'A' and 'B' each occur twice

from collections import Counter

def duplicate_count(text):
    text = text.lower()
    counts = Counter(text)
    return sum(1 for x in counts.values() if x > 1)

#5kyu:
#codewars 1
def make_readable(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    return f"{hours:02}:{minutes:02}:{seconds:02}"
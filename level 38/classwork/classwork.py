#task 1
listn = [1, 2, 3, 4, 5]
grow = list(map(lambda x: x + 1, listn))
print(grow)

#task 2
def create_sentence(*args):
    words = list(args)[0:]
    return " ".join(words)
print(create_sentence("This", "is", "an", "example", "of", "a", "function"))

#task 3
sentence = "i feel lazy"
filtered = list(filter(lambda word: "lazy" in word, sentence.split()))
print(filtered)

#task 4
lst1 = [1, 2, 3]
lst2 = [4, 5, 6, 7]

sq = list(map(lambda x: x ** 2, lst2))
print(lst1 + sq)

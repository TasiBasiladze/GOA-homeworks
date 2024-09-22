#task 2
#map function applies a specified function to each element of an iterable and returns an iterator with the result

#task 3
#filter function filters elements from an iterable based on a specified condition defined by a function, returning an iterator with only the elements that satisfy that condition

#task 4
lst = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
maped = list(map(lambda lsts: sum(lsts) / len(lsts), lst))
print(maped)

#task 5
products = {
    "phone": True,
    "computer": False,
    "TV": False
}

filtered = dict(filter(lambda item: item[1] == False, products.items()))
print(filtered)

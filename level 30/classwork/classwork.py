#task 1
fruit = {
    "type": "apple",
    "color": "red",
    "taste": "sweet"
}

print(fruit["type"])
print(fruit.get("type"))
print(fruit["color"])
print(fruit.get("color"))
print(fruit["taste"])
print(fruit.get("taste"))

#task 2
for i in fruit.keys():
    print(fruit[i])

for i in fruit.values():
    print(i)

#task 3
table = {
    "material": ["wood", "iron"],
    "color": ["red", "grey"],
}

#task 4
dict1 = {
    "dict2": {
        "name": "taso",
        "lastname": "basiladze"
    }
}



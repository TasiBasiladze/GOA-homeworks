#task 4
def multiply_by_two(value):
    try:
        return value * factor
    except NameError:
        factor = 2
        return value * factor
print(multiply_by_two(9))


def list_checker(index, listn):
    try:
        return listn[index]
    except IndexError:
        return "symbol with such an index isn's contained in this list"
listn = [1, 2, 3, 4, "j"]
print(list_checker(9, listn))


def string_to_num(x):
    try:
        return int(x)
    except ValueError:
        return "letters cant became integers"
print(string_to_num("8"))
    

#task 5
def list_sum(listn):
    return sum([int(x) for x in listn])
print(list_sum([10, "10"]))
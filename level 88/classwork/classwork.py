#task 1
#here we have dictonary we have weekdays with keys from 1 to 7 including it.
#we are making range from one to 7 (including). then we return value of weekdays by using key. 
#our range is from 1 to 7(including), it's equale to keys in dict, but it's integer. 
#so to make it string, we use f-string. then we print whatsday and give it value 5. 
#according to code it will be weekday["5"]. weekday with key 5 is thursday, so it will be output

#task 2
#in this code we create empty list, to add there elements from seq only once without duplicates. 
#we create loop for seq, and check if i is already in list. 
#if it is then it doesn't add it, and if not yet then he append's it to list. 
#it will continue till last element of seq. 
#so from list where is duplicated numbers, we get list where we have one number only once

#task 3
#we have string that contains all alphabet characters. 
#.find() method is used to find index of element. 
#as we know index start from zero, so if element's position is 6, element.find() will output 5. 
#so, f positions is 6, and find would output 5, so we add 1 to it and get letter's position. in that case, 6

#task 4
#in this code we change upper letters to lower, and lower to upper. 
#in python we have methodss upper and lower. (example: a.upper() is A and A.lower() is a). 
#we create loop that goes through whole string, and write condition that if letter is upper
# to add it into empty string as lower, and vice versa. that way it outputs reversed string

#task 5
#in this code we create function which returns list of numbers which are two raised into power of numbers 
#in range from 0 to n number including it. ** raises power of number. 2 ** i is looping till it's n number, 
#and adds each result of 2 ** i to list. so we get list of 2 powers of numbers from 0 to 6 including

#task 6
#.replace() is method which changes one element to other. if we change some element to "", 
#that means that we remove it. so that way we remove from url https://, http:// and www. 
#after that we split resulting string by dot, so we get list of elemets that were separated with dot, 
#and return 0 index from this list, 0 index means first element. in our case list we got was ["codewars", "com"]. 
#firs element is codewars, so this is output
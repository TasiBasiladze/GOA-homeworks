//task 1
let nums = [1, 2, 3];
let [a, b, c] = nums;
console.log(a);
console.log(b);
console.log(c);

let nums2 = [1, 2, 3, 4, 5];
let [, second, , fourth] = nums2;
console.log(second);
console.log(fourth);

let person = { name: 'Alice', age: 25 };
let { name: fullName, age: yearsOld } = person;
console.log(fullName); 
console.log(yearsOld);

let user = { username: 'john_doe' };
let { username, email = 'noemail@example.com' } = user;
console.log(username); 
console.log(email);

let person2 = { 
    name: 'Diana', 
    contact: { phone: '123-456-7890', email: 'diana@example.com' } 
};
let { name, contact: { phone: mobile, email: emailAddress } } = person2;
console.log(name);           
console.log(mobile);         
console.log(emailAddress);

//task 2
let nums3 = [1, 2, 3, 4, 5];
let [one, two, ...rest] = nums3;
console.log(one);  
console.log(two); 
console.log(rest);

let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let [firstColor, secondColor, ...remainingColors] = colors;
console.log(firstColor);      
console.log(secondColor);     
console.log(remainingColors)

let employee = {
    name2: 'John',
    age: 28,
    role: 'Developer',
    department: 'Engineering',
    country: 'USA'
};
let { name2, role, ...otherDetails } = employee;
console.log(name2);          
console.log(role);          
console.log(otherDetails);

//task 3
const add = (a, b, c, d) => {
    console.log(a + b + c + d)
}
let math = [3, 6, 1];  
add(...math, 5);

let fruits = ['apple', 'banana'];
let vegetables = ['carrot', 'spinach'];
let combined = [...fruits, ...vegetables];
console.log(combined);

let person3 = { name: 'Alice', age: 30 };
let copyPerson = { ...person3 };
console.log(copyPerson);

//task 4
//Rest (...) collects multiple elements into a single variable, usually in function parameters, arrays, or objects. 
//It allows you to handle variable-length arguments or properties.

//Spread (...) expands an array or object into individual elements or properties. It’s useful for copying, merging, 
//or adding elements to arrays or objects.
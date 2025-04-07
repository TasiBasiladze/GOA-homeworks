const parent = document.getElementById("parent");
const parent2 = document.getElementById("parent2");
const fetchData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/2");
        const res = await response.json()
        parent.innerHTML = `
            <p>Title: ${res.title}</p>
            <p>Price: ${res.price}</p>
            <p>Description: ${res.description}</p>
            <img src="${res.image}" width=200/>
        `
    } catch (err){
        console.log(err)
    }
}
fetchData()

const fetchData2 = async () => {
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json()
        res.forEach(clothes => {
            parent2.innerHTML += `
                <p>Title: ${clothes.title}</p>
                <p>Price: ${clothes.price}</p>
                <p>Description: ${clothes.description}</p>
                <img src="${clothes.image}" width=200/>
            `
        });
    } catch (err) {
        console.log(err)
    }
}
fetchData2()

//task 2
const sumNum = (a, b) => a + b;
console.log(sumNum(5, 6));

const minus = (a, b) => a - b;
console.log(minus(5, 6));

const devide = (a, b) => a / b;
console.log(devide(5, 6));

//task 3
const name = "taso";
console.log(`hello ${name}`);

const age = 14;
console.log(`i am ${age} years old`);

const academy = "GOA";
console.log(`i am studying programming at ${academy}`);

//task 4
const person = {
    name,
    academy,
    age
};
console.log(person);

let level = 1000;
let rang = "max";
let status = "alive";

const player = {
    level,
    rang,
    status
};
console.log(player);

const animal1 = "lion";
const animal2 = "crocodile";
const animal3 = "giraffe";

const zoo = {
    animal1,
    animal2,
    animal3
};
console.log(zoo);

//task 5
function greet(name = "Taso") {
    return `Hello, ${name}!`;
}
console.log(greet());

function fullName(surname = "Basiladze") {
    return `Surname: ${surname}`;
}
console.log(fullName());

function showAge(age = 14) {
    return `Age: ${age}`;
}
console.log(showAge());

//task 6
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);

const person2 = { name: "Taso", age: 14, city: "Tbilisi" };
const { name: personName, ...otherInfo } = person2;
console.log(personName);
console.log(otherInfo);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy);

const obj1 = { name: "Taso", age: 14 };
const obj2 = { city: "Tbilisi" };
const merged = { ...obj1, ...obj2 };
console.log(merged);

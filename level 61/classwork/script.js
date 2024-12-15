//task 1
let num = Number(prompt("enter your number"));

if (num > 0){
    console.log(num);
    alert("Number is positive");
} else {
    alert("Number is negative");
}

//task 2
let i = 10;
while (i > 0) {
    console.log(i);
    i -= 1;
}

//task 3
for (let i = 1; i <= 100; i++){
    console.log(i);
}

//task 4
for (let i = 40; i <= 60; i = i + 2){
    console.log(i);
}

//task 5
for (let i = 50; i >= 25; i--){
    console.log(i);
}

//task 6
let arr1 = ["js", "python", "c++"];
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}
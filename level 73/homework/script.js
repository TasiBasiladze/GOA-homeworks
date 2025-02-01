//task 2
//Hoisting in JavaScript is a mechanism by which variables and functions are "lifted" (hoisted) to the top of the script before execution. This means that their declaration is automatically moved to the beginning of the script, regardless of where they are declared.
//Variables declared with let and const are also hoisted, but they cannot be accessed until the code reaches their declaration line. This is known as the Temporal Dead Zone (TDZ).

//task 3
const p1 = document.getElementById("parent1");
const p2 = document.getElementById("parent2");
const ch1 = document.getElementById("child1");
const ch2 = document.getElementById("child2");

p1.addEventListener("click", () => {
    console.log("parent");
}, true);

ch1.addEventListener("click", () => {
    console.log("child");
});

p2.addEventListener("click", () => {
    console.log("parent");
});

ch2.addEventListener("click", () => {
    console.log("child");
});

//task 4
const img = document.getElementById("img");
const but1 = document.getElementById("but1");
const but2 = document.getElementById("but2");
const images = [
    "./image1.jpg",
    "./image2.jpg",
    "./image3.jpg",
    "./image4.jpg",
    "./image5.jpg"
]
let i = 0;
but1.addEventListener("click", function(){
    i++
    if (i == images.length){
        i = 0
    }
    img.src = images[i];
})

but2.addEventListener("click", function(){
    i--
    if (i == -1){
        i = images.length - 1
    }
    img.src = images[i];
})

//task 5
const img2 = document.getElementById("img2");
const but12 = document.getElementById("but12");
const but22 = document.getElementById("but22");
const images2 = [
    "./image1.jpg",
    "./image2.jpg",
    "./image3.jpg",
    "./image4.jpg",
    "./image5.jpg",
    "./image6.jpg"
]
let j = 0;
but12.addEventListener("click", function(){
    j++
    if (j == images2.length){
        j = 0
    }
    img2.src = images2[j];
})

but22.addEventListener("click", function(){
    j--
    if (j == -1){
        j = images2.length - 1
    }
    img2.src = images2[j];
})
//task 1
//function hoisting "takes" function to the first lines, so that you can call it on the lines before function was made, 
//and let/const hoisting, vice versa, doesn't let to call variable before it was declared

//task 2
//capturing: the event starts from the parent elements and moves towards the child element
//bubbling: the event starts from the child elements and moves towards the parent element

//task 3
const img = document.getElementById("img");
const button1 = document.getElementById("but1");
const button2 = document.getElementById("but2");
let i = 0;
const images = [
    "./image1.jpg",
    "./image2.jpg",
    "./image3.jpg",
    "./image4.jpg"
]

button1.addEventListener("click", () => {
    i++;
    if(i == images.length){
        i = 0;
    }
    img.src = images[i]
})

button2.addEventListener("click", () => {
    i--;
    if(i == -1){
        i = 3;
    }
    img.src = images[i]
})
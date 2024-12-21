const button = document.getElementById("but");

button.addEventListener("click", function(e){
    e.preventDefault();
    
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const num3 = document.getElementById("num3");
    const radio1 = document.getElementById("r1");
    const radio2 = document.getElementById("r2");


    const div1 = document.getElementById("input-border");
    const div2 = document.getElementById("input-border2");
    const div3 = document.getElementById("input-border3");
    const n = document.getElementById("none");
    const b = document.getElementById("block");

    if (num1.value === "") {
        div1.style.borderColor = "red";
        pr.style.backgroundColor = "rgb(225, 245, 254)"
    } else {
        div1.style.borderColor = "rgb(123, 142, 149)";
        pr.style.backgroundColor = "rgb(225, 245, 254)"
    }

    if (num2.value === "") {
        div2.style.borderColor = "red";
        sf1.style.backgroundColor = "rgb(225, 245, 254)"
    } else {
        div2.style.borderColor = "rgb(123, 142, 149)";
        sf1.style.backgroundColor = "rgb(225, 245, 254)"
    }

    if (num3.value === "") {
        div3.style.borderColor = "red";
        sf2.style.backgroundColor = "rgb(225, 245, 254)"
    } else {
        div3.style.borderColor = "rgb(123, 142, 149)";
        sf2.style.backgroundColor = "rgb(225, 245, 254)"
    }

    if (num1.value !== "" && num2.value !== "" && num3.value !== "" && radio1.checked || radio2.checked) {
        n.style.display = "block";
        b.style.display = "none";
    }

    let p = num1.value;
    let r = num2.value / 100;
    let nm = 12;
    let t = num3.value;

    let calculation = (p * (r / 12)) / (1 - Math.pow(1 + r / 12, -12 * t));
    let totalPrice = calculation * (nm*t)
    const divMonth = document.getElementById("monthly");
    const divTotal = document.getElementById("totally");

    divMonth.textContent = `£${calculation.toString().slice(0, 1)},${calculation.toString().slice(1, 7)}`
    divTotal.textContent = `£${totalPrice.toString().slice(0, 3)},${totalPrice.toString().slice(3, 9)}`

});

const radio1 = document.getElementById("r1");
const radio2 = document.getElementById("r2");
radio1.addEventListener("click", function() {
    const radioLable1 = document.getElementById("rl1");
    const radioLable2 = document.getElementById("rl2");

    if (radio1.checked) {
        radioLable1.style.backgroundColor = "rgb(250, 250, 224)";
        radioLable1.style.border = "solid 1px rgb(204, 209, 117)";
        radioLable2.style.backgroundColor = "";
        radioLable2.style.border = "";
    }
});

radio2.addEventListener("click", function() {
    const radioLable1 = document.getElementById("rl1");
    const radioLable2 = document.getElementById("rl2");

    if (radio2.checked) {
        radioLable2.style.backgroundColor = "rgb(250, 250, 224)";
        radioLable2.style.border = "solid 1px rgb(204, 209, 117)";
        radioLable1.style.backgroundColor = "";
        radioLable1.style.border = "";
    }
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const div1 = document.getElementById("input-border");
const div2 = document.getElementById("input-border2");
const div3 = document.getElementById("input-border3");
const pr = document.getElementById("prefix");
const sf1 = document.getElementById("sufix");
const sf2 = document.getElementById("sufix2")

num1.addEventListener("click", function(){
    div1.style.border = "solid 1px rgb(214, 220, 52)"
    pr.style.backgroundColor = "rgb(214, 220, 52)"
    sf1.style.backgroundColor = "";
    div2.style.border = "";
    sf2.style.backgroundColor = "";
    div3.style.border = "";
})

num2.addEventListener("click", function(){
    div2.style.border = "solid 1px rgb(214, 220, 52)"
    sf1.style.backgroundColor = "rgb(214, 220, 52)"
    pr.style.backgroundColor = "";
    div1.style.border = "";
    sf2.style.backgroundColor = "";
    div3.style.border = "";
})

num3.addEventListener("click", function(){
    div3.style.border = "solid 1px rgb(214, 220, 52)"
    sf2.style.backgroundColor = "rgb(214, 220, 52)"
    pr.style.backgroundColor = "";
    div1.style.border = "";
    sf1.style.backgroundColor = "";
    div2.style.border = "";
})

num1.addEventListener("blur", () => {
    pr.style.backgroundColor = "";
    div1.style.border = "";
})

num2.addEventListener("blur", () => {
    sf1.style.backgroundColor = "";
    div2.style.border = "";
})

num3.addEventListener("blur", () => {
    sf2.style.backgroundColor = "";
    div3.style.border = "";
})

const n = document.getElementById("none");
const b = document.getElementById("block");
const link = document.getElementById("link");
const radioLable1 = document.getElementById("rl1");
const radioLable2 = document.getElementById("rl2");
link.addEventListener("click", function(){
    num1.value = "";
    num2.value = "";
    num3.value = "";
    radio1.checked = false;
    radio2.checked = false;
    b.style.display = "block";
    n.style.display = "none";
    radioLable1.style.backgroundColor = "";
    radioLable1.style.border = "";
    radioLable2.style.backgroundColor = "";
    radioLable2.style.border = "";
    pr.style.backgroundColor = "";
    div1.style.border = "";
    sf1.style.backgroundColor = "";
    div2.style.border = "";
    sf2.style.backgroundColor = "";
    div3.style.border = "";
})


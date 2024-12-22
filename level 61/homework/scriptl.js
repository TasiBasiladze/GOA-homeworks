const image1 = document.getElementById("imgPlus1");
const image2 = document.getElementById("imgPlus2");
const image3 = document.getElementById("imgPlus3");
const image4 = document.getElementById("imgPlus4");
const pgp1 = document.getElementById("down-pgp1");
const pgp2 = document.getElementById("down-pgp2");
const pgp3 = document.getElementById("down-pgp3");
const pgp4 = document.getElementById("down-pgp4");
const pd1 = document.getElementById("pd1");
const pd2 = document.getElementById("pd2");
const pd3 = document.getElementById("pd3");
const qv1 = document.getElementById("qv1");
const qv2 = document.getElementById("qv2");
let true1 = true;
let true2 = true;
let true3 = true;
let true4 = true;
image1.addEventListener("click", function(){
    if(true1){
        pgp1.style.display = "block"
        image1.src = "images/icon-minus.svg"
        true1 = false
    } else if(!true1){
        pgp1.style.display = "none"
        image1.src = "images/icon-plus.svg"
        true1 = true
    }
})

image2.addEventListener("click", function(){
    if(true2){
        pd1.style.display = "block"
        qv1.style.marginTop = "50px"
        image2.src = "images/icon-minus.svg"
        true2 = false
    } else if(!true2){
        pd1.style.display = "none"
        qv1.style.marginTop = ""
        image2.src = "images/icon-plus.svg"
        true2 = true
    }
})

image3.addEventListener("click", function(){
    if(true3){
        pd2.style.display = "block"
        qv2.style.marginTop = "50px"
        image3.src = "images/icon-minus.svg"
        true3 = false
    } else if(!true3){
        pd2.style.display = "none"
        qv2.style.marginTop = ""
        image3.src = "images/icon-plus.svg"
        true3 = true
    }
})

image4.addEventListener("click", function(){
    if(true4){
        pd3.style.display = "block"
        image4.src = "images/icon-minus.svg"
        true4 = false
    } else if(!true4){
        pd3.style.display = "none"
        image4.src = "images/icon-plus.svg"
        true4 = true
    }
})
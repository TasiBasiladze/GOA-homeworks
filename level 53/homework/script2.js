//task 5
const myImg = document.getElementById("img1");
const myBt = document.getElementById("bt");

function ChangeImage(){
    myImg.src = "images/images2.jpg";
}

myBt.onclick = ChangeImage;
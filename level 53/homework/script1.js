//task 4
const myImg = document.getElementById("img1");
const myBt = document.getElementById("bt");

function ChangeSize(){
    myImg.style.width = "500px";
    myImg.style.height = "500px";
}

myBt.onclick = ChangeSize;

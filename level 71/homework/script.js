//task 2

const inside = document.getElementById("insider");
let x = 0;
let y = 0;
let direction = "down";
const moveDown = setInterval(function(){
    if(direction == "down"){
        y++;
        if(y == 430){
            direction = "right";
        }
    } else if(direction == "right"){
        x++
        if(x == 430){
            direction = "up";
        }
    } else if(direction == "up"){
        y--
        if(y == 0){
            direction = "left";
        }
    } else{
        x--
        if(y == 0 && x == 0){
            clearInterval(moveDown);
        }
    }
    inside.style.top = y + "px";
    inside.style.left = x + "px";
}, 10)

//task 3
const box = document.getElementById("box");
let y2 = 0;
let x2 = 0;
let move = 10;
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowRight":
                x2 += move;
                break;
            case "ArrowDown":
                y2 += move;
                break;
            case "ArrowLeft":
                x2 -= move;
                break;
            case "ArrowUp":
                y2 -= move;
                break;
        }
        box.style.left = `${x2}px`;
        box.style.top = `${y2}px`;
    }
})

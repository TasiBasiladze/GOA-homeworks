const out = document.getElementById("outer");
const inside = document.getElementById("insider");
let x = 0;
let y = 0;

const moveRight = setInterval(function() {
    if(x === 429){
        clearInterval(moveRight);
        const moveDown = setInterval(function(){
            if(y === 429){
                clearInterval(moveDown);
                const moveLeft = setInterval(function(){
                    if(x === 1){
                        clearInterval(moveLeft)
                        const moveUp = setInterval(function(){
                            if(y === 1){
                                clearInterval(moveUp);
                            }
                            y--;
                            inside.style.top = `${y}px`;
                        })
                    }
                    x--;
                    inside.style.left = `${x}px`;
                })
            }
            y++;
            inside.style.top = `${y}px`;
        })
    }
    x++;
    inside.style.left = `${x}px`;
}, 10);
function calculate(a, b, operator){
    if(operator === "+"){
        return a + b;
    }
    if(operator === "-"){
        return a - b;
    }
    if(operator === "/"){
        return a / b;
    }
    if(operator === "%"){
        return a % b;
    }
    if(operator === "*"){
        return a * b;
    }
    if(operator === "**"){
        return a ** b;
    }
}

function filter(array, func){
    let final = [];
    for(let i of array){
        if(func(i)){
            final.push(i)
        }
    }
    return final
}

export { calculate, filter }
const factorialCalc = (a) => {
    num = 1;
    for(let i = 1; i <= a; i++){
        num *= i
    }
    return num
}

module.exports = factorialCalc;
function calculator(x, y, operator){

    const calculate = {
    multiply: (x, y) => x * y,
    divide: (x,y) => x / y,
    add: (x,y) => x + y,
    subtract: (x, y) => x - y
    }

    return(calculate[operator](x, y))
}
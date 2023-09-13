function calculteFactorial(num1, num2){

   console.log((factorial(num1) / factorial(num2)).toFixed(2));

function factorial(num){
    let output = 1;
    for (let index = 1; index <= num; index++) {
        
        output *= index;
    }
    return output;
}

}


calculteFactorial(5,2)
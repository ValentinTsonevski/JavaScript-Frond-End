function sumOfEvenAndOdd(number){

    let stringNum = number.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < stringNum.length; index++) {
        const element = Number (stringNum[index]);
        
        if(element % 2 == 0){
           evenSum += element;
        }else{
            oddSum += element;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)


}
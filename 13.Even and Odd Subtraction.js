function arraySum(arr) {

    let sumOdd = 0; 
    let sumEven = 0; 

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
        if(element % 2 === 0){
        sumEven += element;
        }

        if(element % 2 !== 0){
            sumOdd += element;
            }

           

    }
    let sum = (sumEven - sumOdd);

    console.log(sum);


}

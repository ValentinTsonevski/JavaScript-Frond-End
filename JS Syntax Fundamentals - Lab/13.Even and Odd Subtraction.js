function arraySum(arr) {

    let sumOdd = 0;  // nechetno 1,3
    let sumEven = 0; // chetno 2,4

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

function positiveOrNegativeResult(...numbers) {

    let sumNegative = 0;
 
    numbers.forEach(element => {if (element < 0) sumNegative++ });
 
 
   console.log(sumNegative % 2 !== 0 ? "Negative" : "Positive" );
 }


positiveOrNegativeResult(-6,
    -12,
    -14)
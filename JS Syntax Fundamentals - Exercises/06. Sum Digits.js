function sumAllDigits(number) {
    let digitToString = number.toString();
    let sum = 0;
    
    for (let index = 0; index < digitToString.length; index++) {
        sum += Number (digitToString[index]);
    }
    console.log(sum);
}

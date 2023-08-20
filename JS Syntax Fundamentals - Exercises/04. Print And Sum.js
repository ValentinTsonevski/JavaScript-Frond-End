function printSum(start, end) {
    let sum = 0;
    let currentNum = "";

    for (let index = start; index <= end; index++) {
        sum += index;
        currentNum += index + " ";
    }

    console.log(currentNum);
    console.log(`Sum: ${sum}`);

}
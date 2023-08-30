function printNthElementFromArray(inputArr, number) {
    let arr = [];

    for (let index = 0; index < inputArr.length; index += number) {
        arr.push(inputArr[index]);
    }

    return (arr);
}


function reverseArr(n, input) {
    let arr = [];

    for (let index = 0; index < n; index++) {
        arr.push(input[index]);
    }

    let output = "";
    
    for (let index = arr.length - 1; index >= 0; index--) {
        output += arr[index] + " ";
    }

    console.log(output.trim());
}

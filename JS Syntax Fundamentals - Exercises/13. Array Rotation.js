function arrRotation(arr, rotations) {

    for (let index = 0; index < rotations; index++) {

        let firstElement = arr.shift();

        arr.push(firstElement);
    }

    let output = "";
    
    for (const el of arr) {
        output += el + " ";
    }

    console.log(output);

}
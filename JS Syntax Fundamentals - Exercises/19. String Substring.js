function findSubstring(targetWord, text){

    let words = text.split(' ');
    let isWordFound = false;

    for (let word of words) {

        if (word.toLowerCase() === targetWord.toLowerCase()) {

            isWordFound = true;
            break;

        }
    }

    if (isWordFound) {

        console.log(targetWord);

    } else {

        console.log(`${targetWord} not found!`)

    }

}
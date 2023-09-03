function printAsciSymbolsBetween(symbol1, symbol2) {

    let output = "";

    if (symbol1.charCodeAt() < symbol2.charCodeAt()) {
        for (let index = symbol1.charCodeAt() + 1; index < symbol2.charCodeAt(); index++) {
            output += String.fromCharCode(index) + " ";
        }
    } else {
        for (let index = symbol2.charCodeAt() + 1; index < symbol1.charCodeAt(); index++) {
            output += String.fromCharCode(index) + " ";
        }
    }

    console.log(output)

}
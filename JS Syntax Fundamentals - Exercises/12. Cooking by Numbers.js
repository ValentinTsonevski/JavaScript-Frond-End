function chopTheNumber(number, ...commands) {

    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];

        switch (command) {
            case "chop":
                number = number / 2;
                console.log(number);
                break;

            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;

            case "spice":
                number += 1;
                console.log(number);
                break;

            case "bake":
                number = number * 3;
                console.log(number);
                break;

            case "fillet":
                number -= number * 0.20;
                console.log(number);
                break;
        }

    }
}


chopTheNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop')
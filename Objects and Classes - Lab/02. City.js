function printCity(city) {

    Object.entries(city).forEach((pair) => {
        console.log(`${pair[0]} -> ${pair[1]}`);
    });

}

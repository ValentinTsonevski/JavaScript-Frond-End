function loadingBar(percentage) {

    let bar = [];

    for (let i = 10; i <= 100; i += 10) {
        if (i <= percentage) {
            bar.push("%");
        } else {
            bar.push(".");
        }
    }

    console.log(
        percentage === 100 ? `100%Complete\n[${bar.join("")}]` : `${percentage}% [${bar.join("")}]\nStill loading...`
    );

}
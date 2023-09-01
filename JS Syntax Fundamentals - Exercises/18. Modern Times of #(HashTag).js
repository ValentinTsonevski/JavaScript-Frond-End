function findHashtags(text) {
    const words = text.split(' ');
    let hashtags = [];

    for (const word of words) {

        let letters = /^[#]+[a-zA-Z]+$/g;

        if (word.startsWith('#') && word.match(letters)) {
            let noHash = word.substring(1, word.length);
            hashtags.push(noHash);
        }        
    }
        console.log(hashtags.join('\n'))
}
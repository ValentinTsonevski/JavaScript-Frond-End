function bannedWord(text, bannedWord) {

    const censoredWord = "*".repeat(bannedWord.length);
    let censoredText = text;

    while (censoredText.includes(bannedWord)) {
    
        censoredText = censoredText.replace(bannedWord, censoredWord);
    }
    console.log(censoredText)

}

function findOccurences(input){

    const [searchWords, ...words] = input;

    const wordOccurances = searchWords.split(" ").reduce((acc, curr) => {
      acc[curr] = 0;
      return acc;
    }, {});
  
    words.forEach((word) => {
      if (wordOccurances.hasOwnProperty(word)) {
        wordOccurances[word] += 1;
      }
    });

    Object.entries(wordOccurances)
    .sort(([word1, count1], [word2, count2]) => count2 - count1)
    .forEach((word) => console.log(`${word[0]} - ${word[1]}`))

}


findOccurences([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);
function isNumberPalindrome(numbers) {

    function checkPalindrome(num){
        let reversedNum = parseInt(num.toString().split('').reverse().join(''));

      if(num === reversedNum){
         return "true";
      }
      return "false";
    }

    numbers.forEach(element => {
        const isPalindrome = checkPalindrome(element);
        console.log(isPalindrome)
    });

}


isNumberPalindrome([123, 323, 421, 121])
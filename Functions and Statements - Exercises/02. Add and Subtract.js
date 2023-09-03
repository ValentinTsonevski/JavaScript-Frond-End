function addAndSubstract (num1, num2, num3){

    function add(num1, num2){
      return num1 + num2;
    }


    function subtract(num3){
        return add(num1,num2) - num3;
      }
  
    console.log(subtract(num3));

}


addAndSubstract(23,6,10);
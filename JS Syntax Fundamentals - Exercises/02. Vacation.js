function calculatePricePerNight(count, type, dayOfWeek) {
    let singlePrice = 0;
    let total = 0;

    if (type === `Students`) {
       if(dayOfWeek === `Friday`){
        singlePrice = 8.45;
       }
       else if (dayOfWeek ===`Saturday`){
        singlePrice = 9.80;
       }
       else if (dayOfWeek ===`Sunday`){
        singlePrice = 10.46;
       }

       if(count >= 30){
        total = (singlePrice * count) - (singlePrice * count) * 0.15;
        
       }else{
        total = singlePrice * count;
       }



    }
    else if (type === `Business`) {

        if(dayOfWeek === `Friday`){
            singlePrice = 10.90;
           }
           else if (dayOfWeek ===`Saturday`){
            singlePrice = 15.60;
           }
           else if (dayOfWeek ===`Sunday`){
            singlePrice = 16;
           }

           if(count >= 100){
            total = (singlePrice * (count - 10));
            
           }else{
            total = singlePrice * count;
           }
           

    }
    else if (type === `Regular`) {
        if(dayOfWeek === `Friday`){
            singlePrice = 15;
           }
           else if (dayOfWeek ===`Saturday`){
            singlePrice = 20;
           }
           else if (dayOfWeek ===`Sunday`){
            singlePrice = 22.50;
           }
           if(count >= 10 && count <= 20){
            total = (singlePrice * count) - (singlePrice * count) * 0.05;
            
           }else{
            total = singlePrice * count;
           }
    }

console.log(`Total price: ${total.toFixed(2)}`);

}

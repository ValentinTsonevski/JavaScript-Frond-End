function sortAndPrintArr(names) {

   let sorted = names.sort();

   for (let index = 0; index < sorted.length; index++) {
    let element = sorted[index];
    console.log(` ${index + 1}.${element}`);
   }

}

sortAndPrintArr(["John", 
"Bob", 
"Christina", 
"Ema"]
)
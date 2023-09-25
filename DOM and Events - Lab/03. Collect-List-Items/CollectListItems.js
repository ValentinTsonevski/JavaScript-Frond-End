function extractText() {
    let items = Array.from(document.getElementsByTagName("li"))
    let result = document.getElementById("result")

   items.forEach(e =>{
    result.value += e.textContent + "\n";
   })

}
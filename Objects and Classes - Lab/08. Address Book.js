function sortAddresses(arr){
    const addresses = arr.reduce((acc, curr) => {
        const [name, address] = curr.split(':');
        acc[name] = address;

        return acc;
    },{})

   Object.keys(addresses).sort((a,b) => a.localeCompare(b))
   .forEach((key) => { console.log(key + ' -> ' + addresses[key])});
};
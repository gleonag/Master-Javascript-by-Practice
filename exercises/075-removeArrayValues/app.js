function removeArrayValues(obj) {
    // your code here
    for (property in obj){
        if( Array.isArray(obj[property]) === true){
         delete obj[`${property}`]}
    }
}
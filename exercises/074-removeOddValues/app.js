function removeOddValues(obj) {
    // your code here
    for(property in obj){
        if (obj[property] % 2 !== 0)
        delete obj[`${property}`]
    }

}
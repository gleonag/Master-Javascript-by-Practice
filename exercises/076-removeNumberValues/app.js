let obj = {
    a: [3, 2, 6, 'hello'],
    b: 'u can',
    c: 4,
    d: 'do it',
    e: 8
};
function removeNumberValues(obj) {
    // your code here
    for (property in obj){
        if(!Array.isArray(obj[property]) && parseInt(obj[property])){
            delete obj[`${property}`]
        }
    }
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
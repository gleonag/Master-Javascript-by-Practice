 let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
     for ( property in obj){
        if(obj[property] > num) {
            delete obj[`${property}`];
        }
     }
}
removeNumbersLargerThan(5, obj);
console.log(obj);

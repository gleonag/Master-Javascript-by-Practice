function countNumberOfKeys(obj) {
    // your code here
   return Object.values(obj).length
}
let obj = {
    a: 5,
    b: 4,
    c: 2,
    d: 1
};
console.log(countNumberOfKeys(obj));

// el resultado da 4, ejercicio correcto
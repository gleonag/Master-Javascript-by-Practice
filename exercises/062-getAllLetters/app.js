function getAllLetters(str) {
    // your code here
    
    return str.split('')     
}

/** 
    // SOLUTION 1
     for (let i =0; i < str.length; i++){
        array[i] = str.charAt(i)
    }
    // SOLUCION 2
    let array = []
    let start = 0
    str.split('').forEach(element => {
        array[start++] = element
    });
    return array
*/
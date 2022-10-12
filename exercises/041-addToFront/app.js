function addToFront(arr, element) {
  // your code here
    arr[element] =  arr.unshift(arr.length-1)
    return arr
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift
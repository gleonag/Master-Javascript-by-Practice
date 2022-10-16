function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (property in obj){
    if(obj[property].length >  num){
      delete obj[`${property}`]
    }
  }
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);

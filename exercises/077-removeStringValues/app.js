let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here
    for(property in obj)
    {
        if (typeof(obj[property]) === 'string'){
            
            delete obj[`${property}`]    
        }
    } 
    }
    

removeStringValues(obj)
console.log(obj)

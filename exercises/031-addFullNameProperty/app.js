function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName = obj.firstlName + " " + obj.lastName
  return obj
}
console.log(addFullNameProperty)

obj.fullName = obj.firstName + " " + obj.lastName;
return obj
}

console.log(addFullNameProperty({ firstName: "Elias", lastName: "Toroa" }))
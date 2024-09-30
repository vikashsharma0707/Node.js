const math =require("./math")

console.log("sum of two number is ",math.add(2,3))
console.log("substration of two number is ",math.sub(3,2))

//Destructuring
const {add,sub} =require("./math")

 console.log("sum of two number is ",add(2,3))
 console.log("substration of two number is ",sub(3,2))

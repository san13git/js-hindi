//normal comparators > < >= etc
//when comparing 2 values make sure they are of same datatype
console.log("2">1) //automatically 2 is converted to number
//in js the comparisions results can be different

console.log(undefined==0)
console.log(undefined>=0)  //all will be false
console.log(undefined>0)
//but for null , null>=0 will be true

//strict check === , also checks the datatype
console.log("2"==2)
console.log("2"===2) //also checks datatype

//for interview perspective
//primitive data types  - 7 types these are call by value
//String, Number , Boolean , null,undefined,Symbol,BigInt

//Reference data types (non primitive)
//Arrays , Objects, Functions

//imp -> Javascript is a dynamically typed language . For eg : const score= 100 const score=false , here we are not explicitly defining the datatype.
//symbol -> unique identifier , even if same value is passe result will be differenet
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNum=567845655884984875n //use n in last
//non primitive datatypes ka typeof object hii hota h
//for function it is function object
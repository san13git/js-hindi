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
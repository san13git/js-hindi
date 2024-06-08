
const accountId=14
let email="sansi@23"
let password="123"
city="jaipur" //not preferable but possible
let accountState; //if we print its value it will be undefined

//var is not used now due to scope problem

//console.table([accountId,email]) -> using console.table we can print all variables together
console.table([accountId,email,password])
//ecma -> wrote javascript standards
//to type cast
let score="33"
let num=Number(score)
console.log(num)
// console.log(typeof score) //to check type of a variable
//NaN - not a number 
let score1="33abc" //for null it will be zero
let num1=Number(score1)
console.log(num1) //as this string wont make a number

//"33" -> 33
//"33abc" ->NaN
//true=> 1 , false->0
//1 ->true 0 -> false
//""->false "sanya"->true

//************Operations***********************************/
//Tricky operations

console.log("1" + 2)
console.log("1" + "2")
console.log("1" + 2 + 2)  //o/p->122
console.log(1+2+"2") //o/p->32
console.log(+true)  //o/p->1 //+ likhne se conversion hojata h




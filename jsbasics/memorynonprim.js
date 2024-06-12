// stack (primitive) and heap (non primitive) memory

let mych="sanya" //primitive type h toh stack mai jayga
//primitive mai call by value h so , orignal value mai change nhi hoga
//heap mai non primitive hota h toh direct reference milta h copy nhi hoti

//Strings
//updated string concatination ->using backticks
const repc=100
const name="sanya"
console.log(`my repocount is ${repc} and id is by ${name}`)
//another way to declare string
const game=new String("sanyab") //String is an object
// to see all available methods
console.log(game.__proto__)
//charAt tells that kis position mai konsa character h
//indexOf tells konsa character kis position mai h

const newstr=game.substring(0,4)  //character at last position will not be printed
//in slice we can use negative values it will start from the end
const n1="  sanya   "
console.log(n1.trim()) //will remove extra blank spaces
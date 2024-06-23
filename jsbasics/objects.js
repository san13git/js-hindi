//singleton
//object.create
//object can be declared by literal & constructor
const mysm=Symbol("key")
const user={   //non singleton object
    "name":"sanya",
    "age":"20",
    "full name":"sanya bhasin" ,//ab sirf square bracket se hii access hoga
    [mysm]:"key1"  //mysm is a symbol , so use square bracket
}
console.log(user.name)  //value can be accessed using both dot & square bracket

console.log(user[mysm])
user.name="geetu"
console.log(user.name)
//Object.freeze(user) -> now no changes will be made
user.greeting=function(){
    console.log("hi sanya here")
}
// console.log(user.greeting) ->just returning function(anonymus)
// console.log(user.greeting()) ->undefined
//to reference same object use this

const user=new Object()  //non singleton object
user.id="12" //add more
//we can declare object inside object too
//to concatinate 2 objects
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj3=Object.assign({},obj1,obj2)  //if we use {} then it acts as target rest are the source
//... -> spread operator
const obj3={...obj1,...obj2}
//ek array bnakr usme bht saare objects bhi bna skte
Object.keys(obj1) //it will give all keys of the object
Object.values(obj1)  //it will give all the values corresponding to the key
//if we want to check a particular propert h ya ni then use hasOwnProperty


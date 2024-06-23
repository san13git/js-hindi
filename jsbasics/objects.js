//singleton
//object.create
//object can be declared by literal & constructor
const mysm=Symbol("key")
const user={
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




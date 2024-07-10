//nested scope
//closure is also related to scope
function one(){
    const username="sanya"
    function two(){
        const web="youtube"
        console.log(username)
    }
    two() //if i dont call two() here then nothing will be executed

}
one()
//function can be written as expression too
const addTwo=function(num){
    return num+2
}
addTwo(5)  //if i write a function like this by storing it in a variable then if i call this function before its defination then it will give error this concept comes under hoisting , how a function is written executed etc
//Arrow function
const fun=()=>{

}
//implicit return in arrow function , no need to use {}
const fun=(num1,num2)=> num1+num2 //only for single line , no need to write return , also we can write (num1+num2)
//if we are refering to current context , then use this
//this talks about the current context
//when we print this inside a function we get various performance duration etc
function chai(){
    let username="hitesh"
    console.log(this.username);  //it will print undefined , we can use 'this' in such way only inside objects
}
chai()

const addone=()=>({username:"sanya"}) //if to return object then in that case () will be useful as directly we cant use {}

//Immediately Invoked Function Expressions (IIFE) , to prevent pollution of global variables
(function chai(){
    //named IIFE , jisme fxn ka naam h else use arrow function
    console.log('db connected')
}

)();//2nd bracket for execution and first bracket is IIFE syntax , here ; is important to end the IIFE
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
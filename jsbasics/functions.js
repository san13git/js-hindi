function myfunc(num1,num2){ //parameters
    return num1+num2;
    //agar yha console.log() mai likhe toh aur return na likhe toh return undefined hoga

}
console.log(myfunc(3,4)); //arguments
//if i write console.log(loginuser())  -> & i dont pass anything then it will be treated as undefined

//rest operator & spread operator -> ...
function calPrice(...num1)
{
    return num1
}
console.log(calPrice(200,400,500,600))  //o/p -> [200,400,500,600]

//**************Scopes************* */
//{} ->tells the scope
//var is avoided due to scope issue
//suppose inside a block scope var is declared & i am trying to print it outside the block then it will be printed , so var is avoided & let is used
//block scope & global scope

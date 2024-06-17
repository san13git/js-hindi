//agar number hii chahiye toh
const balance = new Number(100)
console.log(balance.toString()).length()
//toFixed -> to make precesion value eg ->balance.toFixed(2) means 2 decimal tk bs
//toPrecision -> decimal se pehle dekhta h kitni digits mai precesion krega eg -> 123.896 aur precision mai 3 kre toh 124 hoga
//toLocaleString -> commas dalte h , used for big numbers

//Math->it is an object
//Math.abs(-4) Math.round(4.3)
//Math.random() - > generates random number btw 0 & 1
//supose if i want to generate numbers btw 10 & 20 
//then use formula 
(Math.random()*(max-min+1))+min //->imp

//*********date & time******** */
//date is calculated from jan 1 1970
//in future we can use Temporal for date & time
let myDate=new Date() //date object
//if we want date in string write , myDate.toString()
//Date is an object in javascript
//in js months start from 0
let mycreatedate=new Date(2023,0,23) //->year month date
//we can also pass time

//rest lecture late of dates after 12 minutes




/***********Arrays************************ */
//we can even have mixed arrays eg cointaining numbers,strings etc
//array are shallow copy (same reference ) depp copy(just a copy not same reference)
const arr=new Array(1,2,3,4)
//array methods
//push -> push element at back //pop->removes last val from array
//unshift -> adds element in the begning
//shift ->removes array from begning -> but these both should,nt be used
//includes -> gives boolean type //indexOf

const arr=myarr.join()  ->changes myarr to string & arr will be of string type

//slice splice ->imp
const myn1=myArr.slice(1,3) //start from 1 & then dont include 3 
//in splice , the original array changes -> splice wala portion is removed from the array
//splice manipulates the original array

//suppose i have 2 arrays a1 & a2 , when i say a1.push(a2) , i get array inside array
//concatenate 2 or more arrays in one -> a1.concat(a2)
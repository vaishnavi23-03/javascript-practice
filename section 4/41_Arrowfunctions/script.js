function add(x,y){
    returnx+y;
}
//Arrow Function
const sub=(a,b)=>a-b;
//IMPLICIT RETURN
console.log(sub(9,2));
//IF ONE PARAM
const square =a=>a**2;
console.log(square(9));
//Normal arrow func syntax
const multiply =(a,b)=>{
    return a*b;
}

//Return obj
const retobj =()=>({
    name:'Brad',
});//obj syntax also has {}
const arr=[1,2,3,4,5];
arr.forEach(function (n){
    console.log(n);
});//pass a function in forEach
//alternative
arr.forEach(n=>console.log(n));
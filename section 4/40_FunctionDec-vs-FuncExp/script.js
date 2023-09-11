//FUNCTION DECLARARTION
function addDollars(n){
    return '$' +n;
}
console.log(addDollars(92));

//FUNCTION EXPRESSION

const display = function(n){
    console.log(n);


}; //semi-colon can be added in exp
console.log(display(22));

console.log(add(8,6));

function add(x,y){
    return x+y;
}
//DURING HOSTING(ALL DECLARARTION ARE PUT ON TOP) FUNC DECLARATION IS PUSHED TO THE TOP HENCE CAN CALL FUNC BEFORE DECLARATION
//DOES'NT HAPPEN THE SAME WITH EXP
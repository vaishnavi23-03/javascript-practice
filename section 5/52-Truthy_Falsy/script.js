/* Falsy Values
false
0
"" or '' empty string
null
undefined
NaN*/
let  x=0;
if(x){
    console.log('Not zero');

}
else{
    console.log('zero');
}
x=''
console.log(!x);//true
/* Truthy values
everything that isn't falsy
true
'0' 0 in a string
' ' space
'false' in a string
[] empty array
{} empty obj
function () {}   empty func*/

let children =0;
if(!isNaN(children)){
    console.log("no of children =",children);

}
else{
    console.log("Enter childern");
}
//common form mistake

//array empty check

let a=[]
if (a.length){
    console.log("Non empty array");
}
else{
    console.log("EMpty array");
}
//dictionary
let d={}
if(!Object.keys(d).length){
    console.log("No user");
}
else{
    console.log("List user");
}

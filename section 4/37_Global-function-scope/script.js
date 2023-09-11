//window is top object so not really needed to mention
window.alert(23);
console.log(window.innerWidth);
//global scope
let x=20; //can use x anywhere

function display(){
    console.log(x);
    //can access global scope
    //can't accesss other func local scope
}
function expo(n){
    x=2;
    //will use x=2 not x=20 here VARIABLE SHADOWING
    let y=x**n;
    return y;

}
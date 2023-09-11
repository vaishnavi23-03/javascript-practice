let x=30;
 function run(){
    const y=80;
    console.log(x+y);
 }
 run()
 //console.log(y); ERROR
 for(var i=0;i<=10;i++){
    console.log(i);
 }

console.log(i);//WORKS! VAR IS NOT BLOCK SCOPE 
//CAN ACCESS VAR OUTSIDE IF ELSE AND FOR
if(true){
    var p=20;
    let t=20;
}

console.log(p);
//onsole.log(t); won't work

function disp(){
    var a=200;
    console.log(a);
}

//console.log(a);
// ERROR BECAUSE VAR IS FUNCTION SCOPED. CAN'T ACCCESS OUTSIDE THE FUNCTION DEFINED IN

var eg="hello";
//GLOBAL VAR GETS ADDED TO WINDOW DON'T WANT THIS
console.log(window);
// const name="John";
// console.log(name);//shows that name has been dec
//global scope pollution
//IIFE
(
    function (age){
        name='Mia'
        console.log(`${name} is my name and I am ${age} old`);
        const hello=()=>console.log('Hello');
        hello();
    }
    
)(11);
//can't call hello from here
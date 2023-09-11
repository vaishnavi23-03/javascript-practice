/* PRIMITIVE DATA TYPES 
    String : in quotes or backticks
    Number: int as well as float in one
    Boolean true/false
    Null: INTENTIONALLY ABSENSE OF ANY VALUE
    Undefined not yet assigned val (NOT INTENTIONAL)
    Symbol built in constructor that returns a unique symbol
    BigInt numbers bigger than Number type*/


    /* REFERENCE TYPE (OBJECTS)
    non primitive and when assigned to a var. var given a ref to that val
    Object literals 
    arrays
    functions*/

    // Javascript is dynamically typed lang dont need to explicitly mention var type (let x='hi' no string)
    // TypeScript a superset of javascript allows static typing


    // String
    const firstName='sara';
    console.log(firstName);
    const output=firstName
    console.log(firstName, typeof firstName );


    // Number
    const age=24;
    let temp=32.45;
    console.log(temp, typeof temp);
    console.log(age, typeof age);
    // both number


    // Boolean
    const hasKids = true;
    console.log(hasKids, typeof hasKids);

    // Null
    const apartNumber = null;
    console.log(apartNumber, typeof apartNumber);
    //IMPORTANT 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
    // in summary when javascript created used type tag and values and 0 was for object and null used NULL pointer and null had zero tag and hence obj

    //UNDEFINED
   // let score;
   const score= undefined;
    console.log(score, typeof score);
// symbol
const id = Symbol('id');
console.log(id, typeof id);

//bigint
const n = 9876543234567789876n;
console.log(n, typeof n);




        // REFERENCE TYPE

        // array
const a=[1,2,3,4,5,6];
console.log(a, typeof a);
// obj literal
 const details ={
    name:'brad',
    age:24,
 };
 console.log(details, typeof details);

 // function
 function sayhi(){
    console.log('hi')
 }
 console.log(sayhi, typeof sayhi);

 // displays type as function not obj (function obj)
// also displays entire function because not called


//Primitive is stored in stack 
// ref in heap with var in stack and data is accessed by ref

let Name = 'John';
console.log(Name);
let name1 = Name;
console.log(name1);
name1="Brad"
console.log(name1);
console.log(Name);
// Name isn't affected by name1 because copy created

// Refrence
 const person ={
    name:'Bradley',
    age:23,
 };
 console.log(person);
 const person2 = person;
 console.log(person2);
 person2.name='Mark'
 console.log(person);
 console.log(person2);
// change affects because both pointing to same data

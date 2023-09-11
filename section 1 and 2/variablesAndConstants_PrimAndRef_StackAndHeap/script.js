//ways to declare variables
// var, let, const
// global scope var and let work same way

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName,lastName);

let age=30;
console.log(age);
// age will show error if added to line 8 log 
// but var won't show an error shows undefined HOSTING


// NAMING CONVENTIONS
// letters numbers underscores and dollar signs 
// can't start with numbers


/* multi word formatting
firstName : camelCase
first_name = underscore
FirstName = PAscalCase
firstname =  lowercase */


//Re assigning var
age=31;
console.log(age);
let score;
score=1;
if(true){
    score+=1;

}
console.log(score)

const x=100;

console.log(x);
// const score1; wrong value needs to be assigned

const arr=[1,2,3,4]
// arr=[1,2,3,4,5] no directly reass
arr.push(5)//append
console.log(arr);

const person={
    name:'john',
};
person.name='Brad';
//works coz not changing var changing val
person.email='brad@gmail.com'
console.log(person);
let a,b,c;
const d=10, e=11, f=12;
// console.log(k);undefined if log non dec var

// USE CONST UNLESS DIRECTLY REASSIGNING(=) USE LET
// LET WILL SHOW ERROR IF USED BEFORE DEC VAR WON'T


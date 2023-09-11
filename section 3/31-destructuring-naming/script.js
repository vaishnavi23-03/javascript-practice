const firstName="Lia"
const lastName = "Smith";
const age=41;
const haskids = false;
let person ={
    firstName,
    lastName,
    age,
    haskids,
}
console.log(person);


const todo={
    id: 123,
    title:"get orange",
    user: {
        name:'mia',
    },

}

const {
    id: example,// saving id val of todo in example
    title,
    user:{name},// saves name val of todo in a name var

}=todo;
console.log(title);
console.log(example);

// const {
//     a,
//     b,
//     c,
// }=todo;
// console.log(a);
// wont work coz diff names


// destructure arrays
const arr =[13,56,23,89]
const [first,second,...all]=arr; // ... is rest operator pust remaining vals in an array
console.log(first,second,all);

let x;
const numbers =[1,8,33,19];
//using array constructor
const fruits = new Array('apples','bananas','orange');
console.log(numbers);
console.log(fruits);
console.log(numbers.length);
//CAN HAVE MIXED 
const mix= ['JOHN',23,true]
console.log(mix);
// LENGTH PROP IS NOT READ ONLY
fruits.length=2;//makes it an array of 2
console.log(fruits);
//WAY TO ADD ON TO THE END W/0 METHODS
fruits[fruits.length]='grapes';// adds to the last
//fruits[3]='grape' same 
console.log(fruits);

// methods on arr
numbers.push(100);//appends
console.log(numbers);
numbers.unshift(11);//at beginning adds
console.log(numbers);
numbers.pop();//rem last 
console.log(numbers);
numbers.shift();//rem 1
console.log(numbers);
numbers.reverse();
console.log(numbers);
x=numbers.includes(8);//true if there
console.log(x);
x=numbers.indexOf(33);// gives negative one if not there
console.log(x)
x=numbers.slice(1,4)//1 2 3 
console.log(x)
x= numbers.splice(2,2)//start at 2 go for 2 nos
//SPLICE CHANGES INITIAL ARRAY REMOVES FROM INITIAL
console.log(x)
console.log(numbers);
let number2=[22,34,54,1,99,100]
x= number2.splice(1,4).reverse();
console.log(x, number2);
// NESTING 

const fruits3=['apples','orange'];
const veg =['potato', 'onion']
fruits3.push(veg);
console.log(fruits3);
console.log(fruits3[2][1]);//onion
//CAN NEST AS MANY AS YOU WANT FRITS[0][1][2][3]...

//CONCAT JOIN 2 ARRAYS
let a=[1,2];
let b=[3,4];
a=a.concat(b);
console.log(a);
//let's say you want elements of fruits3 and veg in one array not these arrays itself(concat types)
let mixes = [...veg,...b];
console.log(mixes);

let v=[1,2,[3,[4,5]],6,7,[8,9]]
v=v.flat();// puts everything one no nested only 1 level
console.log(v);


//ON ARRAY OBJECT
x=Array.isArray(number2)// ret true if array used in DOM manip
x=Array.from('123445')//creates arr 1 2 3..
const w=2
const u =8
x=Array.of(w,u)//creates arr
console.log(x);

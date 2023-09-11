console.log(12>22 && 19>9);
console.log(1>2|| 22>1);

//&& will return first falsy value or the last value

let a=10&&22;
a=0&&2;
console.log(a);

//practical use in api fetching 
let post=[]
//console.log(post[0]);//undefined
post.lenght>0&&console.log(post[0]);//won't show anything

// || returns first truthy value or last value
console.log(0||20);
console.log(0||""||undefined);

// ?? returns right operand when left is null or undefined
let c;
c=10??12;
console.log(c);
c=null??"hello";
console.log(c);
c=""??11;
console.log(c);


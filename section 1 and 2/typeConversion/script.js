// Change string to number
let amount='100';
console.log(amount, typeof amount);
// amount = parseInt(amount);
amount=+amount;
//amount=Number(amount);
console.log(amount, typeof amount);
// decimal
 amount = 23.6;
amount=parseFloat(amount);
// string not a number to number
let eg ='hi';
eg = Number(eg)
console.log(eg);//NaN
// Nan 5 operatins get you
/* sqrt of neg ( when you get non real as ans)
    operations on one number NaN
    operations on undefined
    operation on string that is not addition 
    string to number that is not no */



// Change number to string
let roll=23;
console.log(roll, typeof roll);
roll=roll.toString();
console.log(roll, typeof roll);
// IMP QUESTION String isnt an obj type how using method on it?
// javascript temp creates a wrapper of same type
let roll1=12;
roll1=String(roll1);

// number to boolean
let x=19;
x= Boolean(x);
console.log(x, typeof x);
y=0;// all true except 0
y=Boolean(y);
console.log(y);

// ARITHMETIC OPERATIONS
let a;
a=5+5;
a--;
a+=2;
a**=2;//exponent
a%=10;

console.log(a);
// COMPARISION
q = 3=='3';//double equal compares only value and not type. q=true
console.log(q);
q= 3==='3';// triple equal compares val as well as type. so false
console.log(q);
// better to use triple

w = 3!='3';//false because equal
console.log(w);
w= 3!=='3'; //true because type diff
console.log(w);

// TYPE COERSION
x=5+'5';
console.log(x);//10 js auto converts str to numb coz other way doesn't make sense
x=5*'5';
console.log(x);
x=x+ true;//conv true to 1
console.log(x);
x=x+null;
console.log(x);
x=Number(null);
console.log(x);
x= 5+ undefined
console.log(x);



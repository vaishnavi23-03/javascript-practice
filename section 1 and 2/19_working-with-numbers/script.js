let x;
const num = new Number(5.129932);
x=num.toString().length;
console.log(x);
x=num.toFixed(3); //3 digits After dec and rounded 5 is rounded up
console.log(x);
x=num.toPrecision(3);//3 digits in total and rounded
console.log(x);
x=num.toExponential();
console.log(x);
//x=num.toLocaleString('IN-HI') to loCAL lang
console.log(x);
x=num.valueOf()
console.log(x);


x=Number.MAX_VALUE;
x=Number.MIN_VALUE;
//math object
let y;
y=Math.sqrt(25);
y=Math.round(4.2);
y=Math.abs(-34);
y=Math.ceil(4.1);
y=Math.floor(4.1);
y=Math.pow(3,2);
y=Math.max(2,5,1);
y=Math.min(2,3,1);
//random
x = Math.random();//bet 0 and 1 dec
x= Math.floor(Math.random()*10+1);//bet 1 and 10
console.log(x);
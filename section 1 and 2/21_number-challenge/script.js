let x;
let y;
x=Math.floor(Math.random()*100+1);
y=Math.floor(Math.random()*50 +1);
let sum = `The sum of ${x} + ${y} is equal to ${x+y}`;
let dif =  `The difference  between ${x} - ${y} is equal to ${x-y}`
let product = `${x} X ${y} = ${x*y}`;
let div = `${x} / ${y} = ${(x/y).toFixed(3)}`;
let rem =  `${x} % ${y} = ${x%y}`;
console.log(sum);
console.log(div);
console.log(dif);
console.log(product);
console.log(rem);
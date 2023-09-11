let a=0;
// if(!a){
//     a=11;

// }
// ||= assigns right if left is falsy
a=a||11;
a||=11;
console.log(a);

// &&= assigns right side if left is truthy value
a&&=22;
console.log(a);
// ??= assigns right if left is null or undefined
c=null;

// if(c===null or c===undefined){
//     c=34;
// }
c??=34;
console.log(c);
c=0;
c??=22;
console.log(c);
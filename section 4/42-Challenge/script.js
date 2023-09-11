const getCelsius=n=>((5/9)*(n-32)).toFixed(3);
console.log(`43 F = ${getCelsius(43)}\xB0C`);


const MinMax=(...numbers)=>({
minimum:Math.min(...numbers),
maximum:Math.max(...numbers),
});
console.log(MinMax(62,43,11,9,88));

(
   function (a,b){
    return console.log(`The area of rectangle of length ${a} and breadth ${b} is ${a*b}`);
   }
)(12,3);

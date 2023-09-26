//child elements
let output;
const parent = document.querySelector('.parent');
output=parent.children;
console.log(output);
output = parent.children[1].nodeName;
parent.children[1].style.color='red';
parent.firstElementChild.innerText='Children';
const child = document.querySelector('.child');

console.log(output);
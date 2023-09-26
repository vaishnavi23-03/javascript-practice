let output;
output=document.all;
console.log(output);
console.log(output.length);
console.log(output[23]);
output=document.head.children;
console.log(output);
output=document.URL;
output=document.domain;
output=document.contentType;
output=document.characterSet;
output=document.forms[0].method;
output=document.forms[0].action;
//cant use foreach on html collections have to convert to array first
const arr=Array.from(document.forms)
arr.forEach((form)=>console.log(form));
console.log(output);

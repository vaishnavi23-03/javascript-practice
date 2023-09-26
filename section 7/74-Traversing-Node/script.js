/* DOM NODE TYPES
Element
Attr
Text
CDTASection
EntityReference
Entity
ProcessingInstruction
Comment
DocumentType
DocumentFragment
Notation*/
let output;
const parent = document.querySelector('.parent');
output=parent.childNodes;
console.log(output);//shows whitespace (text) comments also
output=parent.childNodes[0].textContent;
console.log(output);
const child = document.querySelector('.child');
output=child.parentNode;
console.log(output);
output=child.parentElement;//same as parentNode
console.log(output);
//siblings
const secondItem=document.querySelector('.child:nth-child(2)');
output=secondItem.nextSibling;//text coz whitespace
console.log(output);


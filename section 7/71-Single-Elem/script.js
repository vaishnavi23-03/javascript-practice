//getElementById()
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

console.log(document.getElementById('app-title').getAttribute('class'));
//set attributes
document.getElementById('app-title').className='hi';
console.log(document.getElementById('app-title').className);

// innerText:

// innerText returns the visible text contained within an element, excluding any text that is hidden through CSS styles.
// It considers only the human-readable content of the element, ignoring any elements like <script> and <style> tags.
// It also includes the spacing (whitespace) and formatting applied to the visible text.
// textContent:

// textContent returns all the text content of an element, including text within child elements, comments, and text hidden by CSS styles.
// It provides the complete, unaltered text representation of the element, including spacing and formatting.
// Unlike innerText, it does not consider the visibility of elements or any styling; it retrieves everything within the element.

let text=document.getElementById('eg');
console.log(text.textContent);
console.log(text.innerText);

text=document.getElementById('app-title');
text.textContent='How do you do';
text.innerHTML='<strong>Shopping List</strong>';
text.style.color='red';
//NO - USE CAMELCASE
text.style.backgroundColor='Black';
text.style.borderRadius='10px';

//queryselector
console.log(document.querySelector('h1'));//selects the first h1
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
let second=document.querySelector('li:nth-child(2)');
second.innerText='Apple juice';
//on other elements
let list = document.querySelector('ul');
let first = list.querySelector('li');
first.style.color='red';

 


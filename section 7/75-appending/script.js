const div = document.createElement('div');
div.className='my-element';
div.id='my element';
div.setAttribute('title', 'My Element');
console.log(div);
//div.innerText='hello how are you?';
const text = document.createTextNode('Hello how do you do?');
div.appendChild(text);//appends to it
document.body.appendChild(div);
document.querySelector('ul').appendChild(div);
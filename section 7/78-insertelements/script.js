//adjacentelement
const h1 = document.createElement('h1');
h1.textContent='Adjacent element';
document.querySelector('.filter').insertAdjacentElement("beforebegin",h1);
//adjacent text

    const item = document.querySelector('li:first-child');
  
    item.insertAdjacentText('beforebegin', 'insertAdjacentText');

  
  // insertAdjacentHTML example
 
    const clearBtn = document.querySelector('#clear');
  
    clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
 
  
  // insertBefore Example
 
    const ul = document.querySelector('ul');
  
    const li = document.createElement('li');
    li.textContent = 'insertBefore';
  
    const thirdItem = document.querySelector('li:nth-child(3)');
  
    ul.insertBefore(li, thirdItem);//CALL PARENT
  
  insertElement();
  
  
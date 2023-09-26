function insertafter(item, beforeitem){
    const itemafter=beforeitem.nextSibling;
    beforeitem.parentElement.insertBefore(item,itemafter);


}

const li = document.createElement('li');
li.textContent = 'Insert Me After!';


const firstItem = document.querySelector('li:first-child');


insertafter(li, firstItem);
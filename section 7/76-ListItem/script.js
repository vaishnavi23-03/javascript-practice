//using innerhtml
function createlistitem(item){
    
    let newlistitem = document.createElement('li');
    
    newlistitem.innerHTML=` ${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
    console.log(newlistitem);
     document.querySelector('.items').appendChild(newlistitem);
    
}
createlistitem('juice');
//create all elements
function createnewitem(item){
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className='remove-item btn-link text-red';
    const i = document.createElement('i');
    i.className='fa-solid fa-xmark';
    li.appendChild(document.createTextNode(item));
    button.appendChild(i);
    li.appendChild(button);
    document.querySelector('.items').appendChild(li)
}
createnewitem('eggs')
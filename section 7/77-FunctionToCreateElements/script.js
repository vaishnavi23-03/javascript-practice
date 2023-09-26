function createnewitem(item){
    let li;
    let button;
    let i;
    li = document.createElement('li');
     button = createbutton('remove-item btn-link text-red');
     i = createicon('fa-solid fa-xmark');
    li.appendChild(document.createTextNode(item));
    button.appendChild(i);
    li.appendChild(button);
    document.querySelector('.items').appendChild(li)
}
function createbutton(classes){
 const button= document.createElement('button');
   button.className=classes;
   return button;

}
function createicon (classes){
  const i=  document.createElement('i');
    i.className=classes;
    return i;

}

createnewitem('rice');
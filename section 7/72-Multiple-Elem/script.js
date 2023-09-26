const list = document.querySelectorAll('li');
console.log(list[1]);
list.forEach(((item,index)=>{
    item.style.color='red'
if(index==1){
item.innerHTML=`
Eggs
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`

}}
    ));

const listArrray =  Array.from(document.getElementsByClassName('items'));
listArrray.forEach(items=>items.style.color='black');
console.log(document.getElementsByTagName('li')[1].innerHTML);

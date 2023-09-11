const d = new Date();
let x;
x= d.getFullYear();
console.log(x);
x=d.getMonth()+1//since starts from 0
console.log(x);
x=d.getDate();
console.log(x);
x=d.getDay();
console.log(x);
x=d.getHours();
x=d.getMinutes();
x=`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}  T:${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
console.log(x);


x= Intl.DateTimeFormat('en-GB').format(d);
x= Intl.DateTimeFormat('default').format(d);

x= Intl.DateTimeFormat('default', {month:'short'}).format(d);
 

x=d.toLocaleString('default',{month:'short'});

x=d.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    timeZone:'Asia/Kolkata',
})
console.log(x);




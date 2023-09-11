let d;
d = new Date();
console.log(d);
d=d.toString();
console.log(d ,typeof d);
d= new Date(2023,8,2,18,48)// months start from 0
console.log(d);
d= new Date('2 September 2023')
d= new Date('9-2-2023T18:48')
console.log(d);

//timestamp
//time in milli seconds since  jan 1 1970
d= Date.now();
console.log(d);
//to get from specific date
d= new Date('03-23-2003 10:30:00')
d=d.getTime();
//d = d.valueOf();
console.log(d);

// date from timestamp
 d= new Date(1693661170914);
 console.log(d);

 // if don't want milli s
 d = Math.floor(Date.now()/1000)
 console.log(d);
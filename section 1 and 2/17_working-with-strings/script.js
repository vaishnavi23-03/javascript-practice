x='hello my name is';
name='john';
age=14;
x+=' '+name+' '+age+' how do you do?';
console.log(x);

//template literals
x=`hello my name is ${name} and i am ${age} years old`//NOT QUOTES BUT BACKTICKS
console.log(x);

// prop and methods string
const s= new String('HelloWorld');

x= s.length;//prop so no ()
console.log(x);
x=s[1];
x=s.__proto__;//shows all prop 
console.log(x);
console.log(s, typeof s);

x=s.toUpperCase();
x=s.charAt(1);
x=s.indexOf('W');//first occ
x=s.substring(0,4);//0,1,2,3
x=s.substring(4)//starts at 4 till end
x=s.slice(2,4);
x=s.slice(-2,-1)
x='       Heloo     World    '
x=x.trim();//gets rid of extra whitespace in beg and end
x=x.replace('World','John')
console.log(x);
/* slice allows negative index. for 10 char 10+ will be from the first letter*/

x=s.includes('Hello')//true if there 
x=s.valueOf(s);//primitive val string not obj
x=s.split(' ')//hello world
x=s.split('')//by char


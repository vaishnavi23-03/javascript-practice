person={
    name:"John",
    last_name:"Doe",
    age:23,
    addres:{
        state: "Maha",
        city:"Mumbai",
        pincode: 101,
    },
    eg:[1,2,4],

};
person.name="Jane";
console.log(person);
person.haskids=false;
console.log(person);
delete person.haskids;
console.log(person);
person["eg2"]='b';
console.log(person.eg[2]);


person.greet=function(){
    console.log(`Hello ${this.name} ${this.last_name}`);
};
person.greet();
/* person={
    'first name':"john",
    'last name':"doe",
};
 use '' if using space and can use person['first name'] not person.first name*/
//CONSTRUCTOR
 const todo = new Object();
 todo.milk=5;
 // NESTING
 x=person.addres.state;
 const obj1={
    a:1,
    b:2,
 }
 const obj2={
    c:3,
    d:4,
 }

 const obj3={...obj1,...obj2};
 const obj4 = Object.assign({},obj1,obj2);//same as above
 console.log(obj3);
 console.log(obj4);

 let todos=[{a:1,b:2},{c:3,d:4},{e:5,f:6}]
 x=todos[0].b;
 console.log(todos);
 x=Object.keys(person);
 console.log(x);
 x=Object.keys(todos).length;
 console.log(x);
 x=Object.values(todos)//array of vals
 x=Object.entries(todo)//array of key val pair
 x=todo.hasOwnProperty('milk');//true if milk a prop
 console.log(x);
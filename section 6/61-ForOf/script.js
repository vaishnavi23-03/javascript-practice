names=["Adam","Mic","Lia","dina"]

data=[
    {
        name:"Brad",
        id:1,
    },
    {
        name:"Hina",
        id:23,
    },
    {
        name:"Joey",
        id:99,
    }
]
for(n of names){
    console.log(n);
}
for (d of data){
    console.log(d.name);
}
let sent="Hi how are you"
for(s of sent){
    console.log(s);
}

let m = new Map();
m.set('name','ken');
m.set('age',22)
for (const [key,value] of m){
    console.log(key,value);
}
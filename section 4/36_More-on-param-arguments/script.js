//arguments passed
//parameters used to pass data in func
function registerUser(user="Bot"){//new way of default

    /* default parameter old way
    if(!user){
        user='bot';
    }*/
    return user+" is registered";
}

console.log(registerUser());
//Rest param
function sum(...numbers){
    let total=0;
    for (let n of numbers){//OF NOT IN
        total+=n;
    }
    return total;

}
console.log(sum(1,2,3,4,5));


console.log(sum(1,true,"hel"));//2hel

//Passing objects as param

function details(user){
    console.log(`The user's name is ${user.name} and id is ${user.id}`);
}
let a={
    name:"Ken",
    id:23,
};
details(a);
details({
    id:78,
    name:"Pia",
})

//Arrays as param
function randomNumber(n){
    const i= Math.floor(Math.random()*(n.length));
    return n[i];
}

console.log(randomNumber([11,23,87,9,1,89,100]));
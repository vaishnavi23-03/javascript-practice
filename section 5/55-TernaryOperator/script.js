let age=15;
let vote = age>=18?"Can Vote":"Can not vote";
console.log(vote);

auth=true;
let step = auth?(alert("Welcome to dashboard"),"/dashboard"):(alert("Access denied"),"/login");
console.log(step);
auth?console.log("Welcome"):null;//when no else
auth&& console.log("Welcome to dashboard");//better way
//used in react

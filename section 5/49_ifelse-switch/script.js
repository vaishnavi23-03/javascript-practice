// if else
const date = new Date(2007, 4, 23, 10, 30,0);
console.log(date.toString());
hour=date.getHours();

if (hour<12 && hour>9){
    console.log('go to work');

}
else if (hour<12 && hour<9){
    console.log("Morning!");

}
else{
    console.log("Bye");

}


//switch
switch (month){
    case 0: 
    console.log("JAn");
    break;
    
    case 1:
        console.log("Feb");
        break;
    case 2:
        console.log("March");
        break;
        


}
function func1(){
    let x=100;
console.log(x);
    function func2(){
        let y=200;
        console.log(x+y);
    }
    func2();

    //can't access func2 vars
    //console.log(y) error
}

func1();

if(true){
    let x=189;
    if(x==189){
        y=21;
        console.log(x-y);
    }
    //can't access y
}
//CHILD CAN ACCESS PARENT'S VAR 
//PARENT CAN'T ACCESS CHILD VAR

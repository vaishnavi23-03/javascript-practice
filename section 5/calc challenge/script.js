function calculator(num1,num2,op){
    switch (op){
        case '+':
            console.log(`Sum = ${num1+num2}`);
            break;
        case '-':
            console.log(`diff = ${num1+num2}`);
            break;
         case '*':
            console.log(`product = ${num1*num2}`);
            break;
            case '/':
             console.log(`div = ${num1/num2}`);
             break;
        default:
            console.log("Error");

    }
}

calculator(2,3,'*');
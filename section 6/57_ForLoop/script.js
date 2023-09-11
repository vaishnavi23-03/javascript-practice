for (let i=0;i<=10;i++){
    console.log(i*2);
    if(i==7) console.log("7 is my luck number");
}
let s=""
//Nested
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
       s=s+"* "
    }
    console.log(s);
    s=""
}

for (i=1;i<=5;i++){
    for(j=1;j<=10;j++){
        console.log(`${i}x${j}=${i*j}`);
    }
}

const names=["Sarah","Mia","Adam","Ben","Liam"]
for(i=0;i<names.length;i++){
    console.log(`${names[i]} is the best`);
}
const post={
    id:1,
    title:"Fisrt post",
    body:"hello world",

}
// converts post obj to json string

const str = JSON.stringify(post)
console.log(str);// doesn't hv the arrows  THIS IS WHAT IS SENT TO A SERVER

//Parse JSON
 const obj = JSON.parse(str);
 console.log(obj);

 const arr =[
    {
        id:2,
        title:"Fisrt post",
        body:"hello world",
    
    },
    {
        id:3,
        title:"Fisrt post",
        body:"hello world",
    
    },
    {
        id:4,
        title:"Fisrt post",
        body:"hello world",
    
    },
 ]

 const str2 = JSON.stringify(arr);
 console.log(str2);

 /*IMP CANT DO console.log(str.id) have to parse it*/
 console.log(obj.id);
const library=[
    {
        title:"book1",
        author:"alex m",
        status:{
            own: true,
            reading:false,
            read:false,
        },
    },

    {
        title:"book2",
        author:"sam w",
        status:{
            own: true,
            reading:false,
            read:false,
        },
    },

    {
        title:"book3",
        author:"george w",
        status:{
            own: true,
            reading:false,
            read:false,
        },
    },
]
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;
console.log(library);

const {title:firstBook}=library[0]
console.log(firstBook);
const str = JSON.stringify(library);
console.log(str);
const cols={
    col1:'red',
    cols2:'blue',
    cols3:'green',
    cols4:'orange'
}
for(const c in cols){
    console.log(cols[c],c);
}
//in arrays gives index
const arr=['a','b','c','d','e']
for(const i in arr){
    console.log(arr[i]);
}
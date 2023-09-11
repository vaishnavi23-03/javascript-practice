const arr = [1,2,3,4,5]
arr.push(6)
arr.unshift(0)
arr.reverse()
console.log(arr);

//challenge 2
const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8,9,10];
let arr3 = [...arr1,...arr2]
arr3.splice(arr3.indexOf(5),1)
console.log(arr3);
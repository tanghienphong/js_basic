let a = 12;
var b = 'string'
let c = 'varchar'
console.log(c);
const pi = 3.14
console.log(pi)

/*
* number
* string
* boolean 
* array []
* object {}
* null
* undefined
*/
let arr01 = new Array(123,234,456,45);
let arr = [1,2,3,3,4,4,5];
arr['name'] = 'Teo';

let teo = {
    name: 'Nguyen Van A',
    age: 12
}

let arr02 = [
    arr,
    teo
]
console.log(arr)
console.log(arr[2])
console.log(arr02[0][2])
console.log(typeof arr02)

/**
 * false
 * 0
 * ''
 * null
 * undefined
 * NaN
 */

 if(0){
     console.log('dung')
 }else{
     console.log('sai')
 }

 let arrName = ['Teo','Ti','An','Minh','Nam'];
 // length, fill, filter, map, push, pop, shift, unshift
 console.log(arrName.length);
 
 for(let u = 0; u < arrName.length ; u++ ){
    console.log(arrName[u]);
 }

 arrName.forEach(function(name){
     console.log(name)
 })

 arrName.forEach((name)=>{console.log(name)})
 arrName.forEach((name)=>console.log(name))
 arrName.map((name)=>console.log(name))

 arrName.fill('A',4,5)
 arrName.splice(4,1,'B')// same fill -> thay the
 arrName.splice(2,0,'d','s') //add
 console.log(arrName);

let filterArray = arrName.filter(function(item){
     return item==='Teo'
 })

 console.log(filterArray);
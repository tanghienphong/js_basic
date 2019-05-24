// n = 21312
//1. Co bao nhieu so 1->n chia hét cho 123
// 2. iN RA MÀN HÌNH DẠY SỐ ĐÓ

let a = 12312;
let b = 123
let numArray = []
for(let i = 1; i <= a; i++ ){
    numArray.push(i);
}

let rs = numArray.filter((item)=>{
    return (item % b)==0;
})
//console.log(rs);
console.log(rs.length);

let arrNumber = [4,5,66,9,12,34,67,81,16,121]
/**
 * Tìm các số chính phương có trong mãng
 * [3,9,81,16,121]
 */
let rss = arrNumber.filter((item)=>{
    return parseInt(Math.sqrt(item)) == Math.sqrt(item)
})
console.log(rss)

console.log(arrNumber.sort((a,b)=>a-b))
console.log(arrNumber.sort((a,b)=>a-b).reverse())

let arrName = ['Teo','Ti','An','Minh','Nam'];
console.log(arrName.pop());
console.log(arrName.shift());
console.log(arrName.unshift('Nguyen Van A'));
console.log(arrName);

function test (...a){
    console.log(a);
}

test(2,3,4,4,5,6,6,7,5);

let sum = (a,b) => {
    return a + b;
}

console.log(sum(1,2))

function log() {
    return console.log
}

log()(123)

function log1(fn){
    return fn(4)
}

log1(console.log)

/**
 * Vẽ hình 
 * cho h=5
 */

/*
 *
 **
 ***
 ****
 *****

 *****
 ****
 ***
 **
 */

 
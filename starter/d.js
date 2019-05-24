/**
 * n =20
 * 1. Liệt kê các số chia hết cho 2 từ 0 -> n
 * 2. Liệt kê các số không chia hết cho 2 từ 0 -> n
 * 3. Liệt kế các số chia hết 3 dư 1 từ 0 ->n
 */

function soChan(n){
     for(let i = 1; i <=n; i++){
         if(i%2 == 0)
         console.log(i)
     }
 }

 function soLe(n){
    for(let i = 1; i <=n; i++){
        if(i%2 == 0)
        console.log(i)
    }
}

function soChia3Du1(n){
    for(let i = 1; i <=n; i++){
        if(i%3 == 1)
        console.log(i)
    }
}
// soChia3Du1(20)

function inSo(n,soChia,soDu){
    for(let i = 1; i <=n; i++){
        if(i%soChia == soDu)
        console.log(i)
    }
}

// inSo(20,3,1);

function inSo1(n, fn){
    let result = '';
    for(let i=0; i<=n; i++){
        const dk = fn(i)
        if(dk)
            result += i + ' '
    }
    console.log(result);
}

inSo1(20, soChiaHetCho2)

function soChiaHetCho2(i) {
    return i%2==0;
}

inSo1(20,(i)=>{
    return i%3==1
})
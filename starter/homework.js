/**
 * Bài 1
 */
 function tamgiac1(h){
     for(let i = 1; i<=h; i++){
        let rs= "";
         for(let u=0; u <i; u++){
                rs+='*';
         }
         console.log(rs)
     }
 }

 function tamgiac2(h){
    for(let i = 1; i<h; i++){
       let rs= "*";
        for(let u=(h-i); u>1; u--){
               rs+='*';
        }
        console.log(rs);
    }
}

function tamgiac(h){
    tamgiac1(h);
    tamgiac2(h);
}
// tamgiac(5);

function veHinh1(){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++) {
            if(x<=y) s+="*"
        }
        console.log(s)
    }
}


function veHinh2(){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++) {
            if(x<=5-y+1) s+="* "
        }
        console.log(s)
    }
}

function veHinh3(){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++) {
            if(x<=5-y+1) s+="* "
        }
        console.log(s)
    }
}


//         *
//       * *
//     *   *
//   *     *
// * * * * *   

function veHinh4(){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++) {
            if(y == 5 || x==5 || y == 5-x+1) 
                s+= "*"
            else
                s+= " "
        }
        console.log(s)
    }
}
veHinh4()

function veHinh(fn){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++) {
            const dk = fn(x,y)
            if(dk) 
                s+= "*"
            else
                s+= " "
        }
        console.log(s)
    }
}

function hinh1(x,y){
    return (x<=y);
}

veHinh(hinh1);
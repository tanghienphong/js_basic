// const teo = {
//     name: 'Teo Nguyen',
//     age: 20,
//     goToSchool: function(){
        
//     }
// }

// console.log(teo.name)

class Person {
    constructor(ten, age, school){
        this.name = ten
        this.age = age
        this.school = school
    }
    goToSchool() {
        return `Hôm nay bạn ${this.name} đi học tại ${this.school.address}`; 
    }
}

// const teo = new Person('Nguyễn Văn Tèo',20)
// console.log(teo.goToSchool())

class School{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    goToSchool() {
        return `Hôm nay bạn ${this.name} đển học trường ${this.address}`;
    }
}

const ti = new School('Nguyễn Văn Tèo', 'Cao đẳng CNTT');
const teo = new Person('Nguyễn Văn A',20, ti)
console.log(ti.goToSchool());
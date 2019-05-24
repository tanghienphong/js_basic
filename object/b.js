class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    getDistance(){
        return Math.sqrt(this.x*this.x + Math.pow(this.y,2))
    }
}
// tính độ dài đoạn thằng OA
// const A = new Point(1,3)
// console.log(A.getDistance());

// tạo B(x,y)
// Tính độ dài đoạn thẳng AB
class Line {
    constructor(pointA, pointB){
        this.pointA = pointA
        this.pointB = pointB
    }

    getLength() {
        const x = this.pointA.x - this.pointB.x
        const y = this.pointA.y - this.pointB.y
        return Math.sqrt(x*x + Math.pow(y,2))
    }
}

// const A = new Point(1,2)
// const B = new Point(3,3)
// const C = new Line(A,B)
// console.log(C.getLength());

// Chu vi tam giác 3 điểm

class Triangle{
    constructor(pointA, pointB, pointC){
        this.pointA = pointA
        this.pointB = pointB
        this.pointC = pointC
    }
    getPerimeter(){
        const AB = new Line(this.pointA, this.pointB);
        const AC = new Line(this.pointA, this.pointC);
        const BC = new Line(this.pointB, this.pointC);
        return AB.getLength() + AC.getLength() + BC.getLength();
    }
}

const A = new Point(1,2)
const B = new Point(3,3)
const C = new Point(4,4)
const ABC = new Triangle(A,B,C)
console.log(ABC.getPerimeter())

module.exports = {Point, Line, Triangle};
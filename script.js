function Divide(num1,num2)
{
    return num1/num2;
}
console.log(Divide(18,3));

function Repeat(word,count){
    var result=" ";
    for (let index = 0; index < count; index++) {
        result+=word;
    }
    return result;
}

console.log(Repeat("Ha!",100));
    function Sum(){
}

function Circle(r){
    return r*r*3;
}
console.log(Circle(9));

function Square(a,b){
    return a*b;
}
console.log(Square(15,20));

function CircleInSquarePer(a,b,c) {
    return (a+b+c)/2;
}
console.log(CircleInSquare(2,3,4));

function CircleInSquare(r) {
    return r*3
}
console.log(CircleInSquare(4));

function SumArr(){
    let sum=0
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum+=element
    }
    return sum;
}
console.log(SumArr(1,2,3,4,5));


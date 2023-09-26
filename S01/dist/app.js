// const button = document.getElementById("submit")
// const a = document.getElementById("input1")
// const b = document.getElementById("input2")
// const result = document.getElementById("result")
// function add(a,b){
//     return a+b
// }
// button.addEventListener("click",function(){
// result.innerText = `${a.value+b.value}`
//     result.innerText = `${a.value+b.value}`
// })
// const arrow =(x,y)=>x+y
let message = "5";
message = "hi";
let msg = 'Merhaba';
msg = "3";
let count = 100;
count = 111;
let isTrue = true;
isTrue = false;
//Arrays
let num = [1, 2, 3];
num.push(4);
console.log("num degeri:", num);
let message2 = ['Hello', "Günaydin"];
message2.push("2");
//Empty
let score = [];
let src = [];
let readOnlyArray = [1, 2, 3, 4, 5, 6];
// readOnlyArray.push(6)
// readOnlyArray = [1,2,3,4,5,6]
//Tuples
let myTuple;
myTuple = ['Abdullah', 6103, false];
let myTpl = ["Hello", 0];
myTpl.push(5);
console.log("myTpl:", myTpl);
//array of Tuples
let DE06;
DE06 = [[6103, 'Abdullah'], [6101, 'Seyma'], [6104, 'Suray'], [6105, 'Habip']];
DE06.push([6102, 'Gülsen']);
console.log("ögrenciler:", DE06);
DE06[0].pop();
console.log(DE06);
console.log("Red:", 0 /* Colors.Red */);
var Tshirts;
(function (Tshirts) {
    Tshirts["xs"] = "Xsmal";
    Tshirts["s"] = "Small";
    Tshirts["m"] = "Medium";
    Tshirts["l"] = "Large";
})(Tshirts || (Tshirts = {}));
console.log("tshirt:", Tshirts.xs);
var Tee;
(function (Tee) {
    Tee["xs"] = "Xsmal";
    Tee["s"] = "Small";
    Tee["m"] = "38";
    Tee["l"] = "88";
    Tee[Tee["xl"] = 44] = "xl";
})(Tee || (Tee = {}));
console.log("tee:", Tee.l);
//Any
let x = 0;
x = "Hello";
x = false;
let y = [1, "Hello", false];
//unknown  >>> Api den veri alirken ne geldigi bilinmiyor
let notSure = 4;
let msg3 = "Hello World";
let msg4 = msg3;
console.log(msg4.length);
//void
function myFunc() {
    console.log("hello");
}
myFunc();
//never
// function error(message:string):never{
//    throw new Error(message)
// }
// let output = error("New Error")
// console.log(output);
// union type
let d;
d = 5;
d = "hello";
d = false;
function checkNumber(n, m) {
    if (typeof n == "number") {
    }
    else {
        m;
    }
    return 1;
}
let pet1 = "cat";
let pet2 = "dog";
const car = {
    type: "Sedan",
    model: "A4",
    year: 2020,
    sunroof: false,
    age(year) {
        console.log(`${year - 2020}`);
        return year - 2020;
    }
};
car.age(2023);
let object1 = {
    author_name: "JRR",
    book_name: "Yüzüklerin Efendisi",
    book_id: 1234,
    author_id: 1980
};
// Type Assertions
let score1 = "350";
console.log(score1.split(''));
// (score1 as number).toFixed(2)
let newScore = score1;
let stringScore = score1;
//functions
function selamla(great, name) {
    if (!name)
        name = "user";
    return `${great + ' ' + name}`;
}
console.log(selamla("merhaba", "Mark"));
console.log(selamla("merhaba"));
function add(a, b) {
    return a + b;
}
// Rest Parameters
function add2(num, ...numbers) {
    let total = num;
    numbers.forEach(number => total += number);
    console.log(total);
}
add2(1);
add2(1, 2, 3, 4);

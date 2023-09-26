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


let message : string = "5";
message="hi";

let msg = 'Merhaba'
msg = "3"

let count: number = 100
count = 111

let isTrue: boolean = true;
isTrue=false

//Arrays

let num:number[] = [1,2,3]

num.push(4)

console.log("num degeri:",num);


let message2:string[] =['Hello',"Günaydin"]
message2.push("2")

//Empty
let score = []
let src:number[]=[]

let readOnlyArray: readonly number[] =[1,2,3,4,5,6]
// readOnlyArray.push(6)
// readOnlyArray = [1,2,3,4,5,6]

//Tuples

let myTuple:[string,number,boolean];
myTuple = ['Abdullah',6103,false]

let myTpl = ["Hello",0]
myTpl.push(5)
console.log("myTpl:",myTpl);

//array of Tuples

let DE06:[number,string][];
DE06 = [[6103,'Abdullah'],[6101,'Seyma'],[6104,'Suray'],[6105,'Habip']]

DE06.push([6102,'Gülsen'])
console.log("ögrenciler:",DE06);


DE06[0].pop()
console.log(DE06);

//Enum

const enum Colors {
    Red,
    Green,
    Blue,
    Yellow
}
console.log("Red:",Colors.Red);

enum Tshirts {
    xs ="Xsmal",
    s = "Small",
    m = "Medium",
    l = "Large",
}

console.log("tshirt:",Tshirts.xs);

enum Tee {
    xs ="Xsmal",
    s = "Small",
    m = "38",
    l  = "88",
    xl = 44,
}
console.log("tee:",Tee.l);

//Any

let x:any = 0;

x = "Hello";
x = false;

let y:any[] = [1,"Hello",false]

//unknown  >>> Api den veri alirken ne geldigi bilinmiyor
let notSure: unknown = 4;
let msg3:unknown ="Hello World"
let msg4:string = msg3 as string
console.log(msg4.length);

//void

function myFunc():void{
    console.log("hello"); 
}
myFunc()

//never

// function error(message:string):never{
//    throw new Error(message)
// }

// let output = error("New Error")
// console.log(output);

// union type

let d : string | number | boolean
d = 5
d = "hello"
d = false

// type Aliases
type Num = string | number

function checkNumber(n: Num, m: Num ):Num {
   
    if (typeof n == "number"){

    }else{
        m
    }
    return 1
}

// String Literals

type pet = "cat" | "dog"
let pet1: pet = "cat"
let pet2: pet = "dog"


type Combine = string | number

const car:{
    type: string,
    model: string,
    year: Combine,
    sunroof: boolean,
    age(year:number)
} = {
    type: "Sedan",
    model: "A4",
    year : 2020,
    sunroof : false,
    age(year):number{
        console.log(`${year - 2020}`);
        return year - 2020
    }
}
car.age(2023)

// Intersection (kesişim)

type Book = {
    book_id: number;
    book_name: string;
}
type Author = {
    readonly author_id : number;
    author_name: string;
}
type Combined = Book & Author

let object1:Combined = {
    author_name: "JRR",
    book_name:"Yüzüklerin Efendisi",
    book_id:1234,
    author_id:1980
}

// Type Assertions

let score1: unknown = "350"
console.log((<string>score1).split(''));
// (score1 as number).toFixed(2)

let newScore: number = score1 as number
let stringScore:string = score1 as string

//functions

function selamla (great:string,name?:string):string{
    if(!name) name ="user"
    return `${great+ ' '+name}`
}
console.log(selamla("merhaba","Mark"));
console.log(selamla("merhaba"));

// function overloading

function add(a:string,b:string):string
function add(a:number,b:number):number
function add(a:any,b:any):any{
    return a+b
}

// Rest Parameters
function add2(num:number,...numbers:number[]){
    let total = num;
    numbers.forEach(number=> total +=number)
    console.log(total);
}

add2(1)
add2(1,2,3,4)
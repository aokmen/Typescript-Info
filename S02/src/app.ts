 /* -------------------------------------------------------------------------- */
 /*                                  Interface                                 */
 /* -------------------------------------------------------------------------- */

// Users can follow the syntax below to convert the string to a number using the parseInt() method in TypeScript. let num: number = parseInt(str); 

 /* --------------------------- Interface Sample 01 -------------------------- */
type Person2 = {
    name:string
   
}
const personen2:Person2 = {
    name: "Can"
}


interface Person {
    name:string,
    readonly id:number
}
const personen1:Person = {
    name: "Mark",
    id:1
}

console.log(personen1.id);

/* --------------------------- Interface Sample 02 -------------------------- */

interface Calender {
    events:string[],
    addEvents(event:string):void;
}

class LMSCalender implements Calender{

    constructor(public events: string[]){}
    addEvents(event: string): void {
        this.events.push(event)
    }
}
const de06 = new LMSCalender(['HTML','JS'])
console.log(de06);
const de07 = new LMSCalender([])
console.log(de07);

de07.addEvents("HTML")
de07.addEvents("CSS")
de07.addEvents("TS")
console.log(de07);

 /* --------------------------- Interface Sample 03 -------------------------- */

interface Color {
    color: {r: number, g: number, b: number};
}


interface Shape {
    area: number;
}


class Square implements Color, Shape {
    constructor( public color: {r: number, g: number, b:number}, public area: number){
    }
}

const sq = new Square({r:255,g:0,b:0} , 255)
console.log(sq);

const sq2 = new Square({r:255,g:0,b:0} , 169)
console.log(sq2);



 /* --------------------- function signature of interface -------------------- */

interface Sum{
    (num1: number, num2: number): number;
}

function add(n1: number, n2: number): number{
    return n1+ n2;
}

function conC(n1: string, n2: string): string{
    return n1+n2;
}

let arithemticAdd:Sum = add;

console.log(arithemticAdd(2,5));

 /* -------------------------------------------------------------------------- */
 /*                                  Generics                                  */
 /* -------------------------------------------------------------------------- */
 //Array icindeki tipi bulup ona göre tipi belirliyor
function getArray<T>(items:T[]): T[]{
    return new Array().concat(items)
}

let numArr = getArray([1,2,3,4])
let strArr = getArray(['john', 'Mike', 'Alan'])
// strArr.push(3)  /* Error */
// numArr.push('Sally') /* Error */

/* ----------------------------- Multi Genereic ----------------------------- */

class keyValuePair<T, U> {
    constructor(public key:T, public value:U ){
    }
}

const obj1 = new keyValuePair<string,number>('age', 45);

const obj2 = new keyValuePair(1, 'one')
const obj3 = new keyValuePair('1', 'one')
console.log(obj1);
console.log(obj2);
console.log(obj3)

obj3.key = "time"
obj3.value = "1"

/* -------------------------------------------------------------------------- */
/*                              Class constructor                             */
/* -------------------------------------------------------------------------- */

class Employee {
    empCode:number;
    empName:string;
    constructor (code:number, name:string){
        this.empCode = code;
        this.empName = name;
    }
}
const emp1 = new Employee(2,"car")
const emp2 = new Employee(10,"house")

/* -------------------------------------------------------------------------- */
/*                                 Inheritance                                */
/* -------------------------------------------------------------------------- */

class Person{
    name:string;
    constructor(name:string){
        this.name = name
    }
    yazdir(){
        console.log(this.name);
    }
    selamla(){
        console.log(`Merhaba ${this.name}`);
    }
}
const person1 =new Person('Mark')

console.log(person1.name);

class Isci extends Person {
    sgkNo: number;

    constructor(sgkNo:number, name:string){
        super(name)
        this.sgkNo = sgkNo;
    }
    yazdir(){
        console.log(this.name), this.sgkNo;
    }
}

const isci1 = new Isci(100,"Ahmet")
// console.log(isci1.name);
// console.log(isci1.sgkNo);
isci1.yazdir()
isci1.selamla()

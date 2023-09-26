/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */
const personen2 = {
    name: "Can"
};
const personen1 = {
    name: "Mark",
    id: 1
};
console.log(personen1.id);
class LMSCalender {
    constructor(events) {
        this.events = events;
    }
    addEvents(event) {
        this.events.push(event);
    }
}
const de06 = new LMSCalender(['HTML', 'JS']);
console.log(de06);
const de07 = new LMSCalender([]);
console.log(de07);
de07.addEvents("HTML");
de07.addEvents("CSS");
de07.addEvents("TS");
console.log(de07);
class Square {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }
}
const sq = new Square({ r: 255, g: 0, b: 0 }, 255);
console.log(sq);
const sq2 = new Square({ r: 255, g: 0, b: 0 }, 169);
console.log(sq2);
function add(n1, n2) {
    return n1 + n2;
}
function conC(n1, n2) {
    return n1 + n2;
}
let arithemticAdd = add;
console.log(arithemticAdd(2, 5));
/* -------------------------------------------------------------------------- */
/*                                  Generics                                  */
/* -------------------------------------------------------------------------- */
//Array icindeki tipi bulup ona göre tipi belirliyor
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['john', 'Mike', 'Alan']);
// strArr.push(3)  /* Error */
// numArr.push('Sally') /* Error */
/* ----------------------------- Multi Genereic ----------------------------- */
class keyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const obj1 = new keyValuePair('age', 45);
const obj2 = new keyValuePair(1, 'one');
const obj3 = new keyValuePair('1', 'one');
console.log(obj1);
console.log(obj2);
console.log(obj3);
obj3.key = "time";
obj3.value = "1";
/* -------------------------------------------------------------------------- */
/*                              Class constructor                             */
/* -------------------------------------------------------------------------- */
class Employee {
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
}
const emp1 = new Employee(2, "car");
const emp2 = new Employee(10, "house");
/* -------------------------------------------------------------------------- */
/*                                 Inheritance                                */
/* -------------------------------------------------------------------------- */
class Person {
    constructor(name) {
        this.name = name;
    }
    yazdir() {
        console.log(this.name);
    }
    selamla() {
        console.log(`Merhaba ${this.name}`);
    }
}
const person1 = new Person('Mark');
console.log(person1.name);
class Isci extends Person {
    constructor(sgkNo, name) {
        super(name);
        this.sgkNo = sgkNo;
    }
    yazdir() {
        console.log(this.name), this.sgkNo;
    }
}
const isci1 = new Isci(100, "Ahmet");
// console.log(isci1.name);
// console.log(isci1.sgkNo);
isci1.yazdir();
isci1.selamla();

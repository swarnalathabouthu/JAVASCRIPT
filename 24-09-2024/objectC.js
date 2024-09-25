//Object Literals.
var a = {
    surname: "Bouthu",
    name: "Swarnalatha",
    age: "22"
}
a.salary = 40;
console.log(a);

//Creating object with new keyword.
var b = new Object();
    b.surname = "Bouthu",
    b.name = "Abhiram",
    b.age = "12",
    b.salary = 30
console.log(b);

//shortend of object property.
var name="Bouthu Swarnalatha";
var age=22;
var mydetails={name,age};
console.log(mydetails);

//Object Methods.
//1.Object keys.
var objectkeys = {
    name: "spandhana",
    age: "15"
}
console.log(Object.keys(objectkeys));

//2.Object values.
var objectvalues = {
    name: "Bapu",
    age: "16"
}
console.log(Object.values(objectvalues));

//3.Object entries.
var objectentries = {
    name: "Rajeshwari",
    age: "17"
}
console.log(Object.entries(objectentries));

//4.Object Freeze.
var freeze = {
    name: "Shiva",
    age: "18"
}
console.log(freeze);
Object.freeze(freeze)
freeze.surname="Bouthu";
console.log(freeze);
console.log(Object.isFrozen);

//5.Object Seal.
var seal = {
    name: "Kumar",
    age: "19"
}
console.log(seal);
Object.freeze(seal);
seal.surname="Bouthu";
console.log(seal);
console.log(Object.isSealed);

//6.Object preventExtensions.
var E = {
    name: "Latha",
    age: "20"
}
console.log(E);
Object.preventExtensions(E)
E.surname="Bouthu";
console.log(E);
console.log(Object.isSealed);

//6.Remove the Key:Value.
var E = {
    name: "Ram",
    age: "18",
    surname:"Bouthu"
}
console.log(E);
delete E.surname;
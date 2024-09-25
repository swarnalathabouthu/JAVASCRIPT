//Data Types.
var datatype = "Data Types:";
console.log(datatype);

//Primitive Data Types.
var type1 = "1.Primitive Data Types:"
console.log(type1);

//Number.
var datatypenumber = "Number:"
var a = 10;
var b = 20;
console.log(datatypenumber);
console.log(a);
console.log(b);
console.log("    ");

//String.
var datatypestring = "String:";
var surname = "Bouthu";
var name = "Swarnaltha";
var qualification = "B.Tech: CSE";
var job = "Fullstack Web Developer";
var address = "Hyderabad";
console.log(datatypestring);
console.log(surname);
console.log(name);
console.log(qualification);
console.log(job);
console.log(address);
console.log("    ");

//Boolean.
var datatypeboolean = "Boolean:";
var num1 = 10;
var num2 = 20;
var conditionone = num1 > num2;
var conditiontwo = num1 < num2;
var conditionthree = num1 == num2;
console.log(datatypeboolean);
console.log(conditionone);
console.log(conditiontwo);
console.log(conditionthree);
console.log("     ");

//Null
var datatypenull = "Null:";
var sita="Null";
console.log(datatypenull);
console.log("This is Null DataType: " + sita);
console.log("   ")

//Undefined
var datatypeundefined = "UnDefined:"
var ram
console.log(datatypeundefined);
console.log("Here key value is not assigned so it shows null: " + ram);
console.log("     ")

//Non-Primitive Datatypes.
var type2 = "Non-Primitive Datatypes:";
console.log(type2);
//Using Arrays.
var datatypearray = "Arrays:"
var firstfamily = "FamilyMembers";
var FamilyMembers = {
    Family: [
        Father = { surname: "Bouthu", name: "Bapu", occupation: "Agriculture", age: 35 },
        Mother = { surname: "Bouthu", name: "Rajeshwari", occupation: "Agriculture", age: 32 },
        Brother = { surname: "Bouthu", name: "AbhiRam", occupation: "Sixth standard", age: 12 },
        Me = { surname: "Bouthu", name: "Swarnalatha", occupation: "undergraduate student:B.Tech(CSE)", age: 22 }
    ]
}
console.log(datatypearray);
console.log(firstfamily);
console.log(FamilyMembers);
console.log("    ")

//Using Objects.
var datatypeobject = "Objects:";
var secoundfamily = "MyFamily";
var Myfamily = {
    MyCuteFamily: {
        Myfather: { surname: "Bouthu", name: "Bapu", occupation: "Agriculture", age: 35 },
        Mymother: { surname: "Bouthu", name: "Rajeshwari", occupation: "Agriculture", age: 32 },
        Mybrother: { surname: "Bouthu", name: "AbhiRam", occupation: "Sixth standard", age: 12 },
        Iam: { surname: "Bouthu", name: "Swarnalatha", occupation: "undergraduate student:B.Tech(CSE)", age: 22 }
    }
}
console.log(datatypeobject);
console.log(secoundfamily);
console.log(Myfamily);
console.log("     ")

//Using Variables.
var datatypevariable = "Variables:";
var thirdfamily = "MyFamily";
var family = {
    Myfather: { surname: "Bouthu", name: "Bapu", occupation: "Agriculture", age: 35 },
    Mymother: { surname: "Bouthu", name: "Rajeshwari", occupation: "Agriculture", age: 32 },
    Mybrother: { surname: "Bouthu", name: "AbhiRam", occupation: "Sixth standard", age: 12 },
    Iam: { surname: "Bouthu", name: "Swarnalatha", occupation: "undergraduate student:B.Tech(CSE)", age: 22 }
}
console.log(datatypevariable);
console.log(thirdfamily);
console.log(family);
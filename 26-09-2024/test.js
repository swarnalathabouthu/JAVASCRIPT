//Question One.
var surname = "   Bouthu."
var name = "Swarnalatha     "
var surnametrim = surname.trim();
var nametrim = name.trim();
var fullname = surnametrim.concat(nametrim);
console.log("Question One: " + fullname.toUpperCase());

//Question Two.
var username = "BOUTHUSWARNALATHA"
var usernameslice = username.slice(6,12);
var usernamelength = usernameslice.length-1;
console.log("Question Two: " + usernamelength + " " + usernameslice.toLowerCase());

//Question Three.
var charone = "S";
var chartwo = charone.concat("ita");
console.log("Question Three: " +chartwo.toUpperCase().charAt(2));

//Question Four.
var stringone = "Swarnalatha";
var stringtwo = "arna";
var stringoneextract = stringone.slice(0,3);
var stringtwoextract = stringtwo.slice(1,5);
var concatextractstrings = stringoneextract.concat(stringtwoextract);
console.log("Question Four: " +concatextractstrings.toUpperCase()); 

//Question Five.
var string = "  swarna   ";
var stringtrim = string.trim();
var stringcaseone = stringtrim.charAt(0).toUpperCase();
var stringcasetwo = stringtrim.charAt(5).toUpperCase();
var stringmiddlechar = stringtrim.slice(1,5);
var finalstring = stringcaseone.concat(stringmiddlechar + stringcasetwo);
console.log("Question Five: " +finalstring);

//question Six
var string = "hello there , how are you";
var stringsplit = string.split(" ");
var stringindex = stringsplit.indexOf("are");
console.log( "Question Six: " +stringindex);


//Question seven
var smartphone = {
    Brand: "redmi",
    Model: "9 pro max",
    Price: 180000
}
Object.seal(smartphone);
price = 190000
console.log("Question Seven: " + Object.isSealed(smartphone));

//Question eight
var book = {
    title: "The Smile",
    author: "Swarna",
    publishedYear: 2023
}
Object.freeze(book);
publishedYear = 2024;
console.log("Question Eight: " +Object.isFrozen(book));

//Question nine
var person = {
    firstname: "Bouthu",
    lastname: "Swarnalatha",
    age: 22
}
console.log("Question Nine:" + Object.keys(person) + "  " + Object.values(person));

//Question ten
var course = {
    title: "Fullstack",
    instructor: "vamsi",
    duration: "2hours"
}
delete(duration);
console.log("Question Ten: " +Object.entries(course));

//Question eleven
var employee = {
    name: "ram",
    position: "software",
    salary: 40000
}
Object.seal(employee);
positon = "intern";
console.log("Question Elven: " +Object.keys(employee));

//Question twelve
var string = "swarnalatha"
var stringslice = string.slice(3,6);
console.log("Question Twelve: " +stringslice.toUpperCase());

//Question  thirteen
var string = "swarnalatha"
var stringcase = string.toUpperCase();
console.log("Question Thirteen: " +stringcase.length);

//Question fourteen
var string = "@Bouthu";
console.log("Question Fourteen: " +string.charCodeAt(0));

//Question fiften
var string = "         Bouthu            ";
var stringtrim = string.trim();
var stringslice = stringtrim.slice(1,5);
console.log("Question Fiften: " +stringslice);

//Question sixteen
var stringone = "Bouthu";
var stringtwo ="Swarnalatha";
var stringtwocase =stringtwo.toLowerCase();
var stringsconcat = stringone.concat(stringtwocase);
console.log("Question Sixteen: " +stringsconcat);

//Question seventeen
var string = "         Bouthu";
var stringtrim = string.trimStart();
var stringslice = stringtrim.slice(1,6);
console.log("Question Seventeen: " +stringslice);

//Question eighteen
var string = "bouthu";
var stringchar = string.charAt(0);
console.log("Question Eighteen: " +stringchar.toUpperCase());

//Question ninetten
let a = 5;
let b = 10;
let c = 20;
let d = a * b + c;
let e  = 100;
let compareone = d == e;
let comparetwo = d >= e;
let comparethree = d <= e;
let comparefour = d > e;
let comparefive = d < e;
let comparesix = d === e;
console.log("Question Nineteen: " + compareone+ "  " + comparetwo + "  " + comparethree+ "  " + comparefour+ "  " +comparefive+ "  " +comparesix);

//Question twenty
let x = 8;
let y = 12;
let and = x > 5 && y < 20; //F && T
console.log("Question Twenty: " +  and);

//Question twenty one
let num1 = 25;
let num2 = 35;
let greaterthan = num1 > num2 ? "Condition is True": "Condition is False";
let lessthan = num1 < num2 ? "Condition is True": "Condition is False";
let number =  greaterthan &&  lessthan ? "num1 is lessthan num2": "num1 is greterthan num2";
console.log("Question Twentyone: " + number);

//Question twenty two
let m = 15;
let n = 10;
let subtraction = m-n;
let division  = m/n;
console.log("Question Twentytwo: " +subtraction+ "  " +division);

//Question twenty three
let age = 18
let conditionone = age == 18;
let conditiontwo = age === 18;
console.log("Question Twentythree: " + conditionone + "  " + conditiontwo);

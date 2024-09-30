//Question one.
var string = "swarnalatha"
var stringslice = string.slice(3,6);
console.log(stringslice.toUpperCase());

//Question two
var string = "swarnalatha"
var stringcase = string.toUpperCase();
console.log(stringcase.length);

//Question Three
var string = "@Bouthu";
console.log(string.charCodeAt(0));

//Question Four
var string = "         Bouthu            ";
var stringtrim = string.trim();
var stringslice = stringtrim.slice(1,5);
console.log(stringslice);

//Question Five
var stringone = "Bouthu";
var stringtwo ="Swarnalatha";
var stringtwocase =stringtwo.toLowerCase();
var stringsconcat = stringone.concat(stringtwocase);
console.log(stringsconcat);

//Question Six
var string = "         Bouthu";
var stringtrim = string.trimStart();
var stringslice = stringtrim.slice(1,6);
console.log(stringslice);

//Question Seven
var string = "bouthu";
var stringchar = string.charAt(0);
console.log(stringchar.toUpperCase());

//Question Eight
var str = "Swarna     ";
var strttrim = str.trimEnd();
var strconcat = strttrim.concat("latha")
console.log(strconcat);

//Question nine
let input = "   HelloWorld    "
let inputtrim = input.trim();
let inputcase = inputtrim.toUpperCase();
console.log(inputcase.slice(1,6));

//Question Ten
let str1 = "HELLO";
let str2 = "WORLD";
let str1case = str1.toLowerCase();
let str2case = str2.toLowerCase();
let strings = str1case.concat(" " + str2case);
console.log(strings.charAt(0));
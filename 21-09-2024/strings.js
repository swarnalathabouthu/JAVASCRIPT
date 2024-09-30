//Question One.
var surname = "   Bouthu."
var name = "Swarnalatha     "
var surnametrim = surname.trim();
var nametrim = name.trim();
var fullname = surnametrim.concat(nametrim);
console.log(fullname.toUpperCase());

//Question Two.
var username = "BOUTHUSWARNALATHA"
var usernameslice = username.slice(6,12);
var usernamelength = usernameslice.length-1;
console.log(usernamelength);
console.log(usernameslice.toLowerCase());

//Question Three.
var charone = "S";
var chartwo = charone.concat("ita");
console.log(chartwo.toUpperCase().charAt(2));

//Question Four.
var stringone = "Swarnalatha";
var stringtwo = "arna";
var stringoneextract = stringone.slice(0,3);
var stringtwoextract = stringtwo.slice(1,5);
var concatextractstrings = stringoneextract.concat(stringtwoextract);
console.log(concatextractstrings.toUpperCase()); 

//Question Five.
var string = "  swarna   ";
var stringtrim = string.trim();
var stringcaseone = stringtrim.charAt(0).toUpperCase();
var stringcasetwo = stringtrim.charAt(5).toUpperCase();
var stringmiddlechar = stringtrim.slice(1,5);
var finalstring = stringcaseone.concat(stringmiddlechar + stringcasetwo);
console.log(finalstring);

//question Six
var string = "hello there , how are you";
var stringsplit = string.split(" ");
var stringindex = stringsplit.indexOf("are");
console.log(stringindex);

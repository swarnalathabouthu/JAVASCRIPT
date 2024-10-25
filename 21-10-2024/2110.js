/*1.
 let str = "Hello World!";
Relace the substring “World!” with “My Dear Friend” ..
Write the program for that
*/
let str = "Hello World";
str = str.replace("World", "My Dear Friend")
console.log(str)

/*
2.
let a=”Hungry”;
Repeat the “Hungry” for 10 times
Write the program for that
*/
let a="Hungry"
let repeating = a.repeat(10)
console.log(repeating)

/*
3.
let sentence = "The quick brown fox jumps over the lazy dog. The fox is clever.";
Find the last index of the string “fox”
*/
let sentence = "The quick brown fox jumps over the lazy dog. The fox is clever.";
let lastindexstring = sentence.lastIndexOf("fox");
console.log(lastindexstring)
/*
4.
let message = "Hello, world!";
Find the string starts with “hi”
Write code for that
*/
let message = "Hello, world!"
let stringstarts = message.startsWith("hi")
console.log(stringstarts)

/*
5.let fileName = "document.pdf";
Find the string ends with “.pdf”
Write code for that
*/
let fileName = "document.pdf"
let stringends = fileName.endsWith(".pdf")
console.log(stringends)
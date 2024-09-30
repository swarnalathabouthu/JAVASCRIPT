//Operators:Javascript operators are used to perform different types of mathematical and logical computations.
//Arithematic Operators:Arithmetic Operators are used to perform arithmetic on numbers.
var a = 10;
var b = 20;
var c = "Arithematic Operators:"
console.log(c);
console.log("addition[+]: " + (a+b));
console.log("subtraction[-]: " + (a-b));
console.log("Multiplication[*]: " + (a*b));
console.log("Exponentiation[**)]: " + (a**b))
console.log("Division[/]: " + (a/b));
console.log("Modulus[Division Remainder % ]: " + (a%b));
console.log("              ");

//Comparison Operators
var x = 10;
var y = 20;
var z = "Comparison Operators:"
var equalto = x == y;
var thripleequalto = x === y;
var lessthan = x < y;
var greaterthan = x > y;
var greaterthanorequalto = x >= y;
var lessthanorequalto = x <= y;
var notequalto = x != y;
var stricklynotequalto = x !== y;
console.log(z)
console.log("Equalto[==]: "+ equalto);
console.log("DoubleEqualto[===]: " + thripleequalto);
console.log("Lessthan[<]: " + lessthan);
console.log("Greaterthan[>]: " + greaterthan);
console.log("Greaterthan Or Equalto[>=]: " + greaterthanorequalto);
console.log("Lessthan Or Equalto[<=]: "+ lessthanorequalto);
console.log("Not Equalto[!=]: "+ notequalto);
console.log("Strickly not Equalto[!==]: "+ stricklynotequalto);
console.log("              ");

//Ternary operator
var p = 2;
var q = 4;
var r = "Ternary operator:"
var equalto = p == q ? "conditon is True":"conditon is False";
var thripleequalto = p === q ? "conditon is True":"conditon is False";
var lessthan = p < q ? "conditon is True":"conditon is False";
var greaterthan = p > q ? "conditon is True":"conditon is False";
var greaterthanorequalto = p >= q ? "conditon is True":"conditon is False";
var lessthanorequalto = p <= q ? "conditon is True":"conditon is False";
var notequalto = p != q ? "conditon is True":"conditon is False";
var stricklynotequalto = p !== q ? "conditon is True":"conditon is False";
console.log(r)
console.log("Equalto[==]: "+ equalto);
console.log("DoubleEqualto[===]: " + thripleequalto);
console.log("Lessthan[<]: " + lessthan);
console.log("Greaterthan[>]: " + greaterthan);
console.log("Greaterthan Or Equalto[>=]: " + greaterthanorequalto);
console.log("Lessthan Or Equalto[<=]: "+ lessthanorequalto);
console.log("Not Equalto[!=]: "+ notequalto);
console.log("Strickly not Equalto[!==]: "+ stricklynotequalto);
console.log("              ");

//Type Operators.
var typeone = "string";
var typetwo = 20;
var operatortype = "Type Operators:"
console.log(operatortype);
console.log(typeof(typeone));
console.log(typeof(typetwo));
console.log("              ");


//Logical Operators
var e = 5;
var f = 10;
var add = 5+10
var g = "Logical Operators:"
var logicaland = e && f;
var logicalor = e || f;
var logicalnot = e ?? f;
console.log(g);
console.log(logicaland);
console.log(logicalor);
console.log(logicalnot);
console.log("              ");


var w = 10;
console.log(w.toString());
console.log(w.toExponential());
console.log(w.toFixed());
console.log(w.toPrecision());
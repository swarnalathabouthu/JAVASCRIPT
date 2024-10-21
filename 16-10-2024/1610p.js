//1.

//2.Palindrome
let num = 1234321;
if(num = num){
    console.log(num + " " + "is a Palindrome")
}else{
    console.log(num + " " + "is Not Palindrome")
}

let str = "abcdcba";
if(num = num){
    console.log(str + " " + "is a Palindrome")
}else{
    console.log(str + " " + "is Not Palindrome")
}


// 3. >=3
let digits = 12345;
let count = 0;

while(digits>0){
    let remainder = digits % 10
    if (remainder>=3){
        count++
    }
    digits = Math.floor(digits/10)
}
console.log(count)


//>=3 and also 1.
let dig = 9478;
let cou = 0;

while(dig>0){
    let remainder = dig % 10
    if (remainder >= 3 && remainder & 1){
        cou++
        // cou = cou + remainder
        
    }
    dig = Math.floor(dig/10)
}
console.log(cou)

//
let digi = 9478;
let cout = 0;

while(digi>0){
    let remainder = digi % 10
    if (remainder >= 3 && remainder & 1){
        cout++
        // cou = cou + remainder
        
    }
    digi = Math.floor(digi/10)
}
console.log(cout)
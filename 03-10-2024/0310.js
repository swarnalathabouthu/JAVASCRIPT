//write a program to print the array in reverse order
var arr = [[1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]]]
let revarr = arr.reverse();
console.log(revarr)

// //write a program to print the string in reverse order
var string1 = "vamsi"
var string2 = "Swarna"
var revstring1 = string1.split('').reverse().join('')
var revstring2 = string2.split('').reverse().join('')
console.log(revstring1)
console.log(revstring2)

//write a program to print the age in the given array.
var arr = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]]
let age;
for (elem of arr){
    if (typeof elem === 'object' && 'age' in elem){
        age = elem.age;
    }
}
console.log(age);
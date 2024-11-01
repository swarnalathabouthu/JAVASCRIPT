// //Print subArray.
// function subArray(arr) {
//     //code here
//     let parentArray = [];
//     for (i = 0; i < arr.length; i++) {
//         for (j = i; j < arr.length; j++) {
//             let subArray = [];
//             for (k = i; k <= j; k++)
//                 subArray.push(arr[k])
//         }
//         parentArray.push(subArray)
//     }
// }
// return parentArray
// const array = [1, 2, 3]
// const result = subArray(array)
// console.log(result)



//Program to find SubArray length.
function subArray(arr) {
    psum = 0
    for (i = 0; i < arr.length; i++) {
        sum = 0;
        for (j = 0; j < arr[i].length; j++) {
            sum = sum + arr[i][j]
        }
        psum = psum + sum
    }
    return psum
}
const array = [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]
const result = subArray(array)
console.log(result)





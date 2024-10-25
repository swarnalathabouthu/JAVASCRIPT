/*
[1,2,3,4,5,2,1,1,2,4,1]
{
1:4
2:3
3:1
4:2
5:1
}
conditions:
1.loop
2.if
3. count variables
*/
function findOccurences(arr) {
    count  = {}
    for (i = 0; i < arr.length; i++) {
        if(count[arr[i]]){
            count[arr[i]]++
        }else{
            count[arr[i]] = 1
        }
    }
    return count
}
const array = [1, 2, 3, 4, 5, 2, 1, 1, 2, 4, 1]
const output = findOccurences(array)
console.log(output)

const obj = {}
obj.name = "swarna"
obj.age = "21"
obj[1] = 30
console.log(obj)
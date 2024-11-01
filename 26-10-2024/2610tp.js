var arr = [1,2,3,4,5]
arr[arr.length] = 20
arr[arr.length] = 30
console.log(arr) //[1,2,3,4,5,20,30]

var a = [1,2,3,7]
a.length=0
a=[]
a[3] = "Ram"
a[6]= "Swarna"
console.log(a) //[ <5 empty items>, 'Ram']

//console.log(a[6] + a[3]) //NaN
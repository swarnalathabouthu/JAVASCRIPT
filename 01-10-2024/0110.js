for (i=10;i=1;i++){
    console.log(i)
}

//While Loop;
var i=5;
while(i >= 1){
    i++
    console.log(i);
}
console.log("welcome everyone")

var j = 0;
var limit = 5;
while(j <= limit){
    console.log("This is: " + j);
    j++;
}console.log("wait for 20sec to relogin");


//Switch
switch(expression){
    case 1:
        console.log("yes 1 is true");
 default:
    console.log("no not allowed");
}

//switch case
var Name = "Swarna";
switch(Name){
    case "Latha":
        console.log("No");
        case "Swarna":
            console.log("Yes");
            default:
                console.log("Names are not Matching.");
}

//Day in a Week.
var day = "Tuesday";
switch(day){
    case "Monday":
        console.log("No");
        case "Tuesday":
            console.log("No");
            case "Wednesday":
                console.log("No");
                case "Thrusday":
                    console.log("Yes");
                    case "Friday":
                        console.log("No");
                        case "Weekend":
                            console.log("No");
                            default:
                                console.log("Names are not Matching.");
}
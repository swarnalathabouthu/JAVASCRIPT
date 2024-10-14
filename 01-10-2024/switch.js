//1.Day in a Week.
var day = "Thrusday";
switch (day) {
    case "Monday":
        console.log("This is Monday");
        break;

        case "Tuesday":
            console.log("This is Tuesday");
            break;

            case "Wednesday":
                console.log("This is Wednesday");
                break;

                case "Thrusday":
                    console.log("This is Thrusday");
                    break;

                    case "Friday":
                        console.log("This is Friday");
                        break;

                        case "Weekend":
                            console.log("This is Weekend");
                            break;

                    default:
                        console.log("Names are not Matching.");
                        break;
}

//2.Month in a Year.
var month = "April";
switch (month) {
    case "January" || "February" || "March" || "May" || "June" || "July" || "Auguest"|| "September"|| "October"|| "November" ||"December" :
        console.log("This is not my Birthday month.");
        break;

        case "April":
            console.log("This is my birthday month.");
            break;

        default:
            console.log("Months are not Matching.");
            break;
}

//3.Even Numbers using While Loop
var p = 2;
while (p <= 10) {
    console.log(p);
    p += 2;
}

//4.Countdown Timer starts form 10.
var countdown = 10;
while(countdown >= 1){
    console.log(countdown);
    countdown--;
}console.log("welcome.")
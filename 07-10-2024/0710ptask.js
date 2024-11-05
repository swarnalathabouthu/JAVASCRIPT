//Question 1: Smart Home System.
let nooneintheroom="true"
let weather = "winter"
let nooneinthehouse = "true"
//Lights.
if(nooneintheroom){
    console.log("Off the Lights.")
}else{
    console.log("On the Lights.")
}
//Heating
if(weather === "winter"){
    console.log("set the temperature to 22 degrees.")
}else if(weather === "summer"){
    console.log("set it to 18 degrees.")
}else if(weather === "rainy"){
    console.log("set it to 10 degrees.")
}
//Security
if(nooneintheroom){
    console.log("Lock the Door.")
}else{
    console.log("Unlock the Door.")
}

//Question 2: Graduate Student Grade.
let maths = 40
let science = 67
if(maths >= 50 && science>=50){
    console.log("Graduated.")
}else{
    console.log("Not Graduated.")
}


//Question 3: Booking a flight.
let ticket = 460 
let Time = "morning" 
let Meal = true
if (ticket < 500 && (Time === "morning" || Meal)) {
    console.log("Book the flight.")
} else {
    console.log("Looking for another flight.")
}


//Question 4: Buying a laptop.
let GBram = 8; 
let Graphicscard = true; 
let price = 89999; 
if (GBram >= 8 && Graphicscard && price <= 80000) {
    console.log("Buying the laptop.");
} else {
    console.log("Looking for alternatives.");
}


//Question 5: Class trip
let attendance = 90; 
let grade = "B"; 
if (attendance > 80 && (grade === "A" || grade === "B")) {
    console.log("The student can attend trip.");
} else {
    console.log("The student cannot attend trip.");
}
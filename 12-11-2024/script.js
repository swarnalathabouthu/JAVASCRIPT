// To set alarm
function setAlarm() {
    let targetTime = new Date();
    targetTime.setHours(22);
    targetTime.setMinutes(27);
    targetTime.setSeconds(0);

    let timeDifference;
    let alarmInterval = setInterval(function () {
        let currentTime = new Date();
        timeDifference = targetTime - currentTime;
        if (currentTime >= targetTime) {
            clearInterval(alarmInterval);
            alert("Alarm is ringing..");
        }
    }, timeDifference);
}

setAlarm();

let personDetails = {
    id: 1,
    age: 22,
    name: "Swarnalatha"
};

let displayNames = function (name1, name2, name3, name4, name5, name6, name7) {
    console.log(this.name + " " + name1 + " " + name2 + " " + name3 + " " + name4 + " " + name5 + " " + name6 + " " + name7);
};

displayNames.call(personDetails, "Latha", "Abhi", "Spandhana", "Shiva", "Ram","Suma", "Pushpa");

let anotherPersonDetails = {
    id: 1,
    age: 22,
    name: "Ahalya"
};

let printNames = function (friend1, friend2, friend3, friend4, friend5) {
    console.log(friend1 + " " + friend2 + " " + friend3 + " " + friend4 + " " + friend5);
};

printNames.apply(anotherPersonDetails, ["Ram", "Abhi", "Swarna", "Shiva", "Pooja"]);

let morePersonDetails = {
    id: 1,
    age: 22,
    name: "Ahalya"
};

let showNames = function (group1, group2, group3, group4) {
    console.log(this.name + " " + group1 + " " + group2 + " " + group3 + " " + group4);
};

let boundFunction = showNames.bind(morePersonDetails, ["Shiva", "Ram", "Abhi"], ["Pooja", "Latha"], ["Swarna", "Spandhana"], [87393, 84398]);
boundFunction();
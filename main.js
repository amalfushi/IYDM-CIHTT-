var HOUR = 8;
var MINUTE = 20;
var PERIOD = "PM";
var timeString = "It's ";

if(MINUTE >= 30){
    timeString += "almost " + (HOUR+1);
} else{
    timeString += "just after " + HOUR;
}

if(PERIOD === "AM"){
    timeString += " in the morning.";
} else{
    timeString += " in the evening.";
}

console.log(timeString);
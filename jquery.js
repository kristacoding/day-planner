//Set all variables



//Set functions as needed

//Function started when I open broswer, set current date and time
var currentDateInfo = (moment().format('LLLL'));
$("#currentDay").append(currentDateInfo);

updateTime();

//

var currentTime = (moment().format('H'));

console.log(plannerTime);


function updateTime() {
    var plannerTime = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var currentTime = parseInt(moment().format('H'));
    console.log(currentTime)


    for (var i = 0; i < 10; i++) {
        console.log("hello")
        var thisTime = plannerTime[i]; 
        console.log(thisTime);

        if ( thisTime < currentTime) {
            $("#hour" + thisTime).addClass("past");

        }
        else if (thisTime > currentTime) {
            $("#hour" + thisTime).addClass("future");

        }
        else if (thisTime == currentTime) {
            $("#hour" + thisTime).addClass("present");


        }
        else {}
    }
}




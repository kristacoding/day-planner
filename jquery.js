//Set all variables



//Set functions as needed

//Function started when I open broswer, set current date and time
var currentDateInfo = (moment().format('LLLL'));
$("#currentDay").append(currentDateInfo);

updateTime();

//

var currentTime = (moment().format('H'));


function updateTime() {
    var plannerTime = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var currentTime = parseInt(moment().format('H'));
    console.log(currentTime)


    for (var i = 0; i < 10; i++) {
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

//--save user input to local storage

$(".saveBtn").on("click", function() {
    console.log("savebutton");
    var timeOfday = $(".hour").get();
    console.log(timeOfday);

    var textContent = $("textarea").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday)
    console.log(textContent);
});



//Set all variables



//Set functions as needed

//Function started when I open broswer, set current date and time
var currentDateInfo = (moment().format('LLLL'));
$("#currentDay").append(currentDateInfo);

updateTime();

//

var currentTime = (moment().format('H'));

function updateLocalStorage(){
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

}


function updateTime() {
    var plannerTime = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var currentTime = parseInt(moment().format('H'));
    console.log(currentTime)


    for (var i = 0; i < 10; i++) {
        var thisTime = plannerTime[i];
        console.log(thisTime);

        if (thisTime < currentTime) {
            $("#hour" + thisTime).addClass("past");

        }
        else if (thisTime > currentTime) {
            $("#hour" + thisTime).addClass("future");

        }
        else if (thisTime == currentTime) {
            $("#hour" + thisTime).addClass("present");


        }
        else { }
    }
}

//--save user input to local storage

$(".saveBtn").on("click", function () {
    console.log("savebutton");

    var timeOfDay = $(this).parent().attr("id");
    var textContent = $(this).siblings(".textarea").val();

    localStorage.setItem(timeOfDay, textContent);
    console.log(timeOfday);
    console.log(textContent);
});

$("9 AM").children("input").val(localStorage.getItem("9am"));

$("#hour10").children("input").val(localStorage.getItem("10am"));

$("#hour11").children("input").val(localStorage.getItem("11am"));

$("#hour12").children("input").val(localStorage.getItem("12pm"));

$("#hour13").children("input").val(localStorage.getItem("1pm"));

$("#hour14").children("input").val(localStorage.getItem("2pm"));

$("#hour15").children("input").val(localStorage.getItem("3pm"));

$("#hour16").children("input").val(localStorage.getItem("4pm"));

$("#hour17").children("input").val(localStorage.getItem("5pm"));





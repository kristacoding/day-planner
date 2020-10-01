$(function () {

    //Function when I open broswer, set current date and time
    var currentDateInfo = (moment().format('LLLL'));
    $("#currentDay").append(currentDateInfo);

    updateTime();

    //

    var currentTime = (moment().format('H'));

    function updateLocalStorage() {
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
        console.log(timeOfDay);
        console.log(textContent);
    });

    $("#9AM .textarea").val(localStorage.getItem("9AM"));
    $("#10AM .textarea").val(localStorage.getItem("10AM"));
    $("#11AM .textarea").val(localStorage.getItem("11AM"));
    $("#12PM .textarea").val(localStorage.getItem("12PM"));
    $("#1PM .textarea").val(localStorage.getItem("1PM"));
    $("#2PM .textarea").val(localStorage.getItem("2PM"));
    $("#3PM .textarea").val(localStorage.getItem("3PM"));
    $("#4PM .textarea").val(localStorage.getItem("4PM"));
    $("#5PM .textarea").val(localStorage.getItem("5PM"));
    $("#6PM .textarea").val(localStorage.getItem("6PM"));
})



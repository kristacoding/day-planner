//Set all variables



//Set functions as needed

//Function started when I open broswer, set current date and time
var currentDateInfo = (moment().format('LLLL'));
$("#currentDay").append(currentDateInfo);

updateTime; 

//

var currentTime = (moment().format('LT'));
console.log(currentTime);
var plannerTime = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];


function updateTime(){
if (parseInt(plannerTime) < currentTime){
    console.log("YAY");}
}


//Call function 

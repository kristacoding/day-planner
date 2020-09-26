# day-planner
Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours


WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

Function with if statments. Created variables for currentTime and plannerTime. Need to figure out how to get them on the same apples to apples. Something about Army time? I couldnt find the current time in hours, will it read the minutes? 

WHEN I click into a time block
THEN I can enter an event
    Used the input for this. might need to associate an idea with the imput text so that it then saved to local storage. 
    So input text would need to be a variable. 
    Does it need to change for each time? 

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
    Would need to do an on click for the saved button to save it in local storage. 
    SAve the PlannerTime and input varable. 

WHEN I refresh the page
THEN the saved events persist

Once its saved in local storage its always saved in local storage, right?

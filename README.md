## Overview

Create a simple calendar application using JQuery and local storage that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Description

Given starter HMTL and CSS, I was able to create a JavaScript code that allowed for the user to visually see which hours are still available to plan activities and save activities using local storage. 

First, I started by using [Moment.js](https://momentjs.com/) to set the current date and time at the top of the planner. Then I created the following time blocks using HTML and selecting the corresponding CSS elements to match the example. Finally, I worked on implementing the correct id to associated with JavaScript. 

To show which hours were past, present or future, I used the JavaScript and Moment.js. Moment.js tracks hours in military time, so I had to create an array based on military time. This array then goes through a for loop each time you open the page and will update according to the current time. 

After the planner is set with the correct HTML and colors, I focused on saving events to local storage. I added a function that works once you click the 'save' button, it will save the hour and written activity to local storage. In local storage, it will stay there each time the user enters the page. To target the correct object, I used the 'this' function from javascript which refers to the object that lies within the button. This way, I was easily able to save the correct elements to local storage. 

## Linked to finish application 
https://kristacoding.github.io/day-planner/

## Image
<img src="planner.png"></img>


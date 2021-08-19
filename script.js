// global variables
let scheduledHours = []
// assign variable for the current date from moment js (to be shown on currenDate element on html)
let currentDate = moment().format('dddd, MMMM Do')
console.log('today date: ' + currentDate);
// assign variable for the present hour from moment js
let currentHour = moment().hour()
console.log('current hour: ' + currentHour);

// populate the currentDay element on html with the current date
$('#currentDay').html(currentDate)
// document.getElementById('currentDay').textContent = currentDate




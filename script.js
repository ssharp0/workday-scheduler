// global variables
// array (empty) for scheduledHours for time blocks
let scheduledHours = []
// assign variable for the current date from moment js (to be shown on currenDate element on html)
let currentDate = moment().format('MMMM Do, YYYY, (h a)')
console.log('today date: ' + currentDate);
// assign variable for the present hour from moment js
let currentHour = moment().hour()
console.log('current hour: ' + currentHour);

// set hours for calendar start and end
let hourStart = 8
let hourEnd = 17

// workday for local storage to store notes/tasks
workDay = JSON.parse(localStorage.getItem('workDay')) || []

// populate the currentDay element on html with the current date
$('#currentDay').html(currentDate)
// document.getElementById('currentDay').textContent = currentDate

// create text areas (text blocks for each hour) for the planner. Start at 8 (8am) and loop until 17 (5pm)
for (let hourBlockInt = hourStart; hourBlockInt <= hourEnd; hourBlockInt++) {

 console.log(hourBlockInt);

 // format the hours from 8 to 17 into a time momemnt with hour and am/pm and push to an empty array
 scheduledHours.push(moment(hourBlockInt, 'ha').format('LT'));

 console.log(scheduledHours);

 // add/append to html body the time blocks (three columns total with time, text area, and save icon)
 $('#scheduleContainer').append(`
 <div class="row time-block" data-time="${hourBlockInt}">
  <div class="col-sm-1 time" id="time${hourBlockInt}">${moment(hourBlockInt, 'ha').format('LT')}</div>
  <div class="col-sm-10">
    <textarea type="text" id="plan${hourBlockInt}" class="form-control taskNote"></textarea>
  </div>
  <div class="col-sm-1 saveBtn material-icons"><i class="far fa-save fa-2x save-icon"></i></div>
 </div>
 `);
}

// function to convert the string text to integers for comparison later
const stringInteger = (timeString) => {
 switch (timeString) {
  // if key is this value then return value (integer to use for comparison)
  case '8:00 AM': return 8
  case '9:00 AM': return 9
  case '10:00 AM': return 10
  case '11:00 AM': return 11
  case '12:00 PM': return 12
  case '1:00 PM': return 13
  case '2:00 PM': return 14
  case '3:00 PM': return 15
  case '4:00 PM': return 16
  case '5:00 PM': return 17
 }
}

// // log the function to test - should return 16. Testing
console.log(stringInteger('4:00 PM'))


// assign variable for the current date from moment js (to be shown on currenDate element on html)
let currentDate = moment().format('MMMM Do, YYYY, (h a)')
console.log('today date: ' + currentDate);

// assign variable for the present hour from moment js - this is passed as an integer
let currentHour = moment().hour()
console.log('current hour: ' + currentHour);

// populate the currentDay element on html jumbotron display with the current date
$('#currentDay').html(currentDate)

// for each time block row (row time-block) determine if the time block is the current hour, previous hour, or future hour
$('.time-block').each(function () {

  // set hourBlock equal to the data-time attribute (8 - 17) for each time-block row and log output for testing confirmation
  let hourBlock = parseInt($(this).attr('data-time'));
  console.log(`hourBlock parse: ${hourBlock}`);

  // if the hourBlock (int) is equal to the currentHour (int) then remove the future/past classes and add present class (for color formatting - red)
  if (hourBlock === currentHour) {
    $(this).find('textarea').removeClass('future');
    $(this).find('textarea').removeClass('past');
    $(this).find('textarea').addClass('present');
  }
  // else if the hourBlock (int) is less than the currentHour (int) then remove the present/future classes and add past class (for color formatting - grey)
  else if (hourBlock < currentHour) {
    $(this).find('textarea').removeClass('future');
    $(this).find('textarea').removeClass('present');
    $(this).find('textarea').addClass('past');
  }
  // else if the hourBlock (int) is greater than the currentHour (int) then remove the preset/past classes and add future class (for color formatting - green)
  else if (hourBlock > currentHour) {
    $(this).find('textarea').removeClass('present');
    $(this).find('textarea').removeClass('past');
    $(this).find('textarea').addClass('future');
  }
})

// event listener when save button (on each time block row) is clicked - save items to local storage
$('.saveBtn').on('click', function() {
  event.preventDefault()

  // variables for local storage to set the timeHour from the data-time attr in the parent element (i.e. 8 to create plan8) and grab the textarea value (user typed notes)
  let timeHour = 'plan'+$(this).parent().attr('data-time')
  let taskNoteText = $(this).parent().find('textarea').val();

  // console logging for testing
  // console.log(timeHour);
  // console.log(taskNoteText);
  
  // set the items of timeHour and taskNoteText to local storage so it can be viewed (i.e. key=plan9 and value=user text)
  localStorage.setItem(timeHour, taskNoteText)
})

// for each time block (row time-block)...
$('.time-block').each(function() {

  // assign idTime as the plan+data-time attribute (i.e. plan8) and get the item from local storage
  let idTime = 'plan'+$(this).attr('data-time')
  let schedule = localStorage.getItem(idTime);

  // log for testing
  // console.log(schedule);

  // if the schdule is not null then find the textarea element in the time-block row and grab its value (user text content)
  if (schedule !== null) {
    $(this).find('textarea').val(schedule);
  }
})

// for user to clear local storage and refresh the page
$('.clearStorageBtn').on('click', function() {
  localStorage.clear();
  location.reload();
})

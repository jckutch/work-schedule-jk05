// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDate = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').html(currentDate);
var currentTime = dayjs().format('HH');
  

$(document).ready(function(){

  $('.saveBtn').on('click', function(){
    var time = $(this).parent().attr('id');
    var event = $(this).siblings('.description').val();
    
    localStorage.setItem(time, event);
  })

  $('#time-9 .description').val(localStorage.getItem('time-9'));
  $('#time-10 .description').val(localStorage.getItem('time-10'));
  $('#time-11 .description').val(localStorage.getItem('time-11'));
  $('#time-12 .description').val(localStorage.getItem('time-12'));
  $('#time-13 .description').val(localStorage.getItem('time-13'));
  $('#time-14 .description').val(localStorage.getItem('time-14'));
  $('#time-15 .description').val(localStorage.getItem('time-15'));
  $('#time-16 .description').val(localStorage.getItem('time-16'));
  $('#time-17 .description').val(localStorage.getItem('time-17'));

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    function boxColor(){
      
      $('.time-block').each(function(){

        var timeBlock = parseInt($(this).attr('id').split('time-')[1]);
     
        if(currentTime == timeBlock){
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("present");

        }else if (currentTime > timeBlock){
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");

        }else{
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
          
        }  
      })
    }
  
    boxColor();

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

   
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page
  });
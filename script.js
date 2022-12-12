// Set-up current date in header and provides time for calender.
var currentDate = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').html(currentDate);
var currentTime = dayjs().format('HH');
  

$(document).ready(function(){

  // Saves input and allows access to local storage
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

// Applies past, present and future tense to calendar boxes, relative to current time
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

 });
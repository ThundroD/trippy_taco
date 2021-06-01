$(document).ready(function(){
    alert("Welcome to Trippy Taco!");//Alert Welcome when page is loaded
    $('body').css('background-color','#5C755E').delay(3000);// Change backgorund color to catcus green       
    });

//Change Styling of first paragraph
$(function p1Styling(){
    $('p:first').css({ //select first paragraph and declare css
        'font-family': 'Trattatello', //change font-family
        'color': '#E7552C', //change color
        'font-size': '25px' //change font size
    })
});

//Fade out first picture when clicked
    $('#storyimg').click(function(){ //select image's id, click function
        $this = $(this) //create variable this
        $this.fadeOut('slow'); //fade this out slowly
    });

//Accordion
$(function cardBodyStyle(){ //this styles card bodies
    $('.card-body').css({
        'display': 'none',
        'margin': '30px',
    })
    });

$('.card').hover(function(){ //select card div with class .card create a hover function
    let index = $(this).index() //create index
    let currCard = $('.card').eq(index) 
    let currBody = $(`.card:eq(${index}) .card-body`) //Makes the body of the current card equal to the card
    if (currBody.css('display')== 'block'){ //if a card has display block slide up
        currBody.slideUp(1000);
    } else{ // if not card body slides up, current body slides down.
        $('.card-body').slideUp(1000);
    currBody.slideDown(1000);
        }
   })

//Slide Effect

function mySlideColors(){ //create JS function with JQuery attributes. If you try to make JQuery function setTimeOut does not work, neither does delay()
    for(i=0;i<4;i++){ //action will continue 4 times
    $('*').slideUp(1000).slideDown(1000).css('background-color','pink').delay(1000);//Sliding elements up and down and changing background color pink
    }
};
//Setting a timeout function so that the SlideColors background color doensnt overide earlier background color of catcus green
setTimeout(mySlideColors,5000);
  
// Button push Fade in and out 3 sec

//function to fade picture in and out
let $fadeOut = $("#fadeOut"); //create variable for button with tage name fadeOut

$fadeOut.on('click',function(){ // onclick function to fade out picture for a duration of 3 s if clicked 
$("#trippyfood").fadeOut(3000);
});

let $fadeIn = $("#fadeIn");

$fadeIn.on('click',function(){//create variable for button with tag name fadeIn
$("#trippyfood").fadeIn(3000);// onclick function to fade in picture for a duration of 3 s if clicked 
});

let $stop = $("#stopFade"); //create variable for button with tag name stopFade

$stop.on('click',function(){// onclick function stop fade in or fade out
$("#trippyfood").stop();


});




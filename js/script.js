// $(document).ready(function(){

//     // Fill in the blanks!
//     $('title').animate({ top: '+=100px'}, 1000 );
// });

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//     }

$(document).ready(function(){

    $("#button").click( function(){
    	$('#demo').slideUp();
    });

    $('#flora_and_fauna').hide().delay(100).fadeIn(800);
    $('#collective').hide().delay(700).fadeIn(850);


});
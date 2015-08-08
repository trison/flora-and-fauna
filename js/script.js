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


    $('#name').hide().delay(150).fadeIn(800);

     $('body').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
         console.log('Down');
     }else {
         //scroll up
         console.log('Up');
     }
 });

});
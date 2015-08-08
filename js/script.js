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

    $('#name').hide().delay(150).fadeToggle(800);

    var scroll_pos = 0;
    var menu_changed = false;
    var $header = $('.header');
    var $ul_li_a = $('.ul li a');


    //change menu style once scrolled down enough
    $('body').on('mousewheel', function(){
    	scroll_pos = $(this).scrollTop();
    	console.log(scroll_pos);
    	if(scroll_pos >= 200 && !menu_changed){
    		$header.css({'background-color': 'gray'});
    		//$header.css("opacity", "0.8");
    		$ul_li_a.css({'color': 'black'});
    		$('#name').fadeToggle(350);
    		menu_changed=true;
    	}
    	else if(menu_changed && scroll_pos < 200){
    		console.log("here");
    		$('#name').delay(150).fadeIn(800);
    		$header.css({'background-color': ''});
    	//	$header.css("opacity", "1");
    		
    		menu_changed=false;
    	}
    });
});
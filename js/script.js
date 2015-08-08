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
    var title_changed, menu_changed = false;
    var $header = $('.header');
    var $ul_li_a = $('.ul li a');


    //change menu style once scrolled down enough
    $('body').on('mousewheel', function(){
    	scroll_pos = $(this).scrollTop();
    	console.log(scroll_pos);
    	if(scroll_pos >= 200 && !title_changed){
    		
    		$('#name').fadeToggle(350);
    		title_changed=true;
    	}
    	else if(scroll_pos >= 625 && !menu_changed){
			$header.css({'background-color': 'gray'});
    		$ul_li_a.css({'color': 'black'});
    		menu_changed=true;
    	}
    	else if(menu_changed && scroll_pos < 625){
    		$header.css({'background-color': ''});
    		menu_changed=false;
    	}
    	else if(title_changed && scroll_pos < 200){
    		$('#name').delay(150).fadeIn(800);
    		title_changed=false;
    	}
    });
});
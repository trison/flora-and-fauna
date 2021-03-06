$(document).ready(function(){

	var scroll_pos = 0;
    var title_changed, menu_changed = false;
    var $header = $('.header');
    var $pic1 = $('.pic1');
    var $pic2 = $('.pic2');
    var $pic3 = $('.pic3');
    var $social = $('.social');
    var FIREFOX = /Firefox/i.test(navigator.userAgent);

    //These transitions not working in Firefox. Try addClass later
    if (FIREFOX) {
  		$header.css({'background-color': 'gray'});
  		$pic1.css({'opacity': '1'});
  		$pic2.css({'opacity': '1'});
  		$pic3.css({'opacity': '1'});
	}
 
    $('#line').hide().delay(150).toggle(800);
    $('#intro').hide().delay(100).fadeToggle(800);
    $header.hide().delay(200).fadeToggle(800);

 	$social.hover(
    	function(){$(this).css({'color': 'orange'})},
    	function(){$(this).css({'color': 'white'})}
    );

    //change styles during scrolling
    $('body').on('mousewheel', function(){
    	scroll_pos = $(this).scrollTop();
    	console.log(scroll_pos);

    	//hide intro text
    	if(scroll_pos >= 250 && !title_changed){
    		$('#intro').fadeToggle(350);
    		$('#line').fadeToggle(350);
    		title_changed=true;
    	}
    	//colour header background
    	else if(scroll_pos >= 745 && !menu_changed){
			$header.css({'background-color': 'gray'});
    		menu_changed=true;
    	}
    	//clear header background
    	else if(menu_changed && scroll_pos < 745){
    		$header.css({'background-color': ''});
    		menu_changed=false;
    	}
    	//show intro text
    	else if(title_changed && scroll_pos < 250){
    		$('#intro').delay(150).fadeIn(800);
    		$('#line').delay(150).toggle(350);
    		title_changed=false;
    	}
    	//fade in pictures
    	else if(scroll_pos > 350){
    		$pic1.css({'opacity': '1'});
    		$pic2.delay(200).queue(function (next) { 
			    $(this).css({'opacity': '1'}); 
			    next(); 
			 });
    		$pic3.delay(300).queue(function (next) { 
			    $(this).css({'opacity': '1'}); 
			    next(); 
			 });
    	}
    });
});
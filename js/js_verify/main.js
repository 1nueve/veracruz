$(document).ready(function() {	

		//Get the A tag
		var id = '#bgMod1';

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#bgMod').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#bgMod').fadeIn(1000);	
		$('#bgMod').fadeTo("slow",0.8);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
        var plus = $(window).scrollTop(); 
		//Set the popup window to center
        //console.log( $(id).height() );
                
		$(id).css('top',  (winH/2-$(id).height()/2)-160);
		$(id).css('left', winW/2-$(id).width()/2-50);
	
		//transition effect
		$(id).fadeIn(2000); 
              
	
});
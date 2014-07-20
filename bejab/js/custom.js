jQuery(document).ready(function($){

	"use strict";
// --------------------------------------------------------
//	Easytabs
// --------------------------------------------------------

	var wrap = $('#wrap');
	
	wrap.easytabs({
		animate			: true, //Makes content panels fade out and in when a new tab is clicked.
		updateHash		: false, //Tells easyTabs whether or not to update the browser window's URL hash
		animationSpeed	:250, //Controls the speed of the fading effect if animate: true.
		tabs			:"#menu > .tabs > li",
		tabActiveClass	:'active'
	});
	
// --------------------------------------------------------
//	Google Map
// --------------------------------------------------------

	var $map = $('#map'),
		$tabContactClass = ('tab-contact'),
		$address = '20 Endell St, London'; //address for google map
	
	var skills = $('#skills'),
		work = $('#work');
	
	wrap.bind('easytabs:after', function(evt,tab) {
		skills.mCustomScrollbar('update');
		work.mCustomScrollbar('update');
		if ( tab.hasClass($tabContactClass) ) {
			$map.gMap({
				address: $address,
				zoom: 17,
				markers: [
					{ 'address' : $address }
				]
			});
		}
	});	
	
// --------------------------------------------------------
//	Mail form
// --------------------------------------------------------
	
	var submit = $('#submit');
	
	submit.click(function(){ // when the button is clicked the code executes

        var error = false; // we will set this true if the form isn't valid
		var ths = $(this);
		var input_name = $('input#name');
		
        var name = input_name.val(); // get the value of the input field
        if(name == "" || name == " ") {
            error = true; // change the error state to true
        }
		
		var input_email = $('input#email');
		
        var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
        var email = input_email.val(); // get the value of the input field
        if (email == "" || email == " ") { // check if the field is empty
            error = true;
        }else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
            error = true;
        }
		
        if(error == true) {
			ths.text("Check your input");
            return false;
        }
		
		var form = $('#ajax-form');
		var data_string = form.serialize(); // Collect data from form
		
		$.ajax({
			type: "POST",
			url: form.attr('action'),
			data: data_string,
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					ths.text("Timeout");
				}
				else {
					ths.text("Error");
				}
			},
			success: function() {
				ths.text("Message sent");
			}
		});  
        return false; // stops user browser being directed to the php file
    }); // end click function
	
});

jQuery(window).load(function(){

	"use strict";
// --------------------------------------------------------
//	Fade appearing
// --------------------------------------------------------
	
	var fade = $('.fade-item');
	
	fade.showdelay(150);
	
// --------------------------------------------------------
//	Flexslider
// --------------------------------------------------------

	var slider = $('.flexslider');
	slider.flexslider({
		animation: "slide",
		prevText: "Previous", 
		easing: "swing",
		controlNav: false,
		slideshowSpeed: 5000,
		animationSpeed: 600,
		animationLoop: true
	});
	
// --------------------------------------------------------
//	Scrollbars for resume
// --------------------------------------------------------
	
	var skills = $('#skills'),
		work = $('#work');
	
	skills.mCustomScrollbar();
	work.mCustomScrollbar();

// --------------------------------------------------------
//	Fancybox for portfolio
// --------------------------------------------------------
	
	var wrap = $('#wrap');
	
	wrap.find('.portfolio').fancybox({
		'transitionIn'		:	'fade',
		'transitionOut'		:	'fade',
		'speedIn'			:	300, 
		'speedOut'			:	300, 
		'overlayOpacity'	:   0.5,
		'titlePosition'		:	'over'
	});
	
});
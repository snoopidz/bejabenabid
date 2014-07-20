(function($){
	$.fn.showdelay = function(i){
		var delay = 0;
		var ths;
		return this.each(function(){
			ths = $(this);
			ths.css( "top" , "-=15" );
			ths.delay(delay).show().animate({ "opacity": 1.0, "top":0 }, 300 );
			delay += i;
		});
	};
})(jQuery);
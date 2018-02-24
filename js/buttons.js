$(document).ready(function(){

jQuery(function(){
         jQuery('#showall').click(function(){
               jQuery('.targetDiv').show();
        });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
				});
});
});

$(document).ready(function(){
	// Smooth scrolling using jQuery easing
	//	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	$('.showSingle').click(function(){
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
});

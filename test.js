/**
 * Pixelciego JavaScript Functions
 * http://www.pixelciego.com
 *
 */
 
var PXC = {

	elements: {},
	animations: {},
	params: {
		isReady: false,
		isBusy: false
	},
	
	init: function(){
		
		$('body').addClass('ready');
		
	
		$('.collapsable').each(function(){
			var eHeight = $(this).outerHeight(true);
			var dHeight = $(document).height();
			var wHeight = window.innerHeight || $(window).height(); 
			
			
			$(this).data('fullHeight', eHeight);
			
			if(dHeight - eHeight > wHeight){
				$(this)
					.css('height', $(this).children('header').outerHeight(true))
					.addClass('collapsed');
			}
		});
	
		$('.collapsable header').click(function(){
			var section = $(this).parent();
			if(section.hasClass('collapsed')){
				section.animate({
					'height': section.data('fullHeight')
				}, 'slow', 'easeInOutCubic')
					.removeClass('collapsed')
					.find('canvas').each(function(){
						$(this).data('animation').restart()
					});
					
				PXC.smoothScrollTo($(this));
			}else{
				section.animate({
						'height': $(this).outerHeight(true)
					}, 'normal', 'easeInOutCubic')
						.addClass('collapsed');
			}
		});
		
		
				
		PXC.smoothScroll();
		PXC.ready();
	},
	
		
		PXC.navigator();
	},
	ready: function(){
		$(document).trigger('pxcReady');
		PXC.isReady = true;
	},
	
	smoothScroll: function(){
		if(window.location.hash != '' && window.location.hash != '#'){
			$('html:not(:animated),body:not(:animated)').animate({
				scrollTop: $(window.location.hash).offset().top
			});
		}
		
		$('.scroll').click(function(evt){
			evt.preventDefault();
			
			$('html:not(:animated),body:not(:animated)').animate({
				scrollTop: $($(this).attr('href')).offset().top
			});
		});
	},
	
	smoothScrollTo: function(selector, updateUri, onComplete){
		
		// [!] OJO FIX FEO
		/*$('html:not(:animated),body:not(:animated)').animate({
			scrollTop: $(selector).offset().top
		}, onComplete);*/
		
		if($.browser.webkit){
			$('body:not(:animated)').animate({
				scrollTop: $(selector).offset().top
			}, onComplete);
		}else{
			$('html:not(:animated)').animate({
				scrollTop: $(selector).offset().top
			}, onComplete);
		}
		
		if(updateUri)
			window.location.hash = $(selector).attr('id');
	}
};
 
$(document).ready(function(){
	PXC.init();
});

$( document ).ready(function() {
//*****************************
//Click to show menu
var top = $('html').offset().top;

/*$('#menu').css({
	'position': 'absolute',
	'top':top
});*/

/*$('.resume-btn').click(function(e){
		alert('hide!');
	if(('#experience').hasClass('collapsed'))
		{
			$('#resume').toggle();
			alert('hide!');
		}
	});*/
$('.resume-btn').click(function(e){
$('#resume').toggle();

});


$('.menu').click(function(e){ 
	if( $('#selection').css('display') == 'none')
	{
			$('#selection').css(
				{
					'display': 'block',
					'position': 'fixed',
					'width': '100%',
					'margin': '0 auto',
					'border': '1px solid red',
					'height': '4.5em'
										
				});

				$('.resume-btn').css({
					'pointer-events': 'none'
				}); //display', 'block');

			$('.cube').css(
				{
					'position': 'relative',
					'padding': '0.02em',
					'padding-top': '1em',

					
										
				});
			$('#menuContainer').css(
			{
				'position': 'fixed',
				'top': top,
				'z-index': '10',
				'background-color': 'white',
				'margin': '0 auto'

			});
			return;
	}


	if( $('#selection').css('display') == 'block')
	{
			$('#selection').css('display', 'none');
			return;
	}

		});

//*****************************
//Previous click menu and append di
/*
var $green = $('<div id="green">Test</div>');
var $cream = $('<div id="cream"> I AM SCREAAM </div>');
var $palepink = $('<div id="palepink"> I AM SCREAAM </div>');
var $purple = $('<div id="purple"> I Aammm purple </div>');
var $pink= $('<div id="pink"> I Aammm pink </div>');
var $blue= $('<div id="blue"> I Aammm baby blue </div>');

$(".cube").click(function() {

	$($green).hide();
	$('div:nth-child(6n)').replaceWith($green);
	$($green).fadeIn('slow');
});

$(".cubecream").click(function() {

	$($cream).hide();
	$('div:nth-child(6n)').replaceWith($cream);
	$($cream).fadeIn('slow');
});


$(".cubepalepink").click(function() {

	$($palepink).hide();
	$('div:nth-child(6n)').replaceWith($palepink);
	$($palepink).fadeIn('slow');
});


$(".cubepurple").click(function() {

	$($purple).hide();
	$('div:nth-child(6n)').replaceWith($purple);
	$($purple).fadeIn('slow');
});

$(".cubepink").click(function() {

	$($pink).hide();
	$('div:nth-child(6n)').replaceWith($pink);
	$($pink).fadeIn('slow');
});

$(".cubeblue").click(function() {

	$($blue).hide();
	$('div:nth-child(6n)').replaceWith($blue);
	$($blue).fadeIn('slow');
});*/



});

var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
	,fadeUntil=700 // 200px scroll or more will equiv to 0 opacity
	,fading = $('.fading');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css({'opacity':opacity, 'border':'none', 'text-decoration': 'none'});
});

// Smooth ScrollTo Code

$(".scroll").click(function(event){
	event.preventDefault();
	//calculate destination place
	var dest=0;
	if($(this.hash).offset().top > $(document).height()-$(window).height()){
	}else{
		dest=$(document).height()-$(window).height();
		dest=$(this.hash).offset().top;
	}
	//go to destination
	$('html,body').animate({scrollTop:dest}, 1000,'swing');
});


//$(document).ready(function(){
	
//	// Reveal after scrolling  
//	$(window).bind('scroll', function(){
//		$(".trigger").toggle($(this).scrollTop() > 200);
//	});
//	
//});


$(window).bind('scroll', function(){
	if($(this).scrollTop()<100){
		//$(".menu").hide();


	}
	else if($(this).scrollTop() < 600) {
		  $(".menu").show();
    }
});


$(window).bind('scroll', function(){
    if($(this).scrollTop() > 600) {
        $(".trigger").fadeIn('slow');
        $(".hideclick").fadeIn('slow');
    }
    else if($(this).scrollTop() < 600) {
    	$(".trigger").hide();
    }
});

$(document).ready(function(){        
    $(".trigger").hide();
    $(".menu").hide();

	// When p.hide is clicked, run the hideDiv function, use this to target itself		
	$('.hideclick').click(function()
	{
		$.fn.hideDiv(this);
	});
	
	// fade in containing div
	$("#fading").fadeIn('slow');

var wWidth = $(window).width() || window.innerWidth; 
	

	/*$(window).resize(function() {
		if( ($(window).width()) < 600){
			$('.resume').css('min-height', '60em')
		
	}
	});*/



	
	
});

var PXC = {

	elements: {},
	animations: {},
	params: {
		isReady: false,
		isBusy: false
	},
	
	init: function(){
		
		$('body').addClass('ready'); // util para activar animaciones CSS3
		
		}
	};	
// When called, hides all divs using the class name .showhide
$.fn.hideDiv = function(e)
{
	$(e).fadeOut('fast');
}




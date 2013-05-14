$( document ).ready(function() {

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
});



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
    fading.css('opacity',opacity);
});

// Smooth ScrollTo Code

$(".scroll").click(function(event){
	event.preventDefault();
	//calculate destination place
	var dest=0;
	if($(this.hash).offset().top > $(document).height()-$(window).height()){
		dest=$(document).height()-$(window).height();
	}else{
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

	// When p.hide is clicked, run the hideDiv function, use this to target itself		
	$('.hideclick').click(function()
	{
		$.fn.hideDiv(this);
	});
	
	// fade in containing div
	$("#fading").fadeIn('slow');
	
	
});

// When called, hides all divs using the class name .showhide
$.fn.hideDiv = function(e)
{
	$(e).fadeOut('fast');
}




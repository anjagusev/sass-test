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


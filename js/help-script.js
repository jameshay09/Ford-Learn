// JavaScript Document

$(document).ready(function() { //this loads doc first ----->
	$('.close').click(function(){
		$('.overlay').fadeOut(600);
	});
	
	$('.one').click(function(){
		$('.q1').fadeIn(600);
		$('.quest-link').hide();
	});
	
	$('.two').click(function(){
		$('.q2').fadeIn(600);
		$('.quest-link').hide();
	});
	
	$('.three').click(function(){
		$('.q3').fadeIn(600);
		$('.quest-link').hide();
	});
	
	
	$('.four').click(function(){
		$('.q4').fadeIn(600);
		$('.quest-link').hide();
	});
	
	$('.five').click(function(){
		$('.q5').fadeIn(600);
		$('.quest-link').hide();
	});
	
	$('.six').click(function(){
		$('.q6').fadeIn(600);
		$('.quest-link').hide();
	});
	
	$('.seven').click(function(){
		$('.q7').fadeIn(600);
		$('.quest-link').hide();
	});
	
	$('.close').click(function(){
		$('.quest-link').fadeIn(600);
	});
	
	

}); //<------- closes document ready
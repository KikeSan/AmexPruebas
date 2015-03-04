$(document).ready(function(){
	$simpleButtonImg = $('.simpleButtonImg');
	$base = $simpleButtonImg.find($('.base'));
	$over = $simpleButtonImg.find($('.over'));
	$active = $simpleButtonImg.find($('.active'));

	$simpleButtonImg.hover(function(){
		TweenMax.to($(this).find($over), 0.32, {css:{opacity:1}})
	}, function(){
		TweenMax.to($(this).find($over), 0.32, {css:{opacity:0}})
	});

	$simpleButtonImg.click(function(){
		TweenMax.to($active, 0.32, {css:{opacity:0}})
		TweenMax.to($(this).find($active), 0.32, {css:{opacity:1}})
	});
})
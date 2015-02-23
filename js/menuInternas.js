//API Youtube
$(document).ready(function(){

	var videoFondo = document.getElementById("videoFondo");
	var $html = $('html');

	var $menu = $('.reels');
	var $opc = $menu.find($('.reel'));

	$lugares = $('.lugares');
	$lugar = $lugares.find($('.lugar'));

	$lugar.hover(function(){
		TweenMax.to($(this), .32, {css:{opacity:0.6}});
		TweenMax.to($(this), .32, {css:{top:10}});
	}, function(){
		TweenMax.to($(this), .32, {css:{opacity:1}});
		TweenMax.to($(this), .32, {css:{top:0}});
	});

	jQuery.each($opc, function( i, val ) {
		$me = $(this);
		$me.find('.equis').css('display','none');
		$me.find('.flecha').css('display','block');

		if ($me.attr('status') == 'nulo') {
			$me.find('.equis').css('display','block');
			$me.find('.flecha').css('display','none');
			$me.find('span').css('display','none');
		}
		if ($me.attr('status') == 'true') {
			TweenMax.to($me, 0.32, {css:{width:230, 'margin-left':0}});
			TweenMax.to($me.find($('span')), 1, {css:{opacity:1}});
			$me.find('.equis').css('display','none');
			$me.find('.flecha').css('display','none');
			$me.find('span').css('display','block');
		};
	});

	$opc.hover(function(){
		$me = $(this);
		$ac = 70;
		$ao = 160;
		if ($me.attr('status') == 'true' || $me.attr('status') == 'nulo') {
			//$me.find('equis').css('display','block');
		}else{
			$me.find($('.flecha')).css('display','none');
			TweenMax.to($me, 0.32, {css:{width:230, 'margin-left':0}});
			TweenMax.to($me.find($('span')), 1, {css:{opacity:1}});
		};
	},function(){
		jQuery.each($opc, function( i, val ) {
			if ($me.attr('status') == 'true' || $me.attr('status') == 'nulo') {
				$me.find('equis').css('display','block');
			}else{
				$me.find($('.flecha')).css('display','block');
				TweenMax.to($me, 0.32, {css:{width:70, 'margin-left':160}});
				TweenMax.to($me.find($('span')), 0.16, {css:{opacity:0}});
			};
		});
	});
}); //aqui acaba el ready


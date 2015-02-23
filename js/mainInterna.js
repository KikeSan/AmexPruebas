var player;

function onYouTubePlayerAPIReady() {
	player = new YT.Player('elVideo', {
		events: {
		 'onReady': onPlayerReady,
		 'onStateChange': onStateChange
		}
	});
}

function onStateChange(event) {
    switch(event.target.getPlayerState()){
    	case -1: //(unstarted, sin empezar)
    		//alert("unstarted, sin empezar");
    		break;
		case 0: // (ended, finalizado)
			//alert("ended, finalizado");
    		break;
		case 1: // (playing, en reproducción)
			//alert("playing, en reproducción");
    		break;
		case 2: // (paused, en pausa)
			//alert("paused, en pausa");
    		break;
		case 3: // (almacenando en búfer)
			//alert("almacenando en búfer");
    		break;
		case 5: // (video cued, video en cola)
			//alert("video cued, video en cola");
    		break;
    }
}

function onPlayerReady(event) {
	event.target.playVideo();

	var playButton = document.getElementById("botonPlay");
	playButton.addEventListener("click", function(e) {
		e.preventDefault();
		player.seekTo(0);
		player.playVideo();
	});

	var pauseButton = document.getElementById("cerrarVideo");
	pauseButton.addEventListener("click", function() {
		player.pauseVideo();
	});
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function(){
	var $html = $("html");

	//alto de LI del menu contextual
	var $altoLi = $('.listado li').height();
	$('.listado > li > a').css('line-height',$altoLi + 'px');

	/*var $altoImg = $('.sitios li a img').height();
	$('.sitios > li').css('height',$altoImg + 'px');*/
	
	resizeME();

	function resizeME(){
		$(window).resize(function() {
			var $altoLi = $('.listado li').height();
			$('.listado > li > a').css('line-height',$altoLi + 'px');

			
			/*var $altoImg = $('.sitios li a img').height();
			$('.sitios > li').css('height',$altoImg + 'px');*/
		});
	}

	$("#botonPlay").click(function(){

		$('body, html').addClass('colapsa');
		videoFondo.pause();		
        var $altoVisor = $('.visorVideo').height();
        $('.visorVideo').css('margin-top', -($altoVisor / 2) + 'px');

		$('.lightbox').css('display','block');
		TweenMax.to($('.lightbox'), 1, {css:{'opacity': 0.9}, onComplete:function(){
			$('.visorVideo').css('display','block');
		}});
	});

	$(".lightbox").click(function(){
        $('body, html').removeClass('colapsa');
        videoFondo.play();
        player.pauseVideo();
		player.seekTo(0);
        $('.visorVideo').css('display','none');
		TweenMax.to($(this), 1, {css:{'opacity': 0}, onComplete:function(){
			$('.lightbox').css('display','none');
		}});
	});

	$.each( $(".listado li"), function( key, value ) {
		var $color = $(this).attr("color");
		$(this).css("background-color", $color);
	});

	$(".abrirMenu").click(function(){
		$html.toggleClass('open-slider');
		$('body, html').toggleClass('colapsa');
		$(".openM").toggleClass('openMenu');
	});

	girarIcono();

	function girarIcono(){
		TweenMax.to($('.warning > img'), 1, {css:{rotation:90}, yoyo:true, repeat:3, delay:1.5, onComplete:function(){
			girarIcono();			
		}
		});
	}
});


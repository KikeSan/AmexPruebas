//API Youtube
var player;

$(document).ready(function(){

    $('.viewVideo').click(function() {
        var $anchoVideo = $('.visorVideo').height();
        $('.visorVideo').css('margin-top', -($anchoVideo / 2) + 'px');
        $('.lightBox').css('display', 'block');
        TweenMax.to($('.lightBox'), 2, {
            css: { opacity: 0.9 },
            onComplete: function() {
                $('.visorVideo').css('display', 'block');
            }
        });
    });

    $('.lightBox').click(function() {
        $('.visorVideo').css('display', 'none');
        TweenMax.to($('.abrirMenu'), 0.25, {css: { opacity: 1 }});
        TweenMax.to($('.conteMenu'), 0.35, {css: { left: -350 }, ease:Power1.easeOut});
        TweenMax.to($(this), 0.35, {
            css: { opacity: 0 }, ease: Power3.easeOut,
            onComplete: function() {
                $('.lightBox').css('display', 'none');
            }
        });
    });

    $('#btnConoce').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    
    $('#btnInicio').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    $('#btnInicio').click(function() {
        window.location.href = '#home';         
        TweenMax.to($('.menuDerecha'), 0.5, {css: { right: -120 }, ease:Power1.easeOut});
        
    });
    /************** BOTONES PRINCIPALES ****************/
    
    //imagen 1 ****
    $('#cat_caminar').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    
    $('#cat_caminar').click(function() {
        irInterna(1);
    });
    
    //imagen 2 ****
    $('#cat_bailar').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    
    $('#cat_bailar').click(function() {
        irInterna(2);
    });
    
    //imagen 3 ****
    $('#cat_volar').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    
    $('#cat_volar').click(function() {
        irInterna(3);
    });
    
    
    function irInterna(op){
        $('.fondoSection').css('background-image', 'url(img/wall'+op+'___.jpg)');
        window.location.href = '#perfiles'; 
        
        TweenMax.to($('.menuDerecha').find($('div p')), 0.5, {css:{opacity:0}});
        TweenMax.to($('.menuDerecha'), 0.5, {css: { right: 60 }, delay:0.8, ease:Power1.easeOut});
        
        TweenMax.to($('.menuDerecha div:first-child #activado'), 0.5, {css:{opacity:1}});
        TweenMax.to($('.menuDerecha div:last-child #activado'), 0.5, {css:{opacity:0}});
        
        $('.menuDerecha div:first-child i').hover(function(){   
                document.body.style.cursor='pointer'; 
                TweenMax.to($('.menuDerecha > div:first-child p'), 0.4, {opacity:1, ease:Expo.easeOut});
                
            }, function(){    
                document.body.style.cursor='default';   
                TweenMax.to($('.menuDerecha > div:first-child p'), 0.4, {opacity:0, ease:Expo.easeOut});
            })
        //-------------------------------------------------------
        $('.menuDerecha div:last-child i').hover(function(){   
                document.body.style.cursor='pointer'; 
                TweenMax.to($('.menuDerecha > div:last-child p'), 0.4, {opacity:1, ease:Expo.easeOut});
                
            }, function(){    
                document.body.style.cursor='default';   
                TweenMax.to($('.menuDerecha > div:last-child p'), 0.4, {opacity:0, ease:Expo.easeOut});
            })
        $('.menuDerecha div:last-child i').click(function() {
            irVida(op)
        }); 
        
        //Boton circular para bajar *******************************************************************************
        
        $('.botonBajar').click(function() {
            irVida(op)
        });    
        $('.botonBajar').hover(function(){   
                $me = $(this);
                TweenMax.to($me, 0.4, {backgroundColor:"#a0a0a0", opacity:0.5, scale:1.2, ease:Back.easeOut});
                TweenMax.to($me.find('#flecha2'), 0.4, {opacity:1, ease:Expo.easeOut});
            }, function(){    
                $($me).css('backgroundColor', 'rgba(160, 160, 160, 0)');
                TweenMax.to($me, 0.4, {scale:1, ease:Back.easeOut});
                TweenMax.to($me.find('#flecha2'), 0.4, {opacity:0, ease:Expo.easeOut});
            })  
    }
    function irVida(opc){
        $('.fondoVida').css('background-image', 'url(img/vida'+opc+'.jpg)');
        window.location.href = '#vida';
        
        TweenMax.to($('.menuDerecha').find($('div p')), 0.5, {css:{opacity:0}});
        
        TweenMax.to($('.menuDerecha div:first-child #activado'), 0.5, {css:{opacity:0}});
        TweenMax.to($('.menuDerecha div:last-child #activado'), 0.5, {css:{opacity:1}});
        
//        $('.menuDerecha div:last-child i').prop('disabled',true);
        TweenMax.to($('.menuDerecha').find($('div:first-child p')), 0, {css:{opacity:0}});
        $('.menuDerecha div:first-child i').hover(function(){   
                document.body.style.cursor='pointer'; 
                TweenMax.to($('.menuDerecha > div:first-child p'), 0.4, {opacity:1, ease:Expo.easeOut});
                
            }, function(){    
                document.body.style.cursor='default';   
                TweenMax.to($('.menuDerecha > div:first-child p'), 0.4, {opacity:0, ease:Expo.easeOut});
            })
        
        $('.menuDerecha div:first-child i').click(function() {
            irInterna(opc)
        }); 
    }
    
    /**************** Animacion Menu *******************/
    $('.abrirMenu').hover(function(){
                document.body.style.cursor='pointer';
			}, function(){
                document.body.style.cursor='default';
			})
    $('.abrirMenu').click(function() {
        TweenMax.to($('.conteMenu'), 0.35, {css: { left: 0 }, ease:Power1.easeOut});
        TweenMax.to($(this), 0.1, {css: { opacity: 0 }});
        $('.lightBox').css('display', 'block');
        TweenMax.to($('.lightBox'), 0.45, {css: { opacity: 0.6 }, ease:Power3.easeOut});
    });
    /***************************************************/

	var $widthDevice = $('body').width();
	var $categorias = $('#section0').find($('.categorias'));
	var $cat = $categorias.find($('.cat'));
	var $irA = $cat.find($('img'));

	if ($widthDevice > 1190) {

        $time = 0.64;
        TweenMax.to($cat.find($('h2')), 0, {css:{opacity:0}});
        TweenMax.to($cat.find($('h2')), $time/2, {css:{opacity:1}});
        TweenMax.from($cat.find($('h2')), $time/2, {css:{top:350}, ease:Power1.easeOut});	
        TweenMax.to($cat.find($irA), 0, {css:{opacity:0}});
        TweenMax.to($cat.find($irA), $time, {css:{opacity:1}, delay:0.2});
        TweenMax.from($cat.find($irA), $time, {css:{top:550}, ease:Back.easeOut, delay:0.2});

		$cat.hover(function(){
			$me = $(this);
			TweenMax.to($cat, $time, {css:{width:'30%'}});
			TweenMax.to($me, $time, {css:{width:'40%'}});

			TweenMax.to($me.find($('.velo')), $time, {css:{opacity:0},onComplete:function(){
			}});

		}, function(){
			$me = $(this);
			TweenMax.to($cat, $time, {css:{width:'33.33%'}});
			TweenMax.to($me.find($('.velo')), $time, {css:{opacity:1}});

//			TweenMax.to($irA, $time/2, {css:{opacity:0}});
//			TweenMax.to($me.find($('h2')), $time/2, {css:{opacity:0}});
		});
	};

	$('#fullpage').fullpage({
		verticalCentered: true,
		navigation: true,
		anchors: ['home', 'perfiles','vida'],
	});

});

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

	var playButton = document.getElementById("botonPlay");
	playButton.addEventListener("click", function() {
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

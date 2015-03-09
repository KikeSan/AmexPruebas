//API Youtube
var player;

$(document).ready(function(){
    var unaSolaVez = 0;
    var repInterna = 0;
    var TabPrev = 0;
    localStorage.setItem("opTab", 1);
//    $("#fullpage .section").bind("mousewheel", function() {return false;});
    
    /******** REDES SOCIALES *************/
    
    /******************/
        
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
        closeMenu();
    });
    
    function closeMenu(){
        TweenMax.to($('.abrirMenu'), 0.25, {css: { opacity: 1 }});
        TweenMax.to($('.conteMenu'), 0.35, {css: { left: -350 }, delay:0.15, ease:Power1.easeOut});
        TweenMax.to($('.cerrarMenu'), 0.35, {css: { marginLeft: 0, opacity:0 }, ease:Power1.easeIn});
        TweenMax.to($('.lightBox'), 0.35, {
            css: { opacity: 0 }, ease: Power3.easeOut,
            onComplete: function() {
                $('.lightBox').css('display', 'none');
            }
        });
    }
    
    $('.cerrarMenu').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    $('.cerrarMenu').click(function(){  
        closeMenu(); 
    });
    
    $('#btnConoce').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    $('#btnInicio').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    $('#btnInicio').click(function() {
        irHome();
        TweenMax.to($('.menuDerecha'), 0.5, {css: { right: -120 }, ease:Power1.easeOut});
    });
    
    function irHome(){
        unaSolaVez = 0;
        repInterna = 0;
        /*for(var i=1;i<=3;i++){
            $('#fullpage #section2 #c'+i).css('opacity', '0');
        }*/
        window.location.href = '#home';   
    }
    /***************************** BOTONES PRINCIPALES *****************************/
    //imagen 1 ****
    $('#cat_caminar').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    $('#cat_caminar').click(function() {
//        TabPrev = 0;
        irInterna(1);
    });
    //imagen 2 ****
    $('#cat_bailar').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    $('#cat_bailar').click(function() {
//        TabPrev = 0;
        irInterna(2);
    });
    //imagen 3 ****
    $('#cat_volar').hover(function(){   document.body.style.cursor='pointer';   }, function(){    document.body.style.cursor='default';   })
    $('#cat_volar').click(function() {
//        TabPrev = 0;
        irInterna(3);
    });
    
    $('.menuDerecha div:first-child img').hover(function(){   
            document.body.style.cursor='pointer'; 
            TweenMax.to($('.menuDerecha > div:first-child p'), 0.4, {opacity:1, ease:Expo.easeOut});

        }, function(){    
            document.body.style.cursor='default';   
            TweenMax.to($('.menuDerecha > div:first-child p'), 0.4, {opacity:0, ease:Expo.easeOut});
        })
    //-------------------------------------------------------
    $('.menuDerecha div:last-child img').hover(function(){   
            document.body.style.cursor='pointer'; 
            TweenMax.to($('.menuDerecha > div:last-child p'), 0.4, {opacity:1, ease:Expo.easeOut});

        }, function(){    
            document.body.style.cursor='default';   
            TweenMax.to($('.menuDerecha > div:last-child p'), 0.4, {opacity:0, ease:Expo.easeOut});
        })
    $('.menuDerecha div:last-child img').click(function() {
        repInterna = 0;
        irVida(localStorage.getItem("opcion"));
    }); 

    //Boton circular para bajar *******************************************************************************

    $('.botonBajar').click(function() {
//        console.log('desde el botonbajar va: '+localStorage.getItem("opcion")+' id:'+$(this).attr('class'))
        repInterna = 0;
        irVida(localStorage.getItem("opcion"));
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
    
    function irInterna(op){
        if(repInterna==0){
            localStorage.setItem("opcion", op);
//            console.log('op--> '+op);
            $('.fondoSection').css('background-image', 'url(img/wall'+op+'.jpg)');
            window.location.href = '#perfiles'; 

            $me = $('#section1 #info'+op);

            for(var j=1;j<=3;j++){
                    $('#section1 #info'+j).css('display', 'none');
            } 

            TweenMax.to($me, 0, {css: { marginTop: 0, opacity:0 }});
            TweenMax.to($me, 0.5, {css: {'display':'block', marginTop: -290, opacity:1 }, delay:0.7, ease:Power3.easeOut});
            /*TweenMax.to($('#section1 .contenidos'), 0, {css: { marginTop: 0, opacity:0 }});
            TweenMax.to($('#section1 .contenidos'), 0.5, {css: { marginTop: -290, opacity:1 }, delay:0.7, ease:Power3.easeOut});*/

            TweenMax.to($('.menuDerecha').find($('div p')), 0.5, {css:{opacity:0}});
            TweenMax.to($('.menuDerecha'), 0.5, {css: { right: 60 }, delay:0.8, ease:Power1.easeOut});

            TweenMax.to($('.menuDerecha div:first-child #activado'), 0.5, {css:{opacity:1}});
            TweenMax.to($('.menuDerecha div:last-child #activado'), 0.5, {css:{opacity:0}});
            
            TweenMax.to($('.menuDerecha div:first-child #normal'), 0.5, {css:{opacity:0}});
            TweenMax.to($('.menuDerecha div:last-child #normal'), 0.5, {css:{opacity:1}});

            /***********************************************   TABS CONTENIDOS  ****************************************/

    //        pintaTab(localStorage.getItem("opTab"));

            function pintaTab(tb,opc){
                console.log("OPC en pintaTab: "+opc);
                
                /*switch(opc){
                    case 1: $me.find('.menuTabs #'+tb).css('border-color', 'rgba(169,238,159, 0.5)'); 
                            $me.find('.menuTabs div').css('border-color', 'rgba(169,238,159, 0.5)');
                            $me.find('.menuTabs #'+tb).css('backgroundColor', 'rgba(146,205,137, 0.5)');
                            if(TabPrev!=tb){TweenMax.to($('#section1 #info'+opc+' .menuTabs #'+TabPrev), 0.6, {css:{'backgroundColor':'rgba(146,205,137, 0)'}, ease:Expo.easeOut});}
                            $me.find('.tituloHome').css('color', '#92cd89');
                            break;
                    case 2: $me.find('.menuTabs #'+tb).css('border-color', 'rgba(241,206,122, 0.5)'); 
                            $me.find('.menuTabs div').css('border-color', 'rgba(241,206,122, 0.5)');
                            $me.find('.menuTabs #'+tb).css('backgroundColor', 'rgba(227,179,79, 0.5)');
                            if(TabPrev!=tb){TweenMax.to($('#section1 #info'+opc+' .menuTabs #'+TabPrev), 0.6, {css:{'backgroundColor':'rgba(227,179,79, 0)'}, ease:Expo.easeOut});}
                            $me.find('.tituloHome').css('color', '#f1ce7a');
                            break;
                    case 3: $me.find('.menuTabs #'+tb).css('border-color', 'rgba(255,255,255, 0.5)'); 
                            $me.find('.menuTabs div').css('border-color', 'rgba(255,255,255, 0.5)'); 
                            $me.find('.menuTabs #'+tb).css('backgroundColor', 'rgba(204,204,204, 0.5)');
                            if(TabPrev!=tb){TweenMax.to($('#section1 #info'+opc+' .menuTabs #'+TabPrev), 0.6, {css:{'backgroundColor':'rgba(204,204,204, 0)'}, ease:Expo.easeOut});}
                            $me.find('.tituloHome').css('color', '#a1a1a1');
                            break;
                }*/
                
                if(opc==1){
                    $me.find('.menuTabs #'+tb).css('border-color', 'rgba(169,238,159, 0.5)'); 
                    $me.find('.menuTabs div').css('border-color', 'rgba(169,238,159, 0.5)');
                    $me.find('.menuTabs #'+tb).css('backgroundColor', 'rgba(146,205,137, 0.5)');
                    if(TabPrev!=tb){TweenMax.to($('#section1 #info'+opc+' .menuTabs #'+TabPrev), 0.6, {css:{'backgroundColor':'rgba(146,205,137, 0)'}, ease:Expo.easeOut});}
                    $me.find('.tituloHome').css('color', '#92cd89');
                }else if(opc==2){
                    $me.find('.menuTabs #'+tb).css('border-color', 'rgba(241,206,122, 0.5)'); 
                    $me.find('.menuTabs div').css('border-color', 'rgba(241,206,122, 0.5)');
                    $me.find('.menuTabs #'+tb).css('backgroundColor', 'rgba(227,179,79, 0.5)');
                    if(TabPrev!=tb){TweenMax.to($('#section1 #info'+opc+' .menuTabs #'+TabPrev), 0.6, {css:{'backgroundColor':'rgba(227,179,79, 0)'}, ease:Expo.easeOut});}
                    $me.find('.tituloHome').css('color', '#f1ce7a');
                }else if(opc==3){
                    $me.find('.menuTabs #'+tb).css('border-color', 'rgba(255,255,255, 0.5)'); 
                    $me.find('.menuTabs div').css('border-color', 'rgba(255,255,255, 0.5)'); 
                    $me.find('.menuTabs #'+tb).css('backgroundColor', 'rgba(204,204,204, 0.5)');
                    if(TabPrev!=tb){TweenMax.to($('#section1 #info'+opc+' .menuTabs #'+TabPrev), 0.6, {css:{'backgroundColor':'rgba(204,204,204, 0)'}, ease:Expo.easeOut});}
                    $me.find('.tituloHome').css('color', '#a1a1a1');
                }
    //            $me.find('.menuTabs #'+tb).css('backgroundColor', 'rgba(227,179,79, 0.5)');
    //            TweenMax.to($me.find('.menuTabs #'+TabPrev), 0.6, {css:{'backgroundColor':'rgba(227,179,79, 0)'}, ease:Expo.easeOut});
                document.body.style.cursor='default';
                if(tb==1){
                    $me.find('.contenido2').css('display', 'none');
                    $me.find('.contenido3').css('display', 'none');
                }
                console.log("LOCALSTORAGE TAB: "+tb+" TabPrev:"+TabPrev);
                
                TweenMax.to($('#section1 #info'+opc+' .contenido'+TabPrev), 0.3, {css:{'display':'none', opacity:0}, ease:Back.easeOut});
                TweenMax.to($('#section1 #info'+opc+' .contenido'+tb), 0.5, {css:{'display':'block', opacity:1}, delay:0.3, ease:Back.easeOut});

                TabPrev = tb;


                $me.find('.menuTabs div').hover(function(){   
                        $me = $(this);  
                        if($(this).attr('id')!=TabPrev){
                            document.body.style.cursor='pointer'; 
                            switch(opc){
                                case 1: TweenMax.to($me, 0.4, {css:{'backgroundColor':'rgba(146,205,137, 0.5)'}, ease:Expo.easeOut}); break;
                                case 2: TweenMax.to($me, 0.4, {css:{'backgroundColor':'rgba(227,179,79, 0.5)'}, ease:Expo.easeOut}); break;
                                case 3: TweenMax.to($me, 0.4, {css:{'backgroundColor':'rgba(204,204,204, 0.5)'}, ease:Expo.easeOut}); break;
                            }
                        }
                    }, function(){    
                        if($(this).attr('id')!=TabPrev){
                            document.body.style.cursor='default';
                             switch(opc){
                                case 1: TweenMax.to($me, 0.4, {css:{'backgroundColor':'rgba(146,205,137, 0)'}, ease:Expo.easeOut}); break;
                                case 2: TweenMax.to($me, 0.4, {css:{'backgroundColor':'rgba(227,179,79, 0)'}, ease:Expo.easeOut}); break;
                                case 3: TweenMax.to($me, 0.4, {css:{'backgroundColor':'rgba(204,204,204, 0)'}, ease:Expo.easeOut}); break;
                            }
                        }
                    })  

             }
            
             pintaTab(1,op);

             $me.find('.menuTabs #1').click(function(){ if(TabPrev!=1){ /*localStorage.setItem("opTab", 1);*/   pintaTab(1,op); }});
             $me.find('.menuTabs #2').click(function(){ if(TabPrev!=2){ /*localStorage.setItem("opTab", 2);*/   pintaTab(2,op); }});
             $me.find('.menuTabs #3').click(function(){ if(TabPrev!=3){ /*localStorage.setItem("opTab", 3);*/   pintaTab(3,op); }});
            
            repInterna = 1;
        }
    }

    function irVida(opc){
//        localStorage.removeItem("opcion");
        if(unaSolaVez==0){
//            console.log('estamos en:::::::::: '+opc/*$('#section2 #c'+opc).attr('id')*/);
            TweenMax.to($('#section1 .contenidos'), 0.5, {css: { marginTop: -490, opacity:0 }, ease:Power3.easeIn});

            $('.fondoVida').css('background-image', 'url(img/vida'+opc+'.jpg)');

            for(var i=1;i<=3;i++){
//                $('#fullpage #section2 #c'+i).css('opacity', '0');
                $('#fullpage #section2 #c'+i).css('display', 'none');
            }

            window.location.href = '#vida';
            
            $('#fullpage #section2 #c'+opc).css('display', 'block');
            TweenMax.to($('#section2 #c'+opc), 0, {css: { marginTop: 0, opacity:0 }});
            TweenMax.to($('#section2 #c'+opc), 0.5, {css: { marginTop: -290, opacity:1 }, delay:0.7, ease:Power3.easeOut});

             $('#section2 #c'+opc+'>div>.botonM').hover(function(){   
                    document.body.style.cursor='pointer';
                    $(this).css('backgroundColor', 'rgba(83,83,83, 0.3)'); 
                }, function(){    
                    document.body.style.cursor='default';   
                    $(this).css('backgroundColor', 'rgba(83,83,83, 0)'); 
             })
            
            TweenMax.to($('.menuDerecha').find($('div p')), 0.5, {css:{opacity:0}});
            TweenMax.to($('.menuDerecha div:first-child #activado'), 0.5, {css:{opacity:0}});
            TweenMax.to($('.menuDerecha div:last-child #activado'), 0.5, {css:{opacity:1}});
            
            TweenMax.to($('.menuDerecha div:first-child #normal'), 0.5, {css:{opacity:1}});
            TweenMax.to($('.menuDerecha div:last-child #normal'), 0.5, {css:{opacity:0}});

            TweenMax.to($('.menuDerecha').find($('div:first-child p')), 0, {css:{opacity:0}});
            $('.menuDerecha div:first-child img').hover(function(){   
                    document.body.style.cursor='pointer'; 
                    TweenMax.to($('.menuDerecha > div:first-child p'), 0.4, {opacity:1, ease:Expo.easeOut});

                }, function(){    
                    document.body.style.cursor='default';   
                    TweenMax.to($('.menuDerecha > div:first-child p'), 0.4, {opacity:0, ease:Expo.easeOut});
                })

            $('.menuDerecha div:first-child img').click(function() {
                unaSolaVez = 0;
                irInterna(localStorage.getItem("opcion"));
            });
            unaSolaVez = 1;
        }
    }
    
    /**************** Animacion Menu *******************/
    $('.abrirMenu').hover(function(){
                document.body.style.cursor='pointer';
			}, function(){
                document.body.style.cursor='default';
			})
    $('.abrirMenu').click(function() {
        TweenMax.to($('.cerrarMenu'), 0.5, {css: { marginLeft: 360, opacity:1 }, delay:0.15, ease:Power3.easeOut});
        
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

	if ($widthDevice > 1199) {

        $time = 0.64;
        TweenMax.to($cat.find($('h2')), 0, {css:{opacity:0}});
        TweenMax.to($cat.find($('h2')), $time, {css:{opacity:1}});
        TweenMax.from($cat.find($('h2')), $time, {css:{marginTop:-150}, ease:Power1.easeOut});	
        TweenMax.to($cat.find($irA), 0, {css:{opacity:0}});
        TweenMax.to($cat.find($irA), $time, {css:{opacity:1}, delay:0.2});
        TweenMax.from($cat.find($irA), $time, {css:{marginTop:150}, ease:Back.easeOut, delay:0.2});

		$cat.hover(function(){
			$me = $(this);
			TweenMax.to($cat, $time, {css:{width:'30%'}});
			TweenMax.to($me, $time, {css:{width:'40%'}});
            
			TweenMax.to($me.find($('img')), 0.4, {css:{scale:1.2, marginTop:20}, ease:Back.easeOut});

			TweenMax.to($me.find($('.velo')), $time, {css:{opacity:0},onComplete:function(){
			}});

		}, function(){
			$me = $(this);
			TweenMax.to($cat, $time, {css:{width:'33.33%'}});
			TweenMax.to($me.find($('img')), 0.4, {css:{scale:1, marginTop:0}, ease:Back.easeOut});
			TweenMax.to($me.find($('.velo')), $time, {css:{opacity:1}});
		});
	}
    if ($widthDevice < 1200) {

        $time = 0.64;
        TweenMax.to($cat.find($('h2')), 0, {css:{opacity:0}});
        TweenMax.to($cat.find($('h2')), $time, {css:{opacity:1}});
        TweenMax.from($cat.find($('h2')), $time, {css:{marginTop:-150}, ease:Power1.easeOut});	
        TweenMax.to($cat.find($irA), 0, {css:{opacity:0}});
        TweenMax.to($cat.find($irA), $time, {css:{opacity:1}, delay:0.2});
        TweenMax.from($cat.find($irA), $time, {css:{marginTop:150}, ease:Back.easeOut, delay:0.2});

		/*$cat.hover(function(){
			$me = $(this);
			TweenMax.to($cat, $time, {css:{height:'30%'}});
			TweenMax.to($me, $time, {css:{height:'40%'}});
            
			TweenMax.to($me.find($('img')), 0.4, {css:{scale:1.2, marginTop:20}, ease:Back.easeOut});

			TweenMax.to($me.find($('.velo')), $time, {css:{opacity:0},onComplete:function(){
			}});

		}, function(){
			$me = $(this);
			TweenMax.to($cat, $time, {css:{height:'33.33%'}});
			TweenMax.to($me.find($('img')), 0.4, {css:{scale:1, marginTop:0}, ease:Back.easeOut});
			TweenMax.to($me.find($('.velo')), $time, {css:{opacity:1}});
		});*/
	}

	$('#fullpage').fullpage({
		verticalCentered: true,
		navigation: true,
		anchors: ['home', 'perfiles','vida'],
        
	});
    $.fn.fullpage.setAllowScrolling(false); //Deshabilita el scroll del mouse

});

/********** ACORDEON ************/


/*********************************/

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

	/*var playButton = document.getElementById("botonPlay");
	playButton.addEventListener("click", function() {
		player.seekTo(0);
		player.playVideo();
	});

	var pauseButton = document.getElementById("cerrarVideo");
	pauseButton.addEventListener("click", function() {
		player.pauseVideo();
	});*/
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

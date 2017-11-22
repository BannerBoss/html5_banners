function $( id ){
	var ret = [];
	for( var i in arguments ){
		ret.push( document.getElementById( arguments[i] ) );
	}
	return ret;
}
function $$( selector ){
	return document.getElementsByClassName( selector );
	//return document.querySelectorAll( '.'+selector );
}

App = {
	init: function(){
		document.getElementById("loader").style.display = "none";

		App.generate_endframe();
		App.generate_endcopy();

		App.reset();
		App.step1();

		//App.count = 0;
		//App.timer();
	},
	
	step1: function(){
		//begin scaling photo
		
		TweenMax.to( $('intro_image'), 9, {force3D: false, scale: 1.3, ease: Power0.easeInOut, force3D:true } );
		// TweenMax.set( $('intro_image'), {opacity: 1, delay: 0.35});

		TweenMax.staggerTo( $$('letter'), 0.2, {scale:1, opacity:1, delay:0.2}, 0.08);
		TweenMax.to( $('dot'), 0.2, {scale: 1, opacity: 1, delay: 1.1} );
		TweenMax.to( $('com'), 0.2, {scale: 1, opacity: 1 } );
		TweenMax.staggerTo( $$('com_letter'), 0.4, {scale:1, opacity:1, delay:1}, 0.1);

		TweenMax.delayedCall( 1.8, App.step2 );
		
	},
	step2: function(){
		TweenMax.to( $('booking'), 0.4, {x: -17, delay: 0.1});
		TweenMax.to( $('booking'), 0.1, {x: -16, delay: 0.5});
		TweenMax.to( $('dot'), 0.2, {opacity: 0, delay: 0.1});
		TweenMax.to( $('com'), 0.4, {x: 18, delay: 0.1});
		TweenMax.to( $('com'), 0.1, {x: 16, delay: 0.5 });
		TweenMax.to( $('hart'), 0.4, {scale: 1.1, opacity: 1, ease: Power2.easeInOut });
		TweenMax.to( $('hart'), 0.1, {scale: 1, delay: 0.4 });

		TweenMax.delayedCall( 1, App.step3 );
	},
	step3: function(){
		TweenMax.to( $('copy1'), 0.7, {x: -45 } );
		TweenMax.to( $('com'), 0.25, {y: -10, opacity: 0, delay: 0.7 });
		TweenMax.to( $('action'), 0.3, {y: 0, opacity: 1, delay: 1 });

		TweenMax.to( $('hart'), 0.2, {scale: 1.15, delay: 0.9 });
		TweenMax.to( $('hart'), 0.2, {scale: 1, delay: 1.1 });

		TweenMax.delayedCall( 2, App.step4 );
	},

	step4: function(){
		TweenMax.to( $('action'), 0.25, {y: -10, opacity: 0, delay: 0.7 });
		TweenMax.to( $('country'), 0.3, {y: 0, opacity: 1, delay: 1 });

		TweenMax.to( $('hart'), 0.2, {scale: 1.15, delay: 0.9 });
		TweenMax.to( $('hart'), 0.2, {scale: 1, delay: 1.1 });

		//fade images
		TweenMax.to( $('intro_image'), 1, {opacity: 0, delay: 0.8, onComplete: function(){
			TweenMax.killTweensOf( $('intro_image') );
		} } );
		TweenMax.to( $('end_image'), 0.8, {y: 0, opacity: 1, delay: 0.5 } );

		TweenMax.to( $('end_image'), 9, {force3D: false, scale: 1.3, delay: 0.2, ease: Power0.easeInOut } );

		TweenMax.delayedCall( 2, App.step5 );

	},
	step5: function(){
		TweenMax.to( $('end_image'), 1, {opacity: 0, delay: 1, onComplete: function(){
			TweenMax.killTweensOf( $('end_image') );
		}});
		TweenMax.to( $('city2'), 0.8, {opacity: 1, delay: 0.8});
		TweenMax.to( $('city2'), 9, {force3D: false, scale: 1.3, delay: 0.8, ease: Power0.easeInOut } );

		TweenMax.to( $('country'), 0.25, {y: -10, opacity: 0, delay: 0.7 });
		TweenMax.to( $('destination'), 0.3, {y: 0, opacity: 1, delay: 1 });

		TweenMax.to( $('hart'), 0.2, {scale: 1.15, delay: 0.9 });
		TweenMax.to( $('hart'), 0.2, {scale: 1, delay: 1.1 });

		TweenMax.delayedCall( 2.3, App.step6 );
	},

	step6: function(){
		TweenMax.to( $('destination'), 0.25, {y: -10, opacity: 0, delay: 0.7 });
		TweenMax.set( $('com'), {y: 10, opacity: 0});
		TweenMax.to( $('com'), 0.3, {y: 0, opacity: 1, delay: 1 });

		TweenMax.to( $('hart'), 0.2, {scale: 1.15, delay: 0.9 });
		TweenMax.to( $('hart'), 0.2, {scale: 1, delay: 1.1 });

		TweenMax.delayedCall( 1.5, App.step7 );
	},

	step7: function(){
		TweenMax.to( $('hart'), 0.1, {scale: 1.1, ease: Power2.easeInOut });
		TweenMax.to( $('hart'), 0.6, {scale: 0, delay: 0.1 });

		TweenMax.to( $('dot'), 0.2, {opacity: 1, x: 1, delay: 0.1});
		TweenMax.to( $('booking', 'com'), 0.5, {x: 0, delay: 0.1 });

		TweenMax.to( $('copy1'), 0.8, {x: -3, delay: 0.5 });

		TweenMax.to( $('bluebg'), 0.7, {opacity: 1, delay: 0.5 });

		TweenMax.delayedCall( 1.4, App.step8 );
	},

	step8: function(){
		TweenMax.to( $('copy1'), 0, {opacity: 0, delay: 0.1 });
		TweenMax.to( $('large_logo'), 0, {opacity: 1, delay: 0.1 });
		TweenMax.to( $('large_logo'), 0.8, {y:0, scale: 1, delay: 0.05});

		TweenMax.to( $('endcopy_container'), 0.1, {opacity: 1, delay: 1 });

		TweenMax.staggerTo( $$('ltr'), 0.06, {opacity: 1, delay: 1}, 0.04 );

		TweenMax.delayedCall( 3.5, App.step9 );
	},

	step9: function(){
		TweenMax.to( $('endcopy_container'), 0.8, { opacity: 0 });

		TweenMax.to( $('search'), 0.6, {y: 0, opacity: 1, delay: 0.2 });

		TweenMax.staggerTo( $$('eltr'), 0.2, {opacity: 1, delay: 0.6}, 0.02 );

		//TweenMax.delayedCall( 1.5, App.step10 );
	},

	step10: function(){
		TweenMax.to( $('arrow', 'arrow2'), 0.5, {opacity: 1 });

		TweenMax.to( $('arrow'), 0.5, {x: -4, delay: 0.5 });
		TweenMax.to( $('arrow'), 0.5, {x: 1, delay: 1 });

		TweenMax.to( $('arrow'), 0.5, {x: -4, delay: 1.5 });
		TweenMax.to( $('arrow'), 0.5, {x: 0, delay: 2 });

		TweenMax.to( $('arrow'), 0.5, {x: -4, delay: 2.5 });
		TweenMax.to( $('arrow'), 0.5, {x: 0, delay: 3, onComplete: App.replay });
	},

	replay: function(){
		//clearTimeout( App.tm );
	},

	timer: function(){
		console.log( App.count++ );
		App.tm = setTimeout( App.timer, 1000 );
	},


	generate_endframe: function(){
		var buff = [];
		//console.log( document.getElementById('endcopy_container') );
		var endText = document.getElementById('endcopy_container').innerHTML.toString().split('');
		//console.log( endText );
		//.toString().split('');
		for( var i in endText ){
			if( endText[i] == ' '){
				buff.push('<div class="ltr">&nbsp;</div>');	
			} else {
				buff.push('<div class="ltr">'+endText[i]+'</div>');		
			}			
		}
		document.getElementById('endcopy_container').innerHTML = buff.join('');
		
	},

	generate_endcopy: function(){
		var buff = [];
		var endText = document.getElementById('search_copy').innerHTML.toString().split('');
		var className = 'eltr';

		//fix lineheight problem with final copy letters
		if( navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ){
			className = 'eltr macfix';	
		}

		for( var i in endText ){
			if( endText[i] == ' '){
				buff.push('<div class="'+className+'">&nbsp;</div>');	
			} else {
				buff.push('<div class="'+className+'">'+endText[i]+'</div>');		
			}			
		}
		document.getElementById('search_copy').innerHTML = buff.join('');
	},


	reset: function(){
		TweenMax.killAll();

		TweenMax.set( $$('ltr'), {opacity: 0 });
		TweenMax.set( $$('eltr'), {opacity: 0 });
		TweenMax.set( $('large_logo'), {scale: 0.685, x: 0, y: 15, opacity: 0});
		TweenMax.set( $('copy1'), {x: 0, scale: 1 });
		TweenMax.set( $('bluebg'), {opacity: 0});
		TweenMax.set( $('com'), {opacity: 0, scale: 0.9, transformOrigin: '10% 30%'});
		TweenMax.set( $$('letter'), {scale: 0.5, opacity: 0 });
		TweenMax.set( $('intro_image'), {scale: 1, rotation: 0.002, transformOrigin: '50% 50%' });
		TweenMax.set( $('end_image'), {y: 0, scale: 1, rotation: 0.002, z: 0.1, opacity: 0, transformOrigin: '5% 58%'});
		TweenMax.set( $('city2'), { rotation: 0.002, transformOrigin: '50% 50%' });
		TweenMax.set( $('com', 'booking', 'dot'), {x: 0});
		TweenMax.set( $('hart'), {scale: 0, transformOrigin: '50% 18px', opacity: 0});
		TweenMax.set( $('action', 'country', 'destination'), {y: 10, z: 0.01, opacity: 0 });

		TweenMax.set( $('search'), {y: 12, opacity: 0 });
		TweenMax.set( $('arrow', 'arrow2'), {opacity: 0 });

	}
}




/*------------------------------------
Helper function
------------------------------------*/
// this function will return single matching dom element 
function $(selector){
	return document.querySelector(selector);
}
// this function will return an array of matching dom element 
function $$(selector){
	return document.querySelectorAll(selector);
}

/*------------------------------------
All global variables
------------------------------------*/
var banner 				= $('#banner');
var frame1Text1			= $$('.frame1__text1');
var frame1Text1Shasow 	= $('.frame1__text1__copy');
var frame1Text2 		= $$('.frame1__text2');
var frame1Text2Shasow 	= $('.frame1__text2__copy');
var frame1Text3 		= $$('.frame1__text3');
var frame1Text3Shasow 	= $('.frame1__text3__copy');
var frame2 				= $('.frame2');
var frame2Logo 			= $$('.frame2__logo');
var frame2Text1 		= $('.frame2__text1');
var frame2Text2 		= $('.frame2__text2');
var frame2Text3 		= $('.frame2__text3');
var frame2CTA 			= $('.frame2__cta');
var frame2LogoXbox      = $('.frame2__logo-xbox');
var tl1 				= new TimelineLite({});
var tl2 				= new TimelineLite();

/*------------------------------------
init function call this function after window load
------------------------------------*/
function init(){
	banner.style.visibility = 'visible';
	frameOneAnimation();
	frameTwoAnimation();

	// To play second frame only comment 'tl2.pause();'  and uncomment 'tl1.pause();'
	tl2.pause();
	// tl1.pause();
}

/*------------------------------------
Frame Two animation
------------------------------------*/
function frameOneAnimation(){
	tl1.fromTo(frame1Text1,0.4, {x:300}, {x:0, ease:Power4.easeIn});
	tl1.to(frame1Text1Shasow,0.2, {textShadow: 'rgb(255, 255, 255) 0px 0px 0px'});
	tl1.fromTo(frame1Text2,0.4, {x:300}, {x:0, ease:Power4.easeIn},1.9);
	tl1.to(frame1Text2Shasow,0.2, {textShadow: 'rgb(255, 255, 255) 0px 0px 0px'});
	tl1.to([frame1Text1,frame1Text2],0.2, {x:-300, opacity: 0, ease:Power4.easeIn},3.8);
	tl1.fromTo(frame1Text3,0.4, {x:300}, {x:0, ease:Power4.easeIn},3.7);
	tl1.to(frame1Text3Shasow,0.2, {textShadow: 'rgb(255, 255, 255) 0px 0px 0px'});
	tl1.to(frame1Text3,0.2, {x:-300, opacity: 0, ease:Power4.easeIn, onComplete: function(){
		tl2.play();
	}},5.3);
}

/*------------------------------------
Frame Two animation
------------------------------------*/
function frameTwoAnimation(){
	tl2.fromTo(frame2, 0.2, {opacity: 0}, {opacity: 1});
	tl2.fromTo(frame2LogoXbox, 0.3, {y:60}, {y: 0, ease:Ease.easeIn});
	tl2.fromTo([frame2Logo,frame2CTA], 0.5, {scale: 0}, {scale: 1,ease:Back.easeOut});
	tl2.fromTo(frame2Text1, 0.3, {x:-100, opacity: 0}, {x: 0, opacity: 1, ease:Power4.easeIn});
	tl2.fromTo(frame2Text2, 0.3, {x:100, opacity: 0}, {x: 0, opacity: 1, ease:Power4.easeIn});
	tl2.fromTo(frame2Text3, 0.3, {opacity: 0}, {opacity: 1, ease:Power4.easeIn, onComplete: function(){
		frame2CTA.classList.add('fram2__cta--animate');
		setTimeout(function(){
			frame2CTA.classList.remove('fram2__cta--animate');
		},1000);
	}});
}

window.onload = init;
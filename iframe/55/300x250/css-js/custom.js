var banner = document.getElementById('banner');
var ctaAnimation = false;

var mtl = new TimelineMax({paused:true, repeat:2, repeatDelay:2.75});
  
  // ---- Animation Timelines ------  
  mtl.set(banner, {visibility: "visible"})
    .add(function(){ctaAnimation = false;})
    .set(".cta", {borderRadius:50})
    .from(".txt1", .5, {x:120, alpha:0, rotation:0.02, ease:Expo.easeOut})
    .from(".txt2", .5, {x:80, alpha:0, rotation:0.02, ease:Expo.easeOut}, "-=.35")
    .from(".txt3", .5, {x:60, alpha:0, rotation:0.02, ease:Expo.easeOut}, "-=.35")

    .from(".cta", .25, {scale:.85, repeat:4, yoyo:true, rotation:0.02, ease:Sine.easeOut}, "-=.35")
    .to(".cta", .6, {width:"270px", borderRadius:6, x:-119, rotation:0.02, ease:Expo.easeInOut})
    .from(".cta_text", .5, {alpha:0, ease:Sine.easeOut}, "-=.2")

    .to(".txt1", .4, {y:-44, rotation:0.02, ease:Expo.easeOut, delay:.8})
    .to(".txt2", .4, {y:-7, rotation:0.02, ease:Expo.easeOut}, "-=.4")
    .to(".txt3", .4, {y:30, rotation:0.02, ease:Expo.easeOut}, "-=.4")
    .to(".cta, .cta_text",  .4, {y:35, rotation:0.02, ease:Expo.easeOut}, "-=.4")
    
    .to(".txt1", .5, {x:9, rotation:0.02, ease:Expo.easeOut})
    .to(".txt2", .5, {x:-70, rotation:0.02, ease:Expo.easeOut}, "-=.45")
    .to(".txt3", .5, {x:-128, rotation:0.02, ease:Expo.easeOut}, "-=.45")

    .from(".book", 1, {alpha:0, ease:Expo.easeOut}, "-=.01")
    .to(".book", 1, {x:0, rotation:0,  ease:Expo.easeOut}, "-=.5")
  
	  .from(".icon2", .6, {y:0, x:-50, alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=1")
    .from(".icon3", .6, {x:20, y:5, alpha:0, rotation:.02, ease:Sine.easeOut}, "-=.55")
    .from(".icon1", .6, {alpha:0, rotation:0.02, ease:Sine.easeOut, onComplete:hoverInOut}, "-=.15")
	;



//----- Window Onload ------
window.onload = function() { 
    mtl.play();
};


/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

banner.addEventListener("mouseover", function(){
  if(ctaAnimation)
  TweenMax.to(".cta, .cta_text", .4, {scale:1.05, rotation:0.02, ease:Sine.easeInOut});
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation)
  TweenMax.to(".cta, .cta_text", .4, {scale:1, rotation:0.02, ease:Sine.easeInOut});
})

    var currentDuration = mtl.totalDuration();
    console.log(currentDuration); 
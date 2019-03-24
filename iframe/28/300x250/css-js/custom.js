var banner = document.getElementById('banner');
var ctaAnimation = false;

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:2}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"}) 
   .add(function(){ctaAnimation = false;})
   .from(".guage", .5, {alpha:0, ease:Sine.easeOut})
   .to(".guage", .85, {x:-3600, ease:SteppedEase.config(12)}, "-=.25")
   .to(".guage", .001, {alpha:0, ease:Sine.easeOut, delay:.25}, "fade")
   .from(".e-anim", .001, {alpha:0, ease:Sine.easeOut, delay:.25}, "fade")
   .to(".e-anim", 1.5, {scale:.16, x:87, y:97, rotation:0.02, ease:Expo.easeInOut, delay:.2})

   .from(".logo_white", .5, {alpha:0, ease:Sine.easeOut})
   .to(".e-anim", .5, {alpha:0, ease:Sine.easeOut}, "-=.5")
   .from(".white_dash", .5, {width:0, rotation:0.02, ease:Sine.easeOut}, "+=.25")
   .from(".txt1a", .5, {alpha:0, ease:Sine.easeOut}, "-=.25")
   .from(".txt1b", .5, {alpha:0, ease:Sine.easeOut, delay:.5})   
   .staggerTo(".txt1, .white_dash", .55, {alpha:0, x:60, ease:Expo.easeIn, delay:1.5}, .15)
   .to(".fade", .6, {x:300, rotation:0.02, ease:Expo.easeIn}, "-=.4")

   .from(".logo_black", .5, {alpha:0, ease:Sine.easeOut})
   .from(".black_dash", .5, {width:0, rotation:0.02, ease:Sine.easeOut}, "-=.3")
   .staggerFrom(".txt2", .6, {alpha:0, y:20, rotation:0.02, ease:Sine.easeOut}, .15, "-=.3")
   .to(".cta", 1, {clip:"rect(0px 200px 600px 0px)", ease:Expo.easeInOut, onComplete:hoverInOut})
;




/*-------------------------------------
  Add all timelines to master timeline...
---------------------------------------*/
masterTimeline.add([tl1]);


/*-------------------------------------
  After window load...
---------------------------------------*/   
window.onload = function()
{
  masterTimeline.play();
}


/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

banner.addEventListener("mouseover", function(){
  if(ctaAnimation)
  TweenMax.to(".cta", .4, {scale:1.1, rotation:0.02, ease:Sine.easeOut});
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation)
  TweenMax.to(".cta", .4, {scale:1, rotation:0.02, ease:Sine.easeOut});
})




/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
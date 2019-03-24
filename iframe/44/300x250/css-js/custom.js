var banner = document.getElementById('banner');
var ctaAnimation = false;

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:2}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   .add(function(){ctaAnimation = false;}) 
   .to(".mountains", 1, {scale:1.7, y:-26, rotation:16, ease:Sine.easeOut})  
   .staggerFrom(".txt1", .5, {x:-300, cycle:{y:[-90, -80]}, rotation:0.02, ease:Quad.easeInOut}, .2)   
   .to(".skier", 1.5, {bezier:{type:"soft", values:[{x:250, y:-40, rotation:15}, {x:500, y:100, rotation:50}, {x:740, y:120, rotation:35}]}, ease:Sine.easeOut, delay:1}, "ski")
   .to(".txt1", .7, {clip:"rect(0px 325px 280px 300px)", rotation:0.02, ease:Sine.easeOut, delay:1}, "ski+=.33")
   .from(".frm1_txt3", .5, {x:-300, y:-80, rotation:0.02, ease:Quad.easeInOut}, "-=.8")
   .to(".mountains", 1, {scale:1.7, y:-24, rotation:0.02, ease:Sine.easeOut}, "rotate")
   .to(".frm1_txt3", 1, {y:0, x:-5, rotation:-15, ease:Sine.easeOut}, "rotate")
   .to(".mountains", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "slide-up")
   .to(".frm1_txt3", .5, {y:-54, rotation:-15, ease:Sine.easeOut}, "slide-up")
   .from(".product1", .5, {x:-350, rotation:0.02, ease:Sine.easeInOut})
   .to(".frm1_txt3", .5, {alpha:0, y:-150, rotation:-15, ease:Expo.easeOut, delay:.5}, "fade")
   .to(".product1", .5, {x:350, rotation:0.02, ease:Expo.easeInOut, delay:.5}, "fade")

   .from(".rotator", .5, {x:-250, rotation:-90, ease:Sine.easeOut})
   .from(".blue", .5, {alpha:0, ease:Sine.easeOut}, "frm2_txt1")
   .from(".frm2_txt1", .5, {alpha:0, x:-15, rotation:0.02, ease:Sine.easeOut}, "frm2_txt1")
   .from(".yellow", .5, {alpha:0, ease:Sine.easeOut}, "frm2_txt2")
   .from(".frm2_txt2", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut}, "frm2_txt2")
   .from(".red", .5, {alpha:0, ease:Sine.easeOut}, "frm2_txt3")
   .from(".frm2_txt3", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut}, "frm2_txt3")
   .to(".txt2", .5, {alpha:0, ease:Sine.easeInOut, delay:.5})
   .to(".tri_rotator", .5, {alpha:0, x:250, rotation:90, ease:Sine.easeOut})
  
   .staggerFrom(".products", .5, {x:-300, rotation:0.02, ease:Sine.easeInOut}, .2) 
   .staggerFrom(".txt3", .5, {alpha:0, ease:Sine.easeInOut}, .2, "-=.25") 
   .from(".cta", .5, {x:-300, rotation:0.02, ease:Sine.easeInOut}, "-=.25") 
   .from(".head_logo", .5, {alpha:0, ease:Sine.easeInOut, onComplete:hoverInOut})
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
  TweenMax.to(".cta", .4, {scale:1.1, rotation:0.02, ease:Sine.easeInOut});
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation)
  TweenMax.to(".cta", .4, {scale:1, rotation:0.02, ease:Sine.easeInOut});
})


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
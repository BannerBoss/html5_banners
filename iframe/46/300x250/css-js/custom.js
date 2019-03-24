var banner = document.getElementById('banner');
var ctaAnimation = false;

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:2}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"}) 
  .add(function(){ctaAnimation = false;})    
   .staggerFrom(".txt1", .5, {alpha:0, y:10, rotation:0.02, ease:Sine.easeOut}, .2, "zoom-in")
   .from(".mountains", 2.25, {scale:1.2, x:15, transformOrigin:"50% 70%", rotation:0.02, ease:Sine.easeOut}, "zoom-in")
   .to(".frm1_txt1, .frm1_txt2, .frm1_txt3", .5, {y:110, rotation:0.02, ease:Expo.easeIn, delay:.5}, "slide")
   .to(".frm1_txt4, .frm1_txt5", .5, {y:-110, rotation:0.02, ease:Expo.easeIn, delay:.5}, "slide")


   .from(".frm2_txt1", 1, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.1})   
   .to(".frm2_txt1", .45, {y:-69, rotation:0.02, ease:Quad.easeInOut, delay:.2})
   .to(".mountains", .45, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.5")
   .from(".product1", .45, {y:200, rotation:0.02, ease:Quad.easeInOut}, "-=.45")
   .to(".frm2_txt1", 1, {alpha:0, rotation:0.02, ease:Expo.easeOut, delay:.75},"fade-out")
   .to(".product1", 1, {x:300, rotation:0.02, ease:Expo.easeOut, delay:.75},"fade-out")


   .from(".product2", 1, {x:-100, y:-270, rotation:25, ease:Expo.easeInOut}, "-=.85")
   .staggerFrom(".txt2", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, .3)

   .to(".top_right_text_line", .5, {clip:"rect(0px 325px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.75")
   .to(".top_left_text_line", .5, {clip:"rect(0px 125px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.75")
   .to(".bottom_right_text_line", .5, {clip:"rect(0px 320px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.75")
   .to(".bottom_left_text_line", .5, {clip:"rect(0px 130px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.75")

   .to(".product2", 1, {y:-7, repeat:2, yoyo:true, rotation:0.02, ease:Sine.easeInOut}, "-=1")

   .to(".top_right_text, .top_right_text_line", 1, {alpha:0, scale:0,  x:-5, y:35, rotation:0.02, ease:Expo.easeOut}, "scale-down")
   .to(".top_left_text, .top_left_text_line", 1, {alpha:0, scale:0,  x:20, y:35, rotation:0.02, ease:Expo.easeOut}, "scale-down")
   .to(".bottom_right_text, .bottom_right_text_line", 1, {alpha:0, scale:0,  x:-40, y:0, rotation:0.02, ease:Expo.easeOut}, "scale-down")
   .to(".bottom_left_text, .bottom_left_text_line", 1, {alpha:0, scale:0,  x:20, y:0, rotation:0.02, ease:Expo.easeOut}, "scale-down")
   .to(".product2", .85, {scale:1.1, x:150, y:270, rotation:25, ease:Expo.easeInOut}, "-=1")
   .to(".logo", .5, {alpha:0, rotation:0.02, ease:Expo.easeOut}, "-=.5")


   .from(".mid_boot", 1.5, {y:-200, rotation:0.02, ease:Elastic.easeInOut.config(1,.65)}, "-=.75")
   .from(".mid_boot_shadow", 1.5, {alpha:0, y:20, rotation:0.02, ease:Elastic.easeInOut.config(1,.65)}, "-=1.35")

   .from(".left1_boot", .75, {alpha:0, x:60, y:0, rotation:0.02, ease:Expo.easeInOut}, "boot-=.75")
   .from(".left2_boot", .75, {alpha:0, x:110, y:0, rotation:0.02, ease:Expo.easeInOut}, "boot-=.75")
   .from(".right1_boot", .75, {alpha:0, x:-50, y:0, rotation:0.02, ease:Expo.easeInOut}, "boot-=.75")
   .from(".right2_boot", .75, {alpha:0, x:-105, y:0, rotation:0.02, ease:Expo.easeInOut}, "boot-=.75")
   .from(".boot_number", .5, {alpha:0, rotation:0.02, ease:Quad.easeInOut}, "boot-=.5")
   .from(".frm4_txt1", .5, {x:120, rotation:0.02, ease:Quad.easeInOut}, "boot-=.6")
   .from(".frm4_txt2", .5, {x:-130, rotation:0.02, ease:Quad.easeInOut}, "boot-=.6")
   .from(".cta", .4, {alpha:0, scaleX:0, rotation:0.02, ease:Quad.easeInOut})  
   .from(".cta_copy", .4, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.10") 
   .staggerFrom(".logo1, .head_logo", .4, {alpha:0, cycle:{y:[-15, 15]}, rotation:0.02, ease:Quad.easeInOut, onComplete:hoverInOut})
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
  TweenMax.to(".cta, .cta_copy", .4, {scale:1.1, rotation:0.02, ease:Sine.easeInOut});
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation)
  TweenMax.to(".cta, .cta_copy", .4, {scale:1, rotation:0.02, ease:Sine.easeInOut});
})


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
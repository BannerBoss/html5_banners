var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax(),
               tl2 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})

   // 1st frame animation
   .to(".flowers", 2.5, {x:390, y:-860, rotation:0.02, ease: SlowMo.ease.config( 1, 1, false)})

   // 2nd frame animation
   .from(".logo", .5, {alpha:0, ease:Sine.easeOut}, "-=1")
   .to(".logo", .5, {scale:.6200, x:-2, y:-80, rotation:0.02, ease:Sine.easeOut})
   .from(".lockup", .5, {alpha:0, ease:Sine.easeOut})
   .to(".logo", .5, {scale:.6200, x:-2, y:-217, rotation:0.02, ease:Sine.easeOut, delay:1}, "zoom-in")
   .to(".lockup", .5, {scale:1, x:0, y:-136, rotation:0.02, ease:Sine.easeOut, delay:1}, "zoom-in")


   .from(".tablet, .tab-img", .5, {alpha:0, ease:Sine.easeOut})
   .from(".hand", .5, {y:285, rotation:0.02, ease:Sine.easeOut})
   .to(".tab-img-1", .5, {x:-140, rotation:0.02, ease:Sine.easeOut}, "slide")
   .to(".hand", .5, {x:-125, rotation:0.02, ease:Sine.easeOut}, "slide")
   .from(".tab-img-2", .5, {x:140, rotation:0.02, ease:Sine.easeOut}, "slide")
   .to(".hand", .5, {x:0, rotation:0.02, ease:Sine.easeOut})

   .to(".tab-img-2", .5, {x:-140, rotation:0.02, ease:Sine.easeOut}, "slide1")
   .to(".hand", .5, {x:-125, rotation:0.02, ease:Sine.easeOut}, "slide1")
   .from(".tab-img-3", .5, {x:140, rotation:0.02, ease:Sine.easeOut}, "slide1")
   .to(".hand", .5, {x:0, rotation:0.02, ease:Sine.easeOut})

   .to(".tab-img-3", .5, {x:-140, rotation:0.02, ease:Sine.easeOut}, "slide2")
   .to(".hand", .5, {x:-125, rotation:0.02, ease:Sine.easeOut}, "slide2")
   .from(".tab-img-4", .5, {x:140, rotation:0.02, ease:Sine.easeOut}, "slide2")
   .to(".hand", .5, {x:-85, y:280, rotation:0.02, ease:Sine.easeOut})


   // 3rd frame animation
   
   .from(".text", .5, {alpha:0, ease:Sine.easeOut})
   .from(".cta", .5, {alpha:0, ease:Sine.easeOut})   
; 

tl2.to(".flower-1, .flower-3, .flower-5, .flower-7, .flower-9, .flower-11, .flower-13, .flower-15, .flower-17", 5, {rotation:390, repeat:2, yoyo:true, ease: SlowMo.ease.config( 1, 1, false)}, "rotate")
   .to(".flower-2, .flower-4, .flower-6, .flower-8, .flower-10, .flower-12, .flower-14, .flower-16 ", 5, {rotation:-390, repeat:2, yoyo:true, ease: SlowMo.ease.config( 1, 1, false)}, "rotate")
   .to(".top-left-flower-1, .bottom-right-flower-1 ", 11, {rotation:-610, ease: SlowMo.ease.config( 1, 1, false)}, "rotate")
   .to(".bottom-right-flower-2 ", 11, {rotation:610, ease: SlowMo.ease.config( 1, 1, false)}, "rotate")
;

/*-------------------------------------
  Add all timelines to master timeline...
---------------------------------------*/
masterTimeline.add([tl1, tl2]);


/*-------------------------------------
  After window load...
---------------------------------------*/   
window.onload = function()
{
  masterTimeline.play();
}


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = tl1.duration();
console.log(currentDuration); 
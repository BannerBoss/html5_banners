var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax(),
               tl2 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})  
   // Frame1 animation
   .staggerFrom(".heading", 1, {alpha:0, x:-10, rotation:0.02, ease:Elastic.easeOut.config(1,.75)}, .1)
   .from(".sub-heading", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.5")
   .from(".date", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut})
   .to("#frame_one", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:2})

   // Frame2 animation
   .from(".promo_box", .3, {scale:0, rotation:0.02, ease:Sine.easeOut})
   .from(".promo_text", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut})
   .from(".card", 1, {alpha:0, y:-80, rotation:0.02, ease:Elastic.easeOut.config(1,.75)})
   .to(".card", .5, {rotation:10, repeat:4, yoyo:true, ease:Sine.easeInOut}, "-=.25")
   .staggerFrom(".baby-sm-1, .baby-sm-2", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, .2, "-=2")
   .from(".tc", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut})
;

tl2.staggerFrom(".spoon, .purse", .5, {alpha:0, y:-10, rotation:0.02, ease:Sine.easeOut}, .1, "float")
   .to(".spoon, .cookies", 2, {x: "+=5", y: "-=5", rotation: 0.02, force3D:true, ease: Linear.easeNone}, "float1")
   .to(".spoon, .cookies", 2, {x: "-=5", y: "+=5",  rotation: 0.02, force3D:true, ease: Linear.easeNone})
   .to(".spoon, .cookies", 2, {x: "+=5", y: "-=1",  rotation: 0.02, force3D:true, ease: Linear.easeNone})

   .staggerFrom(".fish, .cookies", .5, {alpha:0, y:-10, rotation:0.02, ease:Sine.easeOut}, .1, "float")
   .to(".fish, .purse", 2, {x: "+=5", y: "-=5",  rotation: 0.02, force3D:true, ease: Linear.easeNone}, "float1")
   .to(".fish, .purse", 2, {x: "-=5", y: "+=5",  rotation: 0.02, force3D:true, ease: Linear.easeNone})
   .to(".fish, .purse", 2, {x: "+=5", y: "-=1",  rotation: 0.02, force3D:true, ease: Linear.easeNone}) 
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
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
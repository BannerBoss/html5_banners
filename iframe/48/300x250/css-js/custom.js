var banner = document.getElementById('banner');
var clickTag = document.querySelector('.clicktag');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();

               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})  
   .to(".poster", 2.25, {scale:.47, y:18, rotation:-4, ease:Elastic.easeOut.config(1, 0.45), delay:.5})
   .from(".heading", .5, {alpha:0, y:10, rotation:0.02, ease:Sine.easeOut}, "-=1") 
   .to(".poster", .5, {x:-60, rotation:-4, ease:Sine.easeOut})

   .to(".poster", 1.5, {scale:.5, rotation:-4, ease:Elastic.easeOut.config(1,.45)})
   .to(".poster", 1.5, {scale:.47, rotation:-4, ease:Elastic.easeOut.config(1, 0.45)}, "-=1.1")

   .from(".promo_text", .5, {alpha:0, y:10, rotation:0.02, ease:Sine.easeOut}, "-=.75")
   .from(".cta", 1, {alpha:0, y:50, rotation:0.02, ease:Elastic.easeOut.config(1,.75)}, "-=.25")
   .to(".cta", .14, {y:-3, repeat:3, yoyo:true, rotation:0.02, ease:Bounce.easeInOut}, "-=.25")

   .to(".poster", 1.35, {scale:.51, rotation:-4, ease:Elastic.easeOut.config(1,.45), delay:1})
   .to(".poster", 1.35, {scale:.47, rotation:-4, ease:Elastic.easeOut.config(1, 0.45)}, "-=1.1")
   .to(".cta", .14, {y:-3, repeat:3, yoyo:true, rotation:0.02, ease:Bounce.easeInOut}, "-=.25")

   .to(".poster", 1.35, {scale:.51, rotation:-4, ease:Elastic.easeOut.config(1,.45), delay:1})
   .to(".poster", 1.35, {scale:.47, rotation:-4, ease:Elastic.easeOut.config(1, 0.45)}, "-=1.1")
   .to(".cta", .14, {y:-3, repeat:3, yoyo:true, rotation:0.02, ease:Bounce.easeInOut}, "-=.25")

   .to(".poster", 1.35, {scale:.51, rotation:-4, ease:Elastic.easeOut.config(1,.45), delay:1})
   .to(".poster", 1.35, {scale:.47, rotation:-4, ease:Elastic.easeOut.config(1, 0.45)}, "-=1.1")
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


// Simple click
clickTag.addEventListener('click', function() {
  lemonpi.click();
});


// Hover effect
setTimeout(function(){ 
  clickTag.addEventListener('mouseover', function() {
    TweenMax.to(".cta", .5, {scale:1.05, rotation:0.02, ease:Sine.easeOut})
  });

  clickTag.addEventListener('mouseout', function() {
    TweenMax.to(".cta", 1, {scale:1, rotation:0.02, ease:Elastic.easeOut})
  });
}, masterTimeline.totalDuration()*1000);


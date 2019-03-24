var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:2}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"}) 
   // frame1 animation
   .from(".green_bg", .5, {x:-300, rotation:0.02, ease:Expo.easeOut})
   .from(".headline", .5, {alpha:0, x:-10, rotation:0.02, ease:Sine.easeOut})
   .to("#frame_one", .5, {alpha:0, ease:Sine.easeOut, delay:1})

   // frame2 animation
   .add(frameAnim(".man1", ".green_box", ".text1", ".man2", ".text2", ".man3", ".text3", "#frame_two"), "-=.5")

   // frame3 animation
   .from(".introduction", .5, {alpha:0, x:-10, rotation:0.02, ease:Sine.easeOut})
   .from(".logo_big", .5, {alpha:0, ease:Sine.easeOut})   
   .to("#frame_three", .5, {alpha:0, ease:Sine.easeOut, delay:.5})

   // frame4 animation
   .from(".man4", 1.8, {scale:1.1, rotation:0.02, ease:Sine.easeOut}, "-=.5")
   .from(".text4", .5, {alpha:0, x:-12, rotation:0.02, ease:Sine.easeOut}, "-=1.3")
   .from(".register", .5, {alpha:0, ease:Sine.easeOut}, "-=.7")
   .from(".blue_border", .3, {scaleY:0, rotation:0.02, ease:Sine.easeOut}, "-=.5")
   .to(".box", .5, {clip:"rect(0px 300px 250px 0px)", transformOrigin:"right", rotation:0.02, ease:Sine.easeOut}, "-=.2")
   .from(".logos", .5, {alpha:0, ease:Sine.easeOut})
;


function frameAnim(man1, box, text1, man2, text2, man3, text3, frame) {
  var tl = new TimelineMax();
  tl.from(man1, 1.8, {scale:1.3, rotation:0.02, ease:Sine.easeOut}, "-=.5")
    .from(box, .5, {x:-150, rotation:0.02, ease:Expo.easeOut}, "-=1.5")
    .from(text1, .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=1")

    .from(man2, .5, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.7})
    .from(man2, 1.8, {scale:1.3, rotation:0.02, ease:Sine.easeOut}, "-=.5")
    .to(text1, .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=1.5")
    .from(text2, .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=1")

    .from(man3, .5, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.7})
    .from(man3, 1.8, {scale:1.3, rotation:0.02, ease:Sine.easeOut}, "-=.5")
    .to(text2, .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=1.5")
    .from(text3, .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=1")

    .to(frame, .5, {alpha:0, ease:Sine.easeOut, delay:.5})
  ;
  return tl;
}


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


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
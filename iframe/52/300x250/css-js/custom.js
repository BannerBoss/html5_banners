var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   .set(".text1, .text2, .text3, .text4", {borderColor:"#ffffff"})
   .from(".a", .5, {alpha:0, x:15, ease:Sine.easeOut})
   .from(".text1", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=.25")
   .to(".text1", .6, {width:"258px", rotation:0.2, ease:Sine.easeOut})
   .from(".triangle2", 1, {alpha:0, transformOrigin:"center left", rotation:-50, ease:Sine.easeInOut}, "-=.5")
   .from(".triangle3", 1, {transformOrigin:"right bottom", rotation:-50, ease:Sine.easeInOut}, "-=.5")
   .from(".triangle1", 1, {alpha:0, transformOrigin:"50% 100%", rotation:-50, ease:Sine.easeInOut}, "-=.5")

   .to(".text1", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=1.5")
   .from(".cursor1", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=1")
   .from(".txt1b", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut}, "-=1")
   
   
   .to(".triangle1", 3, {transformOrigin:"50% 100%", rotation:360, ease:Sine.easeInOut})
   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:360, ease:Sine.easeInOut}, "-=3")
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:360, ease:Sine.easeInOut}, "-=3")

   .to(".a, .text1, .txt1b", .5, {alpha:0, ease:Sine.easeOut}, "-=2.75")
   .from(".purple", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=2.75")

   .from(".globally", .5, {alpha:0, x:15, ease:Sine.easeOut}, "-=2")
   .from(".text2", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=1.75")
   .to(".text2", .6, {width:"240px", rotation:0.2, ease:Sine.easeOut}, "-=1.5")
   .to(".text2", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=.75")
   .from(".cursor2", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=.2")

   
   .to(".triangle1", 3, {transformOrigin:"50% 100%", rotation:720, ease:Sine.easeInOut})
   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:720, ease:Sine.easeInOut}, "-=3")
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:720, ease:Sine.easeInOut}, "-=3")
   .to(".globally, .text2", .5, {alpha:0, ease:Sine.easeOut}, "-=2.75")
   .from(".skyblue", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=2.75")


   .from(".in", .5, {alpha:0, x:15, ease:Sine.easeOut}, "-=2")
   .from(".text3", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=1.75")
   .to(".text3", .8, {width:"149px", rotation:0.2, ease:Sine.easeOut}, "-=1.5")
   .to(".text3", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=.75")
   .from(".cursor3", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=.2")
   .from(".txt3b", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut}, "-=1")
   .from(".txt3c", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut}, "-=.25")
   .from(".txt3d", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut}, "-=.25")


   .to(".triangle1", 3, {transformOrigin:"50% 100%", rotation:1080, ease:Sine.easeInOut})
   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:1080, ease:Sine.easeInOut}, "-=3")
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:1080, ease:Sine.easeInOut}, "-=3")
   .to(".in, .text3, .txt3b, .txt3c, .txt3d", .5, {alpha:0, ease:Sine.easeOut}, "-=2.75")   
   .from(".blue", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=2.75")


   .from(".text5", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=2.5")
   .to(".text5", .6, {width:"112px", rotation:0.2, ease:Sine.easeOut}, "-=2.25")
   .to(".text5", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=2.25")
   .from(".cursor5", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=2")

   .from(".txt5b", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut}, "-=1.5")
   .from(".txt5c", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut})

   

   .from(".text6", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=.25")
   .to(".text6", .6, {width:"196px", rotation:0.2, ease:Sine.easeOut})
   .to(".text6", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut})
   .from(".cursor6", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut})

   .to(".triangle1", 3, {transformOrigin:"50% 100%", rotation:1440, ease:Sine.easeInOut})
   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:1440, ease:Sine.easeInOut}, "-=3")
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:1440, ease:Sine.easeInOut}, "-=3")
   .to(".be, .a, .text5, .txt5b, .txt5c, .text6", .5, {alpha:0, ease:Sine.easeOut}, "-=2.75")   
   .from(".green", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=2.75")


   .from(".text7", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=2.5")
   .to(".text7", .6, {width:"127px", rotation:0.2, ease:Sine.easeOut}, "-=2.25")
   .to(".text7", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=2.25")
   .from(".cursor7", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=2")

   .from(".txt6b", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut}, "-=1.5")
   .from(".txt6c", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut}, "-=1")


   .from(".cta", .8, {x:-200, rotation:0.02, ease:Expo.easeOut})
   .from(".cta_text", .5, {alpha:0, rotation:0.02, ease:Expo.easeOut}, "-=.25")
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


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();


/*-------------------------------------
   Timeline animation...
---------------------------------------*/
tl1.set(banner, {visibility: "visible"})
   .to(".centre-hole-bg", 2, {scale:40, ease:Power2.easeOut})
   .from(".text1", .5, {y:-10, alpha:0, ease:Sine.easeOut}, "-=1.5")
   .from(".g", .5, {y:-10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".o1", .5, {y:10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".o2", .5, {y:-10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".d", .5, {y:10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".m", .5, {y:-10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".o3", .5, {y:10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".r", .5, {y:-10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".n", .5, {y:10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".i", .5, {y:-10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".n1", .5, {y:10, alpha:0, ease:Quad.easeOut}, "-=1.1")
   .from(".g1", .5, {y:-10, alpha:0, ease:Quad.easeOut}, "-=1.1")

   .to("#frame2", .5, {alpha:0, ease:Quad.easeOut, delay:1})
   .from(".bg1", .5, {alpha:0, ease:Quad.easeOut})
   .from(".good_morning_top", .5, {alpha:0, ease:Quad.easeOut})
   .from(".text2", .5, {alpha:0, ease:Quad.easeOut}, "-=.25")
   .to(".text2", .5, {alpha:0, ease:Quad.easeOut, delay:1.5})
   .from(".text3", .5, {alpha:0, ease:Quad.easeOut})
   .to(".text3", .5, {alpha:0, ease:Quad.easeOut, delay:1.5})
   .from(".text4", .5, {alpha:0, ease:Quad.easeOut})

   .to("#frame3", .5, {alpha:0, ease:Quad.easeOut, delay:1.5})
   .from(".bg2", .5, {alpha:0, ease:Quad.easeOut})
   .from(".good_morning_anytime", .5, {alpha:0, ease:Sine.easeOut}, "-=.25")
   .to(".good_morning_anytime, .all_day_logo", .5, {alpha:0, ease:Quad.easeOut, delay:1.5})

   .from(".all_day_logo_big", .5, {alpha:0, ease:Quad.easeOut})
   .from(".cta", .5, {alpha:0, ease:Quad.easeOut}, "-=.15")
   .from(".tc", .5, {alpha:0, ease:Quad.easeOut}, "-=.15")
;
 

/*-------------------------------------
   Add all timelines to master timeline...
---------------------------------------*/
masterTimeline.add([tl1]);


/*-------------------------------------
   after window load...
---------------------------------------*/
window.onload = function()
{
    masterTimeline.play();
}
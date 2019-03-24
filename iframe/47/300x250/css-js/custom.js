var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:2}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})     
   .staggerFrom(".txt1", .5, {alpha:0, y:10, rotation:0.02, ease:Sine.easeOut}, .2, "zoom-in")
   .from(".mountains", 2.25, {scale:1.2, x:15, rotation:0.02, ease:Sine.easeOut}, "zoom-in")
   .to(".frm1_txt1, .frm1_txt2, .frm1_txt3", .5, {y:110, rotation:0.02, ease:Expo.easeIn, delay:.5}, "slide")
   .to(".frm1_txt4, .frm1_txt5", .5, {y:-110, rotation:0.02, ease:Expo.easeIn, delay:.5}, "slide")


   .from(".stroke", .45, {alpha:0, rotation:0.02, ease:Sine.easeOut})
   .to(".stroke", .45, {width:"10px", rotation:0.02, ease:Expo.easeOut}, "-=.35")
   .from(".frm2_txt1", .54, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.25")   
   .to(".frm2_txt1, .stroke", .45, {y:-54, rotation:0.02, ease:Sine.easeOut, delay:.2})
   .to(".mountains", .45, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.5")
   .from(".product1", .45, {x:-350, rotation:0.02, ease:Expo.easeOut}, "-=.25")
   .to(".line", .45, {clip:"rect(0px 350px 280px 0px)", rotation:0.02, ease:Sine.easeOut})
   .to(".top_line", .45, {transformOrigin:"left", rotation:-5, ease:Sine.easeOut})
   .to(".bottom_line", .45, {transformOrigin:"left", rotation:5, ease:Sine.easeOut}, "-=.5")
   .from(".product1_glow", .45, {alpha:0, rotation:0.02, ease:Sine.easeOut})
   .to(".product1_glow", .45, {alpha:0, rotation:0.02, ease:Sine.easeOut})
   .to(".frm2_txt1, .stroke", 1, {alpha:0, rotation:0.02, ease:Expo.easeOut},"fade-out")
   .to(".top_line", .45, {alpha:0, rotation:-5, ease:Sine.easeOut},"fade-out")
   .to(".bottom_line", .45, {alpha:0, rotation:5, ease:Sine.easeOut},"fade-out")
   .to(".product1", .5, {x:350, rotation:0.02, ease:Expo.easeOut}, "-=.75")


   .from(".product2, .product2_shadow", 1, {x:550, y:-200, rotation:-75, ease:Expo.easeInOut}, "-=.85")
   .staggerFrom(".txt2", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, .3)
   .to(".top_text_line", .5, {clip:"rect(0px 350px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.5")
   .to(".left_text_line", .5, {clip:"rect(0px 350px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.5")
   .to(".right_text_line", .5, {clip:"rect(0px 350px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.5")

   .to(".product2", 1, {y:-7, repeat:2, yoyo:true, rotation:0.02, ease:Sine.easeInOut}, "movement-=1")
   .to(".product2_shadow", 1, {y:7, repeat:2, yoyo:true, rotation:0.02, ease:Sine.easeInOut}, "movement-=1")
   .to(".top_text, .top_text_line", 1, {scale:0,  x:-5, y:35, rotation:0.02, ease:Expo.easeOut}, "scale-down")
   .to(".left_text, .left_text_line", 1, {scale:0,  x:20, y:0, rotation:0.02, ease:Expo.easeOut}, "scale-down")
   .to(".right_text, .right_text_line", 1, {scale:0,  x:-30, y:0, rotation:0.02, ease:Expo.easeOut}, "scale-down")
   .to(".product2, .product2_shadow", .85, {scale:1.1, x:-550, y:100, rotation:45, ease:Expo.easeInOut}, "-=.9")
   .to(".logo", .5, {alpha:0, rotation:0.02, ease:Expo.easeOut}, "-=.5")


   .from(".mid_ski", 1.5, {y:-200, rotation:0.02, ease:Elastic.easeInOut.config(1,.65)}, "-=.75")
   .from(".mid_ski_shadow", 1.5, {alpha:0, y:20, rotation:0.02, ease:Elastic.easeInOut.config(1,.65)}, "-=1.35")

   .from(".left1_ski", .75, {alpha:0, scale:.5, x:25, y:-15, transformOrigin:"top", rotation:-25, ease:Expo.easeInOut}, "ski-=.75")
   .from(".left2_ski", .75, {alpha:0, scale:.35, x:30, y:-20, transformOrigin:"top", rotation:-50, ease:Expo.easeInOut}, "ski-=.75")
   .from(".right1_ski", .75, {alpha:0, scale:.5, x:-25, y:-15, transformOrigin:"top", rotation:25, ease:Expo.easeInOut}, "ski-=.75")
   .from(".right2_ski", .75, {alpha:0, scale:.35, x:-30, y:-20, transformOrigin:"top", rotation:50, ease:Expo.easeInOut}, "ski-=.75")
   .from(".ski_number", .5, {scaleX:0, rotation:0.02, ease:Quad.easeInOut}, "ski-=.5")
   .from(".frm4_txt1", .5, {x:90, rotation:0.02, ease:Quad.easeInOut}, "ski-=.5")
   .from(".frm4_txt2", .5, {x:-110, rotation:0.02, ease:Quad.easeInOut}, "ski-=.5")
   .from(".cta", .4, {alpha:0, scaleX:0, rotation:0.02, ease:Quad.easeInOut})  
   .from(".cta_copy", .4, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.10") 
   .staggerFrom(".logo1, .head_logo", .4, {alpha:0, cycle:{y:[-15, 15]}, rotation:0.02, ease:Quad.easeInOut})
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
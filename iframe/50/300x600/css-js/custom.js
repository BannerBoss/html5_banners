var banner = document.getElementById('banner');


var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax(),
               tl2 = new TimelineMax({repeat:-1, repeatDelay:1.5}),
               tl3 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})  
   .to(".sony_bing", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.5})
   .add(slideIn(.1, 3, ".ronaldo1", ".text1", -270, 50, 200, -45, "easeInOut"))
   .to(".ronaldo1, .text1", .2, {alpha:0, rotation:0.02, ease:Sine.easeOut})

   .add(slideIn(.3, 5, ".ronaldo2", ".text2", 240, -20, -300, 10, "easeOut"), "-=.3")
   .to(".ronaldo2, .text2", .2, {alpha:0, rotation:0.02, ease:Sine.easeOut})

   .add(slideIn(.3, 5, ".ronaldo3", ".text3", -360, 40, 320, 25, "easeOut"), "-=.3")
   .to(".text3", .2, {alpha:0, rotation:0.02, ease:Sine.easeOut})

   .to(".ronaldo3", 1, {scale:1.09, x:48, y:-14, transformOrigin:"top", rotation:0.02, ease:Sine.easeOut}, "-=.2")
   .from(".sony_flow", 1, {y:-200, rotation:0.02, ease:Sine.easeOut}, "-=1")
   .to(".fifa18_logo_horiz_flat", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=1")
   .from(".fifa18_logo_stacked, .cta, .rating_logo", .5, {alpha:0, rotation:0.02, ease:Sine.easeOu}, "-=.25")
;

tl2.to(".line2", 1, {x:700, y:-700, rotation:0.02, ease:Sine.easeInOut, delay:.7})
   .to(".line3", 1, {x:560, y:-450, rotation:0.02, ease:Sine.easeInOut}, "-=.85")
   .to(".line1", 1, {x:500, y:-450, rotation:0.02, ease:Sine.easeInOut}, "-=.85")
   .to(".line4", 1, {x:900, y:-900, rotation:0.02, ease:Sine.easeInOut}, "-=1")
;

tl3.from(".bg", 9, {scale:1.2, rotation:0.02, ease:SlowMo.ease.config(1,1, false)});


function slideIn(duration1, duration2, obj, txt, xval1, xval2, xval3, xval4, easeVal){
 var tl = new TimelineMax();
 tl.from(obj, duration1, {x:xval1, rotation:0.02, ease:Sine.easeVal}, "slide1-=.5")
   .to(obj, duration2, {x:xval2, rotation:0.02, ease:Sine.easeOut}, "slide2-=.35")
   .from(txt, duration1, {x:xval3, rotation:0.02, ease:Sine.easeVal}, "slide1")
   .to(txt, duration2, {x:xval4, rotation:0.02, ease:Sine.easeOut}, "slide2-=.35")   
 ;

 return tl;
}


/*-------------------------------------
  Add all timelines to master timeline...
---------------------------------------*/
masterTimeline.add([tl1, tl3]);


/*-------------------------------------
  After window load...
---------------------------------------*/   
window.onload = function()
{
  masterTimeline.play();
}


// Hover animation
setTimeout(function(){ 
  banner.addEventListener("mouseover", function(){
    TweenMax.to(".ronaldo3", .5, {x:-380, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".sony_flow", .5, {y:-200, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".fifa18_logo_stacked, .rating_logo", .5, {alpha: 0, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".cta", .5, {y:-23, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".fifa18_logo_horiz_flat", .5, {alpha:1, y:93, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".hover_bg, .text4", .5, {alpha:1, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".bottom_effect", .5, {alpha:1, rotation:0.02, ease:Sine.easeOut});
    TweenMax.staggerTo(".top_effect1, .top_effect2, .top_effect3, .top_effect4", .3, {alpha:1, rotation:0.02, ease:Sine.easeOut}, .1);
    TweenMax.staggerTo(".bottom_effect1, .bottom_effect2, .bottom_effect3, .bottom_effect4", .3, {alpha:1, rotation:0.02, ease:Sine.easeOut}, .1);
  });


  banner.addEventListener("mouseout", function(){
    TweenMax.to(".ronaldo3", .5, {x:47, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".sony_flow", .5, {y:0, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".fifa18_logo_stacked, .rating_logo", .5, {alpha: 1, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".cta", .5, {y:0, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".fifa18_logo_horiz_flat", .3, {alpha:0, y:-70, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".hover_bg, .text4", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut});
    TweenMax.killTweensOf(".top_effect1, .top_effect2, .top_effect3, .top_effect4, bottom_effect1, .bottom_effect2, .bottom_effect3, .bottom_effect4");
    TweenMax.to(".top_effect1, .top_effect2, .top_effect3, .top_effect4", .3, {alpha:0, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".bottom_effect1, .bottom_effect2, .bottom_effect3, .bottom_effect4", .3, {alpha:0, rotation:0.02, ease:Sine.easeOut});
    TweenMax.to(".fifa18_logo_horiz_flat", .1, {y:0, rotation:0.02, ease:Sine.easeOut, delay:.5});
  });
}, masterTimeline.totalDuration()*1000);


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
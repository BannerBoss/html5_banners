var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true, repeat:2, repeatDelay:2.5});
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/ 
tl1.set(banner, {visibility: "visible"})
   .from(".txt1_1", .5, {alpha:0, ease:Sine.easeInOut})
   .from(".txt1_2", .5, {alpha:0, ease:Sine.easeInOut}, "-=.3")
   .from(".blue", .6, {alpha:0, y:70, rotation:.002, ease:Sine.easeOut, delay:1.5})
   .to(".txt1_1, .txt1_2", .3, {alpha:0, y:-40, rotation:.002, ease:Sine.easeOut}, "-=.5")
   .from(".txt2", .5, {alpha:0, ease:Sine.easeInOut})
   .from(".txt3", .5, {alpha:0, ease:Sine.easeInOut}, "-=.25")
   .to(".chocolate_bowl", 1, {y:-500, rotation:.002, ease:Sine.easeIn, delay:2})
   .to(".bg1", .35, { alpha:0,  ease:Sine.easeIn}, "-=.65")
   .from(".bg2", .8, { y:-20, alpha:.8, rotation:.002, ease:Sine.easeOut}, "-=.3")
	 .to(".new", .5, {scale:.85, x:-25, y:-20, rotation:.002, ease:Sine.easeOut}, "-=.5")
   .from(".logo", .5, {y:-6, rotation:.002, ease:Sine.easeOut}, "-=.5")
   .from(".txt4_1", .5, {y:-10, ease:Sine.easeInOut}, "-=.5")
   .from(".txt4_2", .5, {y:-10, ease:Sine.easeInOut}, "-=.5")
   .from(".nongmo", .6, {alpha:0, ease:Sine.easeOut})
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
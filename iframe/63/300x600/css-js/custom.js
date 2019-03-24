var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:2}),
               tl1 = new TimelineMax(),
               tl2 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   .from(".text1", .5, {alpha:0, y:15,  rotation:0.02, ease:Sine.easeOut})   
   .to(".text1", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:2})

   .from(".text2", .5, {alpha:0, y:15,  rotation:0.02, ease:Sine.easeOut}) 
   .to(".text2", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:2})

   .from(".text3", .5, {alpha:0, y:15,  rotation:0.02, ease:Sine.easeOut})
   .from(".cta", .5, {autoAlpha:0, display:"none", rotation:0.02, ease:Sine.easeOut, onComplete:hoverInOut})
;

tl2.to(".girl", 10, {bezier:{type:"cubic", values:[{x:0, y:0, rotation:0}, {x:-91, y:-65, rotation:-35}, {x:-111, y:-85, rotation:-15}, {x:-128, y:-94, rotation:0}]}, ease:Sine.easeOut}, "pool")
   .to(".bin_bag", 10, {bezier:{type:"cubic", values:[{x:0, y:0, rotation:0}, {x:-80, y:5, rotation:25}, {x:-170, y:10, rotation:10}, {x:-194, y:14, rotation:0}]}, ease:Sine.easeOut}, "pool")
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


/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  banner.addEventListener("mouseover", function(){
    TweenMax.to(".cta", .4, {alpha:1, scale:1.1, rotation:0.02, boxShadow:"0px 0px 40px 0px rgba(0,0,0,0.25)", ease:Sine.easeInOut});
  })

  banner.addEventListener("mouseout", function(){
    TweenMax.to(".cta", .4, {alpha:1, scale:1, rotation:0.02, boxShadow:"0px 0px 0px 0px rgba(0,0,0,0)", ease:Sine.easeInOut});
  })
}


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
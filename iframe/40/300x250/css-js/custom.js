var banner = document.getElementById('banner');
var ctaAnimation = false;

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:1.5}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   .add(function(){ctaAnimation = false;})
   .from(".txt1", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut})
   .add(snowFlow(), "+=.5")
   .from(".bg2", .5, {alpha:0, ease:Sine.easeInOut}, "=-.75")

   .from(".txt2-1", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut}, "-=.2")
   .to(".txt2-1", .5, {alpha:0, ease:Sine.easeOut, delay:1})
   .from(".txt2-2", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut})

   .from(".green_box", .5, {y:220, rotation:0.02, ease:Sine.easeOut, delay:1})
   .to(".txt2-2", .5, {y: -175, rotation:0.02, ease:Sine.easeOut}, "-=.45")

   .from(".bg1, #canvas", .5, {alpha:0, ease:Sine.easeOut, delay:2})   
   .to(".fade1", .1, {alpha:0, ease:Sine.easeOut})
   .to(".bg1, #canvas", .5, {alpha:0, ease:Sine.easeOut, delay:1.5})
   .from(".logo", .5, {alpha:0, ease:Sine.easeInOut}, "=-.25")
   .from(".txt3", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut})
   .from(".txt4", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut, onComplete:hoverInOut}, "-=.25")
;

function snowFlow(){
  var tl = new TimelineMax();
  tl.to(".snow",  1, {alpha:0, scale:1, x: -150, y: -100, rotation:0.02, ease:Sine.easeInOut})   
    .to(".snow1", 1, {alpha:0, scale:1, x: -150, y: -100, rotation:0.02, ease:Sine.easeInOut}, "-=.8")   
    .to(".snow2", 1, {alpha:0, scale:1, x: -150, y: -100, rotation:0.02, ease:Sine.easeInOut}, "-=.8")   
    .to(".snow3", 1, {alpha:0, scale:1, x: -150, y: -100, rotation:0.02, ease:Sine.easeInOut}, "-=.8")   
    .to(".snow4", 1, {alpha:0, scale:1, x: -150, y: -100, rotation:0.02, ease:Sine.easeInOut}, "-=.8")   
    .to(".snow5", 1, {alpha:0, scale:1, x: -150, y: -100, rotation:0.02, ease:Sine.easeInOut}, "-=.8")   
    .to(".snow6", 1, {alpha:0, scale:1, x: -150, y: -100, rotation:0.02, ease:Sine.easeInOut}, "-=.8")   
    .to(".snow7", 1, {alpha:0, scale:1, x: -150, y: -100, rotation:0.02, ease:Sine.easeInOut}, "-=.8")   
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


/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

banner.addEventListener("mouseover", function(){
  if(ctaAnimation)
  TweenMax.to(".txt4", .4, {scale:1.1, rotation:0.02, ease:Sine.easeInOut});
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation)
  TweenMax.to(".txt4", .4, {scale:1, rotation:0.02, ease:Sine.easeInOut});
})




/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
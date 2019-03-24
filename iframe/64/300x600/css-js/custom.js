var banner = document.getElementById('banner');
var ctaAnimation = false;

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})    
   	.add(function(){ctaAnimation = false;})
	.set(".cta_hover", {alpha:0})
   	.from(".be", .5, {alpha:0, x:-20, rotation:0.02, ease:Sine.easeOut})
	.staggerFrom(".txt", .5, {alpha:0, x:50, rotation:0.02, ease:Sine.easeOut}, .1, "-=.25")
    .staggerTo(".txt", .75, {cycle:{x:[125, 25,-23,2,-95,-26,8,-25,0],y:[0,0,0,0,3,0,0,0,0], rotation:[0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02],rotationX:[0.02,0.02,0.02,0,0,0,0,0,0]}, ease:Sine.easeOut}, 0, "+=0.2")
	.to(".txt1", 1, {alpha:0, x:200, rotation:0.02, ease:Expo.easeInOut, delay:.5}, "fade")
   	.to(".be", .7, {alpha:0, x:-20, ease:Sine.easeInOut, delay:.5}, "fade")
   	.add("fnum","-=.2")
   	.to(".line1", .5, {clip:"rect(0px 300px 180px 0px)", rotation:0.02, ease:Power2.easeInOut}, "fnum")
   	.to(".number", 1, {backgroundPosition:"0px -4185px", ease:SteppedEase.config(31)}, "fnum+=.2")
   	.staggerFrom(".txt2, .txt3", .45, {alpha:0, cycle:{y:[-0, 15]}, rotation:0.02, ease:Sine.easeOut}, .4, "fnum+=.2")
	  .to(".line1", .5, {clip:"rect(0px 300px 0px 0px)", rotation:0.02, ease:Power2.easeInOut, delay:.5}, "move")
    .staggerTo(".txt2, .txt3, .number", .75, {x:-300, rotation: 0.02, ease:Sine.easeInOut,delay:.5}, .08, "move")
   		 
   	.add("pan")
   	.to(".line2", .5, {clip:"rect(0px 100px 600px 0px)", rotation:0.02, ease:Power2.easeInOut}, "pan")
	.staggerFrom(".txt4", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeInOut}, .1, "pan")
	.from(".camera1", .5, {alpha: 0, rotation: 0.02, ease:Sine.easeIn}, "pan")
   	.to("#frame_three", .7, {x:-300, rotation: 0.02, ease:Sine.easeInOut}, "pan+=2")
   
	.from(".badge", .25, {alpha: 0, rotation: 0.02, ease:Sine.easeIn}, "-=.3")
   	.to(".badge", .4, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "+=1.4")
   	.to(".bg_copy", .5, {alpha:0, rotation: 0.02, ease:Sine.easeOut})

   	.from(".camera", .7, {alpha: 0, x:-40, scale:.92, rotation:0.02, ease:Sine.easeInOut}, "-=.7")
   	.from(".r_logo", .4, {alpha: 0, x: 15, rotation: 0.02, ease:Sine.easeOut})
	.add("pan1","-=.2")
   	.from(".be_4th", .75, {x:40, rotation: 0.02, ease:Sine.easeInOut}, "pan1")
   	.from(".alpha", .75, {x:-100, rotation: 0.02, ease:Sine.easeInOut}, "pan1")
	.from(".top", .25, {width:0, rotation: 0.02, ease:Sine.easeInOut})
   	.from(".right", .25, {height:0, rotation: 0.02, ease:Sine.easeInOut}, "-=.05")
   	.from(".bottom", .25, {width:0, rotation: 0.02, ease:Sine.easeInOut}, "-=.05")
   	.from(".left", .25, {height:0, rotation: 0.02, ease:Sine.easeInOut}, "-=.05")
   	.from(".cta", .4, {alpha: 0, rotation: 0.02, ease:Sine.easeInOut})
	.to(".cta_hover", .12, {alpha: 0.5, rotation: 0.02, ease:Sine.easeInOut, repeat:3, yoyo:true, onComplete:hoverInOut})
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


/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

banner.addEventListener("mouseover", function(){
  if(ctaAnimation)
  TweenMax.to(".cta_hover", .4, {alpha:1, rotation:0.02, ease:Sine.easeInOut});
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation)
  TweenMax.to(".cta_hover", .4, {alpha:0, rotation:0.02, ease:Sine.easeInOut});
})


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
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
   .from(".be, .confident", .8, {alpha:0, scale:0, rotation:0.02, ease:Sine.easeIn})
   .to(".be, .confident", .6, {scale:1, rotation:0.02, ease:Expo.easeOut})
	 .to(".confident", .75, {alpha:0, x:200, rotation:0.02, ease:Expo.easeInOut, delay:1}, "fade")
   .to(".be", .5, {alpha:0, x:-20, ease:Sine.easeInOut, delay:1}, "fade")
   
   .to(".line", .5, {clip:"rect(200px 300px 250px 0px)", rotation:0.02, ease:Sine.easeOut}, "-=.25")
	 .from(".card1, .card2", .5, {alpha:0, rotation:0.02, ease:Sine.easeInOut}, "-=.5")
   .add("pan","+=.2")
	 .to(".card1", .6, {x:-45, rotation:0.02, ease:Sine.easeInOut}, "pan")
	 .to(".card2", .6, {x:44, rotation:0.02, ease:Sine.easeInOut}, "pan")
   .from(".txt2a, .txt2", .6, {x:100, rotation: 0.02, ease:Sine.easeInOut}, "pan")
   .from(".txt3a, .txt3", .6, {x:-100, rotation: 0.02, ease:Sine.easeInOut}, "pan")
	 .to(".txt2a, .txt3a", .2, {alpha:0, rotation: 0.02, ease:Sine.easeInOut}, "pan+=.6")
   
   .to(".txt2, .txt3", .7, {alpha:0, y:-10, rotation:0.02, ease:Sine.easeOut, delay:1})
	 .add("pan1","-=.2")
	 .from(".memory_card, .frames", .1, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "pan1-=.1")
	 .from(".images", .7, {y:-120, rotation:0.02, ease:Sine.easeOut}, "pan1")
   .from(".txt4", .7, {alpha:0, y:10, rotation:0.02, ease:Sine.easeOut}, "pan1")
   .add("pan1_out","+=1.75")
	 .to(".cards, .card1, .card2", .1, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "pan1_out-=.1")
	 .to(".txt4", .6, {alpha:0, y:-20, rotation:0.02, ease:Sine.easeOut}, "pan1_out")
	 .to(".image1, .frame1", .4, {x:45, rotation:0.02, ease:Expo.easeInOut}, "pan1_out")
	 .to(".image2, .frame2", .4, {x:-44, rotation:0.02, ease:Expo.easeInOut}, "pan1_out")
	 .to(".image1, .image2, .frames", .5, {alpha:0, rotation:0.02, ease:Expo.easeOut}, "-=.3")
	 .to(".line", .5, {clip:"rect(250px 300px 250px 0px)", rotation:0.02, ease:Expo.easeOut}, "-=.5")
	 
	 
	 .from(".badge", .25, {alpha: 0, rotation: 0.02, ease:Sine.easeIn})
   .to(".badge", .4, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "+=1.4")
   .to(".bg_copy", .5, {alpha:0, rotation: 0.02, ease:Sine.easeOut})

   .from(".camera", .7, {alpha: 0, x:-40, scale:.92, rotation:0.02, ease:Sine.easeInOut}, "-=.5")
   .from(".r_logo", .4, {alpha: 0, x: 15, rotation: 0.02, ease:Sine.easeOut})
	 .add("pan2","-=.2")
   .from(".be_4th", .75, {x:40, rotation: 0.02, ease:Sine.easeInOut}, "pan2")
   .from(".alpha", .75, {x:-100, rotation: 0.02, ease:Sine.easeInOut}, "pan2")
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
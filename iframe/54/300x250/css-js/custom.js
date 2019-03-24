var banner = document.getElementById('banner');
var ctaAnimation = false;

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:2}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})   
   .add(function(){if(ctaAnimation){TweenMax.set(".cta, .cta_hover", {alpha:0})}})
   .add(function(){ctaAnimation = false;})
   .set(".cta_hover", {alpha:0, display:"none", visibility:"hidden"})

   .addLabel("anim1")
   .to(".pic1", 4, {scale:1.3, rotation:0.02, transformOrigin:"20px center",  ease:Sine.easeOut}, "anim1") 
   .from(".purple_box", 1.5, {x:180, rotation:0.02, ease:'easeInOutQuint'}, "anim1")
   .staggerFrom(".green, .green_box", .8, {x:180, rotation:0.02, ease:'easeInOutQuad'}, .1, "anim1+=.5") 
   .staggerFrom(".text1", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut}, .2, "anim1+=1.4")
   .from(".pic2", .1, {alpha:0, ease:Sine.easeOut}, "anim1+=1.4")
   .to(".green, .text1", .3, {alpha:0, ease:Sine.easeOut, delay:1})
   .to(".purple_box, .green_box, .pic1", 1.4, {x:-300, rotation:0.02, ease:'easeInOutQuint'}, "slide-in-=.2")
   .from(".pic2", 1.4, {x:300, rotation:0.02, ease:'easeInOutQuint'}, "slide-in-=.2")

   .addLabel("anim2")
   .to(".pic2", 4, {scale:1.3, rotation:0.02, transformOrigin:"20px center",  ease:Sine.easeOut}, "anim2-=1") 
   .from(".purple_box2", 1.5, {x:180, rotation:0.02, ease:'easeInOutQuint'}, "anim2-=.5")
   .staggerFrom(".green2, .green_box2", .8, {x:180, rotation:0.02, ease:'easeInOutQuad'}, .1, "anim2") 
   .staggerFrom(".text2", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut}, .2, "anim2+=1")
   .from(".bg", .1, {alpha:0, ease:Sine.easeOut}, "anim2+=1")
   .to(".green2, .text2", .3, {alpha:0, ease:Sine.easeOut, delay:1})
   .to(".purple_box2, .green_box2", 1.4, {x:-300, rotation:0.02, ease:'easeInOutQuint'}, "slide-in1-=.2")
   .to(".pic2", 1.4, {x:-300, rotation:0.02, ease:'easeInOutQuint'}, "slide-in1-=.2")
   .from(".bg", 1.4, {x:300, rotation:0.02, ease:'easeInOutQuint'}, "slide-in1-=.2")

   .from(".hand", .75, {x:-200, y:20, rotation:0.02, ease:Sine.easeOut}, "=-.4")
   .from(".text3", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut})
   .from(".cta", .5, {alpha:0, y:15, rotation:0.02, ease:Sine.easeOut})
   .from(".logo", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut, onComplete:function(){ctaAnimation = true;}})
;


/*-------------------------------------
  Add all timelines to master timeline...
---------------------------------------*/
masterTimeline.add([tl1]);


banner.addEventListener("mouseover", function(){
  if(ctaAnimation){
    TweenMax.to(".cta", .5, {alpha:0, ease:Sine.easeOut});
    TweenMax.to(".cta_hover", .5, {alpha:1, display:"block", visibility:"visible", ease:Sine.easeOut});
  }  
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation){
    TweenMax.to(".cta_hover", .5, {alpha:0, display:"none", visibility:"hidden", ease:Sine.easeOut});
    TweenMax.to(".cta", .5, {alpha:1, ease:Sine.easeOut});
  }  
})

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
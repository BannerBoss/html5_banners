var banner = document.getElementById('banner');
var ctaAnimation = false;

var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:2}),
// var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   .add(function(){ctaAnimation = false;}) 
   .to(".sprite", 3.5, {x: -4200, rotation:0.02, ease:SteppedEase.config(14)}, "spriteAnim")
   .from(".frm1_txt1", .5, {alpha:0, scale:2, rotation:0.02, ease:Sine.easeInOut}, "spriteAnim")

   .to(".frm1_txt1", .5, {y:-48, rotation:0.02, ease:Sine.easeInOut}, "spriteAnim+=1")
   .from(".frm1_txt2", .5, {alpha:0, y:48, rotation:0.02, ease:Sine.easeInOut}, "spriteAnim+=1.2")
   .staggerTo(".frm1_txt1, .frm1_txt2", .75, {alpha:0, cycle:{y:[-96, -48]}, rotation:0.02, ease:Sine.easeInOut}, .2, "spriteAnim+=2.25")

   .staggerFrom(".ski-4, .ski-3, .ski-2, .ski-1, .ski-7, .ski-6, .ski-5", .5, {alpha:0, cycle:{y:[-100, -80,-60, 10, 10, 80, 100]}, rotation:0.02, ease:Sine.easeInOut}, "spriteAnim+=2.25")
   .staggerFrom(".txt2", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, .3)

   .to(".top_left_txt_line", .5, {clip:"rect(0px 125px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.75")
   .to(".top_right_txt_line", .5, {clip:"rect(0px 260px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.75")
   .to(".bottom_right_txt_line", .5, {clip:"rect(0px 320px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.75")
   .to(".bottom_left_txt_line", .5, {clip:"rect(0px 130px 280px 0px)", rotation:0.02, ease:Sine.easeOut}, "draw-=.75")

   .to(".top_skies", 1, {y:-7, repeat:4, yoyo:true, rotation:0.02, ease:Sine.easeInOut}, "float-=1.25")
   .to(".bottom_skies", 1, {y:7, repeat:4, yoyo:true, rotation:0.02, ease:Sine.easeInOut}, "float-=1.25")

   .staggerTo(".txt2, .txt_line, .sprite, .logo", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "fade-up-=.5")
   .staggerTo(".ski-4, .ski-3, .ski-2, .ski-1, .ski-7, .ski-6, .ski-5", .5, {alpha:0, cycle:{y:[-100, -80,-60, -20, 20, 80, 100]}, rotation:0.02, ease:Sine.easeInOut}, "fade-up")

   .staggerFrom(".products", .5, {x:-300, rotation:0.02, ease:Sine.easeInOut}, .2) 
   .staggerFrom(".txt3", .5, {alpha:0, ease:Sine.easeInOut}, .2, "-=.25") 
   .from(".cta", .5, {x:-300, rotation:0.02, ease:Sine.easeInOut}, "-=.25") 
   .from(".head_logo, .logo1", .5, {alpha:0, ease:Sine.easeInOut, onComplete:hoverInOut})
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
  TweenMax.to(".cta", .4, {scale:1.1, rotation:0.02, ease:Sine.easeInOut});
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation)
  TweenMax.to(".cta", .4, {scale:1, rotation:0.02, ease:Sine.easeInOut});
})


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 
var banner = document.getElementById('banner');
var replay = document.getElementById('replay');


var masterTimeline = new TimelineMax({paused:true, repeat:1, repeatDelay:.5}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   // Frame1 animation
   .from(".phone-big, .left-open-eye, .right-open-eye", .3, {x:200, y:250, rotation:0.02, ease:Sine.easeOut})
   .to(".left-open-eye, .right-open-eye", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut})
   .from(".blink", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".blink", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".left-open-eye, .right-open-eye", .0001, {alpha:1, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".right-open-eye", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .from(".wink", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".wink", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOu, delay:.13})
   .to(".right-open-eye", .0001, {alpha:1, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".phone-big, .left-open-eye, .right-open-eye", .3, {x:200, y:250, rotation:0.02, ease:Sine.easeOut, delay:.3})
  

   // Frame2 animation
   .from(".introducing_fairprice", .2, {alpha:0, scale:1.1, rotation:0.02, ease:Expo.easeOut})
   .from(".on", .3, {y:-200, rotation:0.02, ease:Sine.easeIn, onComplete:shake}, "-=.2")
   .to("#frame_two", .3, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.5})

   // Frame3 animation
   .from(".new_name", .2, {alpha:0, ease:Sine.easeOut})
   .from(".phone-sm, .open_eye-sm", .3, {x:-100, y:100, rotation:0.02, ease:Sine.easeOut})
   .to(".open_eye-sm", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut})
   .from(".wink_sm", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".wink_sm", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".open_eye-sm", .0001, {alpha:1, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".open_eye-sm", .0001, {alpha:0, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to(".wink_sm", .0001, {alpha:1, rotation:0.02, ease:Sine.easeOut, delay:.13})
   .to("#frame_three", .3, {alpha:0, rotation:0.02, ease:Expo.easeOut, delay:.3})

   // Frame4 animation
   .from(".new-ex", .1, {alpha:0, ease:Expo.easeOut})
   .to(".new-ex-copy", .3, {alpha:1, ease:Sine.easeOut})
   .to(".new-ex", 1, { backgroundPosition:"-15300px 0px", ease:SteppedEase.config(51)})
   .to(".new-ex-copy", .3, {alpha:0, ease:Sine.easeOut})



   // Frame5 animation
   .fromTo(".first-anim", .3, {x:0, y:-480}, {x:0, y:0,  ease:'Sine.easeOut'},"same1")
   .fromTo(".mobile-shadow", .3, {alpha:0}, {y:-10,alpha:1,  ease:'Sine.easeOut'},"same1")
   .set(".mobile-shadow",{alpha:0})
   .to(".first-anim, .new-ex", .2, {alpha:0, ease:Expo.easeOut})
   .from(".second-anim", .2, {alpha:0, ease:Expo.easeOut}, "-=.2")
   .to(".second-anim", .4, { backgroundPosition:"-600px 0px", rotation:0.02, ease:SteppedEase.config(2), repeat:2, repeatDelay:0.33})
   .to("#frame_five", .3, {alpha:0, rotation:0.02, ease:Expo.easeOut})

   // Frame6 animation
   .from(".logo", .3, {alpha:0, ease:Sine.easeOut})
   .from(".promo", .3, {scale:0, transformOrigin:"center",  ease:Expo.easeOut}, "-=.25")
   .from(".tc", .3, {alpha:0, ease:Sine.easeOut}, "-=.25")
   .to(".logo, .promo, .tc", .3, {alpha:0, rotation:0.02, ease:Expo.easeOut, delay:4})
   .from(".fairprice_on", .3, {alpha:0, ease:Sine.easeOut})
   .from(".cta1", .3, {alpha:0, ease:Sine.easeOut})
   .from(".cta2", .3, {alpha:0, ease:Sine.easeOut})
   
;


function shake() {
  var tl = new TimelineMax();
  tl.from(".introducing_fairprice, .on", 0.3, {x:2, y:2, ease: RoughEase.ease.config({ strength: 4, points: 10, taper: "none", randomize: true, clamp: false})})
    .set(".introducing_fairprice, .on", {x:0, y:0});
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


replay.addEventListener("click", restartAnim);

// repeat animation...
function restartAnim() {
    masterTimeline.pause(0);
    TweenMax.to("#replay", .1, {alpha:0, visibility:"hidden", display:"none", ease:Sine.easeOut});
    masterTimeline.restart(); 
    setTimeout(function() {
      TweenMax.to("#replay", .1, {alpha:1, visibility:"visible", display:"block", ease:Sine.easeOut});
    }, currentDuration*1000)
}



/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 

setTimeout(function() {
  TweenMax.to("#replay", .1, {alpha:1, visibility:"visible", display:"block", ease:Sine.easeOut});
}, currentDuration*1000)
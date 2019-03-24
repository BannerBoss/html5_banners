var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();

// ---- Animation Timelines ------  
tl1.set(banner, {visibility: "visible"})

   // Frame1 animation
   .from(".logo", .2, {alpha:0, ease:Sine.easeOut})
   .to("#frame_one", 1.2, {x:-300, rotation:0.02, ease:Expo.easeOut, delay:1}, "slide-in")

   // Frame2 animation
   .from(".mobile", 1.2, {x:300, rotation:0.02, ease:Expo.easeOut, delay:1}, "slide-in")   
   .from(".pen", .5, {x:-150, y:100, rotation:0.02, ease:Sine.easeOutIn, onComplete:bulb_on}, "-=.15")
   .to(".pen", .3, {x:-10, y:8, rotation:0.02, ease:Sine.easeOutIn})
   .to(".light_off, .light_on", 1.2, {x:-300, rotation:0.02, ease:Expo.easeOut, delay:2}, "slide-out")
   .to(".bubble-1, .txt2, .txt2-1, .glow", 1.2, {x:-300, rotation:0.02, ease:Expo.easeOut, delay:2}, "slide-out")
   .to(".glow", 1.2, {alpha:0, rotation:0.02, ease:Expo.easeOut, delay:2}, "slide-out")

   // Frame3 animation
   .from(".vacuum_bg, .vacuum, .txt3, .txt3-1", 1.2, {x:300, rotation:0.02, ease:Expo.easeOut, delay:2}, "slide-out")
   .to(".pen", .3, {x:-10, y:35, rotation:0.02, ease:Sine.easeOutIn})
   .to(".pen", .3, {x:5, y:25, rotation:0.02, ease:Sine.easeOutIn, onComplete:vacuum_on}, "-=.15")
   .to(".pen", .3, {x:-10, y:35, rotation:0.02, ease:Sine.easeOutIn})
   .to(".mobile, #frame_three", 1.2, {x:-350, rotation:0.02, ease:Expo.easeOut, delay:2}, "slide-out1")
   

   // Frame4 animation
   .from("#frame_four", 1.2, {x:300, rotation:0.02, ease:Expo.easeOut, delay:2}, "slide-out1")
   .to(".hand1, .txt4, .logo", .4, {alpha:0, rotation:0.02, ease:Quad.easeOut, delay:1})

   // Frame5 animation
   .from(".logo_big, .device, .cta", .5, {alpha:0, ease:Sine.easeOut})

   ;


function bulb_on(){
  TweenMax.to(".bulb_on, .bubble-1", .5, {alpha:1, rotation:0.02, ease:Expo.easeOut});
  TweenMax.to(".light_off", .5, {alpha:0, rotation:0.02, ease:Expo.easeOut}); 
  TweenMax.to(".glow", .4, {alpha:1, scale:1, repeat:4, yoyo:true, rotation:0.02, ease:Sine.easeOut});
}

function vacuum_on(){ 
  TweenMax.to(".vacuum_on, .bubble-2", .5, {alpha:1, rotation:0.02, ease:Expo.easeOut}); 
  TweenMax.to(".vacuum", 3, {x: 80, y:35, rotation:0.02, ease:Sine.easeOut});
  TweenMax.to(".glow1", .4, {alpha:1, scale:1, repeat:8, yoyo:true, rotation:0.02, ease:Sine.easeOut});
}



//Add all timelines to master timeline...
masterTimeline.add([tl1]);

//----- Window Onload ------
window.onload = function() { 
    initEB();
    masterTimeline.play();
};

function initEB(){
    if (!EB.isInitialized()){
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, masterTimeline.play());
    }else{
        masterTimeline.play();
    }

    banner.addEventListener("click", function(event){
        EB.clickthrough();
    });
}


//count animation duration of a timeline...
var currentDuration = tl1.duration();
console.log(currentDuration); 
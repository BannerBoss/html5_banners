var banner = document.getElementById('banner');
var mtl = new TimelineMax({paused:true});

  
  // ---- Animation Timelines ------  
  mtl.set(banner, {visibility: "visible"})
     .to("#feature", 1.2, {opacity:1,  ease: Power2.easeOut})
     .from(".boxes", 1, {x:"+=444", rotation:0.02,  ease:Power4.easeOut})
     .to(".box2", .2, {x:"-=37", rotation:0.02,  ease:Sine.easeOut}, "-=.1")     
     .to(".box3", .2, {x:"-=74", rotation:0.02,  ease:Sine.easeOut}, "-=.05")     
     .to(".box4", .2, {x:"-=112", rotation:0.02,  ease:Sine.easeOut}, "-=.05")     
     .to(".box5", .2, {x:"-=149", rotation:0.02,  ease:Sine.easeOut}, "-=.05") 
     .to(".box6", .2, {x:"-=186", rotation:0.02,  ease:Sine.easeOut}, "-=.05")     
     .to(".box7", .2, {x:"-=223", rotation:0.02,  ease:Sine.easeOut}, "-=.05")     
     .to(".box8", .2, {x:"-=260", rotation:0.02,  ease:Sine.easeOut}, "-=.05")     
     .to(".box9", .2, {x:"-=297", rotation:0.02,  ease:Sine.easeOut}, "-=.05")     
     .to(".box10", .2, {x:"-=334", rotation:0.02,  ease:Sine.easeOut}, "-=.05")     
     .to(".box11", .2, {x:"-=371", rotation:0.02,  ease:Sine.easeOut}, "-=.05")     
     .to(".box12", .2, {x:"-=408", rotation:0.02,  ease:Sine.easeOut}, "-=.05")

     .from(".logo_f", 1.5, {alpha:0, x:-154, scale:.7, y:10, rotation:0.02, ease:Sine.easeOut})    
     .to(".boxes", .2, {alpha:0, x:"+=10", rotation:0.02,  ease:Sine.easeOut}, "-=1.5")  
     .from(".logo", .8, {alpha:0, ease:Sine.easeOut}, "-=.03")
     .from(".copy01", .5, {alpha:0, ease:Sine.easeOut}, "-=0.6") 
     .from(".ctabox, .ctacopy", .3, {opacity:0, ease: Power2.easeOut})  
     .from(".ctacopy01", .5, {alpha:0, ease:Sine.easeOut, delay:.08}) 
     
;


//----- Window Onload ------
window.onload = function() { 
    mtl.play();
};


// ----------------- Seek/timeScale/Duration -----------------------
var currentDuration = mtl.totalDuration();
console.log(currentDuration); 
var banner = document.getElementById('banner');
var mtl = new TimelineMax({paused:true, repeat:1, repeatDelay:2});
var tl1 = new TimelineMax();

  
  // ---- Animation Timelines ------  
  tl1.set(banner, {visibility: "visible"})
.staggerFrom(".redcircle", .6, {x:-150, y:-150, alpha:0, rotation:0.02, ease:Sine.easeOut}, .1)
.staggerFrom(".copy01", .6, {alpha:0,y:10, rotation:0.02, ease:Sine.easeOut}, .3)
.from(".shompologo", .4, {alpha:0, rotation:0.02, ease:Sine.easeOut})
.to(".redcircle,.copy01,.shompologo", .3,{alpha:0, delay:3})
.staggerFrom(".bluecircle", .6, {x:150, y:150, alpha:0, rotation:0.02, ease:Sine.easeOut}, .1)
.staggerFrom(".copy02", .6, {alpha:0,y:10, rotation:0.02, ease:Sine.easeOut}, .3)
.from(".logo02", .4, { alpha:0, rotation:0.02, ease:Sine.easeOut}) 
.to(".bluecircle,.copy02", .3,{alpha:0, delay:3})
.to(".logo02", .6,{y:180,rotation:0.02, ease:Sine.easeOut})
.staggerFrom(".silvercircle", .6, {x:150, y:-150, alpha:0, rotation:0.02, ease:Sine.easeOut}, .1)
.from(".copy05", .4, { alpha:0, rotation:0.02, ease:Sine.easeOut}) 
	;


//----- Merge TimeLines -----
    mtl.add([tl1]);

//----- Window Onload ------
window.onload = function() { 
    mtl.play();

};



var currentDuration = mtl.totalDuration();
console.log(currentDuration); 
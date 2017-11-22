var banner = document.getElementById('banner');
var replay = document.getElementById('replay');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();


//Timeline animation...
tl1.set(banner, {visibility: "visible"})
   //frame 1 animation
   .from(".lenovo_logo", .4, {x:40, rotation:0.02, ease:Power2.easeOut})  
   .add('brick', "-=.25")
   .from(".tablet_keyboard", .4, {alpha:0, x:130, y:60, scale: 0, rotation:0.02, ease:Sine.easeOut}, "brick") 
   .from(".tablet_monitor", .4, {alpha:0, x:130, y:50, scale: 0, rotation:0.02, ease:Sine.easeOut}, "brick")

   .from(".brick1", .4, {x:186, y:-60, rotation:0.02, ease:Quad.easeInOut}, "brick-=.25")
   .from(".brick2", .2, {x:168, y:-88, rotation:0.02, ease:Quad.easeInOut}, "brick+=.20")
   .from(".brick3", .3, {x:194, rotation:0.02, ease:Quad.easeInOut}, "brick+=.10")
   .from(".brick4", .3, {x:222, y:-15, rotation:0.02,  ease:Quad.easeInOut}, "brick-=.10")
   .from(".brick5", .2, {x:234, y:-22, rotation:0.02,  ease:Quad.easeInOut}, "brick+=.015")
   .from(".brick6", .4, {x:120, y:60, scale:0, rotation:0.02,  ease:Quad.easeInOut}, "brick-=.018")
   .from(".brick7", .2, {x:115, y:40, scale:0, rotation:0.02,  ease:Quad.easeInOut}, "brick+=.020")
   .from(".brick8", .2, {scale:0, rotation:0.02,  ease:Quad.easeInOut}, "brick+=.010")
   .from(".bg2", .1, {alpha:0, ease:Power0.easeNone}, "brick+=.15")
   
   
   .from(".product_name", .4, {alpha:0, x:-20, rotation:0.02, ease:Power2.easeOut}, "brick+=.15")
   .from(".txt1-1", .4, {alpha:0, y: 10, rotation:0.02, ease:Power1.easeOut}, "brick+=.25")
   .from(".txt1-2", .4, {alpha:0, y: -10, rotation:0.02, ease:Power1.easeOut}, "brick+=.25")
   .to(".product_name, .tablet_monitor, .tablet_keyboard, .txt1-1, .txt1-2, .bg, .bg2, .brick1, .brick2, .brick3, .brick4, .brick5, .brick6, .brick7, .brick8", .3, {alpha:0, ease:Power2.easeOut, delay:1})


   //frame 2 animation
   .from(".watchband_hinge", .4, {alpha:0, x:160, rotation:0.02, ease:Sine.easeOut}, "-=.15")
   .from(".txt2-1", .4, {alpha:0, y:-10, rotation:0.02, ease:Power2.easeOut}, "-=.25")
   .from(".txt2-2", .4, {alpha:0, y:10, rotation:0.02, ease:Power2.easeOut}, "-=.25")
   .to(".watchband_hinge, .txt2-1, .txt2-2", .3, {alpha:0, rotation:0.02, ease:Power2.easeOut, delay:1.9})
  // .to("", .3, {alpha:0, ease:Power2.easeOut}, "-=.5")

   //frame 3 animation
   .from(".laptop", .4, {alpha:0, x:-100, rotation:0.02, ease:Sine.easeOut}, "-=.15")
   //.from(".laptop_bg", .4, {alpha:0, x:150, rotation:0.02, ease:Power2.easeOut}, "-=.25")
   .from(".txt3-1", .4, {alpha:0, y:-10, rotation:0.02, ease:Power2.easeOut}, "-=.25")
   .from(".txt3-2", .4, {alpha:0, y:10, rotation:0.02, ease:Power2.easeOut}, "-=.25")
   .to(".laptop, .txt3-1, .txt3-2", .3, {alpha:0, rotation:0.02, ease:Power2.easeOut, delay:1.8})
   //.to("", .3, {alpha:0, ease:Power2.easeOut}, "-=.5")

   //frame 4 animation
   .from(".portable_tab", .4, {alpha:0, y:130, rotation:0.02, ease:Sine.easeOut}, "-=.15")
   .from(".txt4-1", .4, {alpha:0, y:-10, rotation:0.02, ease:Power2.easeOut}, "-=.25")
   .from(".txt4-2", .4, {alpha:0, y:10, rotation:0.02, ease:Power2.easeOut}, "-=.25")
   .to(".portable_tab, .txt4-1, .txt4-2", .3, {alpha:0, rotation:0.02, ease:Power2.easeOut, delay:1.8})
   //.to(".txt4-1, .txt4-2", .3, {alpha:0, ease:Power2.easeOut}, "-=.5")

   //frame 5 animation  
   .add('laptop', "-=.15")
    .from(".miix_510_keyboard", .4, {alpha:0, x:-70, rotation:0.02, ease:Sine.easeOut}, "laptop")
	.from(".miix_510_monitor", .4, {alpha:0, y:-70, rotation:0.02, ease:Sine.easeOut}, "laptop")
    .from(".product_name_black", .4, {alpha:0, x:-20, rotation:0.02, ease: Quad.easeOut}, "-=.25")
    .from(".icons", .4, {alpha:0, ease: Quad.easeOut}, "-=.25")
    .from(".windows_logo", .4, {alpha:0, ease: Quad.easeOut}, "-=.25")      
    .from(".cta", .4, {alpha:0, ease: Quad.easeOut}, "-=.25")
    .to(".replay", .4, {autoAlpha:1, visibility: "visible", display:'block', ease:Power0.easeOut}, "-=.25")
	;
            
 

//Add all timelines to master timeline...
masterTimeline.add([tl1]);


//after window load...
window.onload = function()
{ 
    masterTimeline.play();
}

// Reply
replay.addEventListener("click", function(){
  masterTimeline.restart();
})

// tl1.timeScale(.15);

//count animation duration of a timeline...
var currentDuration = tl1.duration();
console.log(currentDuration); 
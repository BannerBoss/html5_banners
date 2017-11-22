var banner = document.getElementById('banner');
var replay = document.getElementById('replay');

var mtl = new TimelineMax({paused:true});

  
  // ---- Animation Timelines ------  
  mtl.set(banner, {visibility: "visible"})
  
    .from(".mountain", 1, {scale:1.2, ease:Power2.easeOut}, "link1")
    .from(".laptop_1", .9, {scale:1.5, alpha:0, rotation:0.02, ease:Power4.easeOut}, "link1+=.1")
    .from(".logo", .5, {alpha:0, x:20, rotation:0.02, ease:Power4.easeOut}, "-=.25")
    .from(".copy_light_power", .5, {y:35, rotation:0.02, ease:Power2.easeOut}, "-=.35")
    .from(".copy_light_power2", .5, {y:35, rotation:0.02, ease:Power2.easeOut}, "-=.15")
    .set(".mask-copy", {height:140})
    .from(".copy_border", .5, {y:45, rotation:0.02, ease:Power2.easeOut}, "-=.15")
    .from(".copy_5mm-altra", .5, {alpha:0, y:20, rotation:0.02, ease:Power2.easeOut}, "-=.3")
    .from(".product_name", .5, {alpha:0, ease:Power2.easeInOut}, "-=.25")
    .to("#frame_one", .5, {alpha:0, ease:Power1.easeOut, delay:1})

    // Frame 2 animation
    .from(".laptop_2", .5, {x:450, rotation:0.02, ease:Power4.easeOut}, "-=.25")
    .from(".copy_ultra_narrow", .5, {y:30, alpha:0, rotation:0.02, ease:Power4.easeOut}, "-=.25")
    .from(".copy_takes_up", .5, {y:30, alpha:0, rotation:0.02, ease:Power4.easeOut}, "-=.25")
    .from(".circle", .15, {alpha:0, repeat:4, yoyo:true, ease:Quad.easeOut}, "-=.25")
    .to("#frame_two", .5, {alpha:0, ease:Power1.easeOut, delay:1})

    // Frame 3 animation
    .from(".laptop_3", .5, {x:350, rotation:0.02, ease:Power4.easeOut}, "-=.25")
    .from(".copy_thin", .5, {y:30, alpha:0, rotation:0.02, ease:Power4.easeOut}, "-=.25")
    .from(".copy_only14", .5, {y:30, alpha:0, rotation:0.02, ease:Power4.easeOut}, "-=.25")

    .add('featherOne', "-=.2")
    .to(".feather1", .7, {x:-25, y:50, opacity:1, rotation:60, ease:Power0.easeNone}, "featherOne") 
    .to(".feather1", .7, {x:15, y:120, rotation:-45, ease:Power0.easeNone}, "featherOne+=.7") 
    .to(".feather1", .3, {x:-5, y:165, alpha:0, rotation:-35, ease:Power0.easeNone}, "featherOne+=1.4") 

    .add('featherTwo', "-=1.4")
    .to(".feather2", .7, {x:-5, y:30, opacity:1, rotation:-160, ease:Power0.easeNone}, "featherTwo") 
    .to(".feather2", .7, {x:15, y:150, rotation:-95, ease:Power0.easeNone}, "featherTwo+=.7") 
    .to(".feather2", .3, {x:-10, y:175, alpha:0, rotation:-65, ease:Power0.easeNon}, "featherTwo+=1.4")

    .add('featherThree', "-=1.4")
    .to(".feather3", .7, {x:-25, y:100, opacity:1, rotation:60, ease:Power0.easeNone}, "featherThree") 
    .to(".feather3", .7, {x:-15, y:175, rotation:-45, ease:Power0.easeNone}, "featherThree+=.7") 
    .to(".feather3", .3, {x:-10, y:200, alpha:0, rotation:5, ease:Power0.easeNone}, "featherThree+=1.4")
    .to("#frame_three", .5, {alpha:0, ease:Power1.easeOut, delay:.8})
      
    // Frame 4 animation
   .from(".nvidia", .4, {alpha:0, scale:1.2, rotation:0.02, '-webkit-filter': 'contrast(100%)', 'filter': 'contrast(100%)', ease:Quad.easeOut}, "nvidia-=.25")
   .from(".glow", .4, {alpha:0, scale:1.5, '-webkit-filter': 'contrast(100%)', 'filter': 'contrast(100%)', ease:Quad.easeOut}, "nvidia-=.25")
    .to(".glow", .4, {alpha:0, sease:Quad.easeOut})
    .from(".copy_high", .5, {y:30, alpha:0, rotation:0.02, ease:Power4.easeOut}, "-=.25")
    .from(".copy_blaze_ahead", .5, {y:30, alpha:0, rotation:0.02, ease:Power4.easeOut}, "-=.25")
    .to("#frame_four", .5, {alpha:0, ease:Quad.easeOut, delay:1.6})
 // .add('secondFrame') 
    // Frame 5 animation
    .from(".laptop_4", .5, {alpha:0, scale:1.2, rotation:0.02, ease:Sine.easeOut}, "-=.25")
    .from(".product_name2", .4, {alpha:0, y:15, rotation:0.02, ease:Quad.easeOut}, "-=.25")
    .from(".intel", .4, {alpha:0, ease:Quad.easeOut}, "-=.25")
    .from(".cta", .4, {alpha:0, ease:Quad.easeOut}, "-=.25")
    .to(".replay", .4, {autoAlpha:1, visibility: "visible", display:'block', ease:Power0.easeOut}, "-=.25");
    ;


//----- Marge TimeLines -----
    // mtl.add([tl1, tl2, tl3]);

//----- Window Onload ------
    window.onload = function() { 
        mtl.play();
    };

//----- Reply ------
    replay.addEventListener("click", function(){
        mtl.restart();
    })


// ----------------- Seek/timeScale/Duration -----------------------
    // mtl.seek("secondFrame");

    var currentDuration = mtl.totalDuration();
    console.log(currentDuration); 
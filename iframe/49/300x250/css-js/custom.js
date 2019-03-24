var banner = document.getElementById('banner');

var mtl = new TimelineMax({paused:true});
  
  // ---- Animation Timelines ------  
  mtl.set(banner, {visibility: "visible"})
    .to(".pen", 1.5, {backgroundPosition:"-2400px 0", ease:Power0.easeNone, ease:SteppedEase.config(8)})  
    .from(".white_bg", .5, {alpha:0, ease:Sine.easeOut}, "-=.25")  
    .from(".logo", .5, {alpha:0, ease:Sine.easeOut}, "-=.25")     
    .from(".form", .5, {alpha:0, ease:Sine.easeOut}, "-=.05") 
    .from("#typing .blinking-cursor", .2, {alpha:0, ease:Power0.easeOut}, "-=.15")
    .to("#typing .target", 1.3, {typed:{to:"formswift.com", stopOnCommon:false},  ease: Linear.easeNone})
    .from(".cursor", .4, {x:10, y:65, rotation:0.02, ease:Sine.easeOutIn, delay:.8})     
    .from(".go_btn", .1, {alpha:0, x:-1, y:1, ease:Sine.easeOut})      
    .to(".white_bg, .form, .go_btn, .cursor, .pen, #typing", .65, {y:200, rotation:0.02, ease:Sine.easeOut, delay:.3}) 
    
    .to(".logo", .5, {scale:.52, x:90, y:-76, rotation:0.02, ease:Sine.easeOut}, "-=.35")
    .from(".bubble1", .6, {scale:0, x:50, transformOrigin:"center right", ease:Sine.easeOut}, "-=.55")
    .from(".bubble2", .6, {scale:0, x:100, transformOrigin:"center right", ease:Sine.easeOut}, "-=.45")
    .from(".bubble3", .6, {scale:0, x:150, transformOrigin:"center right", ease:Sine.easeOut}, "-=.45")
    .from(".img1", .6, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.2") 
    .from(".txt1", .5, {alpha:0, rotation:0.02, ease:Sine.easeOut})
    .to(".img1, .txt1", .5, {alpha:0, ease:Sine.easeOut, delay:1.5})

    .from(".img2", .5, {alpha:0, ease:Sine.easeOut}, "-=.25") 
    .from(".txt2", .5, {alpha:0, ease:Sine.easeOut}, "-=.25") 
    .to("#frame_two", .5, {alpha:0, ease:Sine.easeOut, delay:1.5})

    .from(".img3", .6, {alpha:0, x:40, y:0, ease:Sine.easeOut}, "-=.25") 
    .from(".txt3", .5, {alpha:0, ease:Sine.easeOut}, "-=.25") 
    .to(".img3, .txt3", .5, {alpha:0, ease:Sine.easeOut, delay:1.2})

    .from(".img4", .6, {alpha:0, x:20, y:10, rotation:-8, transformOrigin:"right bottom", ease:Sine.easeOut}, "-=.25") 
    .from(".txt4", .5, {alpha:0, ease:Sine.easeOut}, "-=.25") 
    .to(".img4, .txt4", .5, {alpha:0, ease:Sine.easeOut, delay:1.3})

    .from(".img5", .5, {alpha:0, ease:Sine.easeOut}, "-=.25") 
    .from(".txt5", .5, {alpha:0, ease:Sine.easeOut}, "-=.25") 
    .from(".countdown, .days1, .days2", .5, {alpha:0, ease:Sine.easeOut}, "-=.25") 
    .to(".days2", 2, {y: 396, rotation:0.02, ease:Sine.easeOut, delay:.2})
    .to(".days1", .3, {y: 36, rotation:0.02, ease:Sine.easeOut}, "-=.8")
    .from(".cta", .5, {alpha:0, ease:Sine.easeOut}) 

    ;


//----- Window Onload ------
window.onload = function() { 
    mtl.play();

};


// ----------------- Seek/timeScale/Duration -----------------------
    // mtl.seek("secondFrame"); // .add('secondFrame')

    // mtl.timeScale(.25);

    var currentDuration = mtl.totalDuration();
    console.log(currentDuration); 
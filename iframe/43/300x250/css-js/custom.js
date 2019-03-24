var banner = document.getElementById('banner');

var mtl = new TimelineMax({paused:true, repeat:1, repeatDelay:2});

  
  // ---- Animation Timelines ------  
  mtl.set(banner, {visibility: "visible"})

    .from(".logo", .7, {y:"-=45", rotation:0.02,  ease:Power4. easeOut})     
    .from(".cta", .5, {alpha:0, y:"+=10", rotation:0.02, ease:Sine.easeInOut}, "-=.1")  
    .from(".arrow", .4, {alpha:0, x:"-=10", rotation:0.02, ease:Power2.easeOut}, "-=.2")  

    .to(".pic_left_1", .6, {alpha:0, ease:Sine.easeOut, delay: 1.5})     
    .to(".pic_right_1", .6, {alpha:0, ease:Sine.easeOut}, "-=.25")  

    .to(".arrow", .3, {x:3, yoyo:true, repeat:3},"-=.1")  

    .to(".pic_left_2", .6, {alpha:0, ease:Sine.easeOut, delay: 1.5})     
    .to(".pic_right_2", .6, {alpha:0, ease:Sine.easeOut}, "-=.25")  

    .to(".arrow", .3, {x:3, yoyo:true, repeat:3},"-=.1")  

    .to(".pic_left_3", .6, {alpha:0, ease:Sine.easeOut, delay: 1.5})     
    .to(".pic_right_3", .6, {alpha:0, ease:Sine.easeOut}, "-=.25")     

    .from(".copy", .8, {alpha:0, x:"+=40", ease:Power2.easeOut, delay:.2})      
    .to(".arrow", .3, {x:3, yoyo:true, repeat:5},"-=.1")   

    ;


//----- Window Onload ------
window.onload = function() { 
    mtl.play();
};


// ----------------- Seek/timeScale/Duration -----------------------
    mtl.seek("secondFrame"); // .add('secondFrame')

    // mtl.timeScale(.25);

    var currentDuration = mtl.totalDuration();
    console.log(currentDuration); 
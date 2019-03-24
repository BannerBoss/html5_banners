var banner = document.getElementById('banner');
var path = [{x:0, y:0}, {x:-210, y:-120}, {x:-230, y:-85}]

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();

// ---- Animation Timelines ------  
tl1.set(banner, {visibility: "visible"})  
   .from(".headline", 1, {scale:0, rotation:0.02, ease:Elastic.easeOut.config(.5, 0.25)})
   .to(".headline", .1, {alpha:0, repeat:3, yoyo:true, ease:Quad.easeOut}, "-=.25")
   .to(".headline", .5, {alpha:0, ease:Sine.easeOut, delay:1})

   .from(".bottle", 1, {scale:0, rotation:0.02, ease:Elastic.easeOut.config(.4, 0.25)})
   .from(".frame1-text1, .frame1-text2", .7, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.75")
   .to("#frame_two", .5, {alpha:0, ease:Sine.easeOut, delay:1})

   .from(".box2", 1, {scale:0, rotation:0.02, ease:Elastic.easeOut.config(.4, 0.25)})
   .from(".box1", 1, {scale:0, rotation:0.02, ease:Elastic.easeOut.config(.4, 0.25)}, "-=.75")
   .from(".frame2-text1, .frame2-text2", .7, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.65")
   .to("#frame_three", .5, {alpha:0, ease:Sine.easeOut, delay:1})

   .from(".cone1, .cone2", 1, {scale:0, rotation:0.02, ease:Elastic.easeOut.config(.4, 0.25)})
   .to(".cone1", .5, {x:-20, rotation:-25, ease:Expo.easeOut}, "cone-=.7")
   .to(".cone2", .7, {x:25, y:5, rotation:20, ease:Expo.easeOut}, "cone-=.7")
   .from(".frame3-text1, .frame3-text2", .7, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.4")
   .to("#frame_four", .5, {alpha:0, ease:Sine.easeOut, delay:1})

   .from(".doll-1", 1, {scale:0, rotation:0.02, ease:Elastic.easeOut.config(.4, 0.25)})
   .from(".doll-2", 1, {scale:0, rotation:0.02, ease:Elastic.easeOut.config(.4, 0.25)}, "-=.75")
   .from(".tag", .5, {alpha:0, ease:Sine.easeOut}, "-=.65")
   .from(".frame4-text1, .frame4-text2", .7, {alpha:0, rotation:0.02, ease:Sine.easeOut}, "-=.4")
   .to(".bg", .001, {alpha:0, ease:Sine.easeOut, delay:1.2})
   .from(".spark", .001, {alpha:0, ease:Sine.easeOut})


   ;


//Add all timelines to master timeline...
masterTimeline.add([tl1]);

//----- Window Onload ------
window.onload = function() { 
    masterTimeline.play();
};

//count animation duration of a timeline...
var currentDuration = tl1.duration();
console.log(currentDuration);
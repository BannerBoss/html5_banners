var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax(),
               tl2 = new TimelineMax(),
               tl3 = new TimelineMax();

// ---- Animation Timelines ------  
tl1.set(banner, {visibility: "visible"})
   .to(".bg", 5, {x:55, rotation:0.02, ease:Sine.easeOut}, "move")
   .to(".back_logo", 5, {x:50, rotation:35, ease:Sine.easeOut}, "move")
   .to(".bg", 5, {x:-50, rotation:0.02, ease:Sine.easeOut, delay:2})
   ;

tl2.to(".bird1", 12, {bezier:{type:"cubic", values:[{x:0, y:0}, {x:80, y:-30}, {x:100, y:-70}, {x:130, y:-80}, {x:160, y:-90}, {x:200, y:-100}, {x:220, y:-155}], autoRotate:["x","y","rotation",45,false]}, ease:Sine.easeInOut}, "fly")
   .to(".bird2", 5, {bezier:[{x:1, y:-10}, {x:1, y:-30}, {x:-1, y:-50}, {x:1, y:-85}], ease:Sine.easeOut}, "fly")
   ;

tl3.from(".text1", .5, {alpha:0, y:-10, rotation:0.02, ease:Sine.easeOut})
   .to(".text1", .5, {alpha:0, y:10, rotation:0.02, ease:Sine.easeOut, delay:3})
   .from(".text2", .5, {alpha:0, y:-10, rotation:0.02, ease:Sine.easeOut})
   .to(".text2", .3, {alpha:0, y:10, rotation:0.02, ease:Sine.easeOut, delay:2.5})
   .to(".back_logo", .3, {alpha:0, ease:Sine.easeOut}, "-=.3")
   .from(".logo", 2, {alpha:0, x:-15, rotation:-25, ease:Sine.easeOut, delay:1.4})
   .from(".text3", .5, {alpha:0, ease:Sine.easeOut},"-=3.3")
   .from(".text4", .5, {alpha:0, ease:Sine.easeOut},"-=2.8")
   .from(".learn_more", .5, {alpha:0, ease:Sine.easeOut},"-=2.4")   
   ;

//Add all timelines to master timeline...
masterTimeline.add([tl1, tl2, tl3]);

//----- Window Onload ------
window.onload = function() { 
    masterTimeline.play();
    initEB();
};

function initEB(){
    if (!EB.isInitialized()){
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    }else{
        startAd();
    }

    banner.addEventListener("click", function(event){
        EB.clickthrough();
    });
}

function startAd(){
    banner.style.visibility = "visible";
}

//count animation duration of a timeline...
var currentDuration = tl3.duration();
console.log(currentDuration); 
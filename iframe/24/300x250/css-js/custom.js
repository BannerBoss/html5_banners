var banner = document.getElementById('banner');
var replay = document.getElementById('replay');

var tl = new TimelineMax();

window.onload = function() {
    startBanner();
    
    tl.from(".bg", .3, {opacity:0, ease:Power0.easeOut})
      .from(".phone_hand", .4, {x:-125, y:147, ease:Power2.easeOut},"-=.1")
      .from(".phone_screen", .2, {opacity:0, ease:Power0.easeNone})
      .from(".face_select", .1, {opacity:0, ease:Bounce.easeOut, delay:.2})
      .from(".face_select2", .1, {opacity:0, ease:Bounce.easeOut})
      .from(".face_select3", .1, {opacity:0, ease:Bounce.easeOut})
      .from(".hand", .3, {x:41, y:86, ease:Power1.easeOut, delay:.6})
      .to(".hand", .1, {x:1, y:3, delay:.4})
      .to(".hand", .1, {x:-1, y:0}, "shot")
      .from(".flash", .05, {opacity:0}, "shot")
      .to(".flash", .05, {opacity:0})
      .to(".hand", .2, {x:41, y:86, delay:.35})
      .to(".phone_hand, .phone_screen, .face_select, .face_select2, .face_select3", .3, {x:-125, y:147},"-=.1")
      .from(".mobile_screen", .1, {opacity:0})
      .to(".bg", .3, {scale:.7, ease:Power0.easeOut},"-=.1")
      .from("#frame-four-typing1 .blinking-cursor", .2, {alpha:0, ease:Power0.easeOut})
      .to("#frame-four-typing1 .target", 1, {typed:{to:"#WeeklyBrunch", stopOnCommon:false},  ease: Linear.easeNone, delay:.4})
      .to("#frame-four-typing1 .blinking-cursor", .1, {alpha:0, ease:Power0.easeOut})
      .from("#frame-four-typing2 .blinking-cursor", .1, {alpha:0, ease:Power0.easeOut})
      .to("#frame-four-typing2 .target", 1, {typed:{to:"#FoodieFriends", stopOnCommon:false},  ease: Linear.easeNone, delay:.4})
      .to(".bg, #frame_three, #frame_four", .2, {alpha:0, ease:Power0.easeOut, delay:1})
      .from(".lastframe_text1", .5, {alpha:0, x:50, ease:Power0.easeOut})
      .from("#frame-five-typing .blinking-cursor", .2, {alpha:0, ease:Power0.easeOut})
      .to("#frame-five-typing .target", 1, {typed:{to:"#StartsToday", stopOnCommon:false},  ease: Linear.easeNone, delay:.2})
      .to("#frame-five-typing .blinking-cursor", .5, {alpha:0, ease:Power0.easeOut, delay:.5})
      .fromTo(".red_bar", .5, {alpha:0, y:-20, ease:Power0.easeOut}, {alpha:1, y:-9})
      .from(".logo", .5, {alpha:0, ease:Power0.easeOut}, "-=.25")
      .from(".credit_card", .5, {alpha:0, y:20, ease:Power0.easeOut})
      .from(".buy_one_get_one", .5, {alpha:0, y:20, ease:Power0.easeOut})
      .to(".credit_card", .5, {alpha:0, ease:Power0.easeOut, delay:3})
      .to(".buy_one_get_one", .5, {alpha:0,  ease:Power0.easeOut}, "-=.40")
      .from(".win_iphone", .5, {alpha:0, y:20, ease:Power0.easeOut})
      .from(".cta", .5, {alpha:0, x:30, ease:Power0.easeOut})
      .from(".offer", .5, {alpha:0, ease:Power0.easeOut}, "-=.25") 
      .to(".replay", .5, {autoAlpha:1, display:'block', ease:Power0.easeOut})
      ;

      // tl.seek("start");
      // var currentDuration = tl.duration();
      // console.log(currentDuration); 

};

var startBanner = function () {
    banner.style.visibility = 'visible';
    banner.className = 'is_visible';
};

replay.addEventListener("click", function(){
    tl.restart();
})
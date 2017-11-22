var banner = document.getElementById('banner');
var replay = document.getElementById('replay');

var top_pics = [".frame1_pic1", ".frame1_pic2", ];
var bottom_pics = [".frame1_pic3", ".frame1_pic4"];

var pics = [".frame1_pic3", ".frame1_pic4", ".frame1_pic1", ".frame1_pic2",];


var tl = new TimelineMax();

window.onload = function() {   
    
    tl.set(banner, {visibility: "visible"})

      .staggerFrom(pics, .5, {alpha:0, ease:Power0.easeNone}, .25)      
      .from(".lenovo_logo", .4, {alpha:0, x:"+=20", ease:Power2.easeOut})

      .to(top_pics, .5, {y:"+=140", ease:Power4.easeIn, delay:.5})
      .from(".frame2_text1", .5, {alpha:0, x:"-=50", ease:Back.easeOut})
      .from(".frame2_text2", .5, {alpha:0, x:"-=50", ease:Back.easeOut}, "-=.25")
      .to(".frame2_text1", .5, {x:-5, ease:Back.easeOut, delay:1})
      .to(".frame2_text1", .5, {x:100, alpha:0, ease:Back.easeOut},"frame2_fadeout-=.25")
      .to(".frame2_text2", .5, {x:-5, ease:Back.easeOut, delay:1})
      .to(".frame2_text2", .5, {x:100, alpha:0, ease:Back.easeOut},"frame2_fadeout-=.25")
      .to(bottom_pics, .5, {y:"-=140", ease:Power4.easeIn}, "-=1.5")

      .to(top_pics, .5, {y:"0", ease:Expo.easeOut}, "-=1")
      .from(".frame3_text1", .5, {alpha:0, x:"-=50", ease:Back.easeOut}, "-=.75")
      .to("#frame_three", .5, {alpha:0, ease:Power0.easeNone, delay:1})
      .to(top_pics, .5, {y:"+=140", ease:Power4.easeIn}, "-=.5")
      .to(".lenovo_logo", .3, {alpha:0, x:"+=20", ease:Power0.easeNone}, "seek-=.5")
   
      .from(".lenovo_thinkpad", .5, {alpha:0, scale:.2, x:"+=150", transformOrigin: "100% 0%", ease:Power2.easeOut})
      .from(".award_logo", .3, {alpha:0, ease:Expo.easeIn}, "-=.5")
      .from(".lenovo_thinkpad_x1_yoga", .3, {alpha:0, ease:Power0.easeNone}, "-=.25")
      .to(".lenovo_thinkpad", .5, {alpha:0, x:"-=350", scale:.2, transformOrigin: "100% 0%", ease:Power2.easeOut, delay:1})
      .to(".lenovo_thinkpad_x1_yoga", .5, {alpha:0, ease:Power0.easeNone}, "-=.7")

      .from(".lenovo_yoga", .5, {alpha:0, scale:.2, x:"+=150", transformOrigin: "100% 0%", ease:Power2.easeOut}, "-=.25")
      .from(".lenovo_yoga_900", .5, {alpha:0, ease:Power0.easeNone}, "-=.25")
      .to(".lenovo_yoga", .5, {alpha:0, x:"-=350", scale:.2, transformOrigin: "100% 0%", ease:Power2.easeOut, delay:1})
      .to(".lenovo_yoga_900", .5, {alpha:0, ease:Power0.easeNone}, "-=.7")

      .from(".lenovo_yoga_home", .5, {alpha:0, scale:.2, x:"+=150", transformOrigin: "100% 0%", ease:Power2.easeOut}, "-=.5")
      .from(".lenovo_yoga_home_900", .5, {alpha:0, ease:Power0.easeNone}, "-=.25")
      .to(".lenovo_yoga_home", .5, {alpha:0, x:"-=350", scale:.2, transformOrigin: "100% 0%", ease:Power2.easeOut, delay:1})
      .to(".lenovo_yoga_home_900", .5, {alpha:0, ease:Power0.easeNone}, "-=.7")

      .from(".lenovo_thinkpad_tablet", .5, {alpha:0, scale:.2, x:"+=150", transformOrigin: "100% 0%", ease:Power2.easeOut}, "-=.5")
      .from(".lenovo_thinkpad_x1_tablet", .5, {alpha:0, ease:Power0.easeNone}, "-=.25")
      .to(".lenovo_thinkpad_tablet", .5, {alpha:0, x:"-=350", scale:.2, transformOrigin: "100% 0%", ease:Power2.easeOut, delay:1})
      .to(".lenovo_thinkpad_x1_tablet", .5, {alpha:0, ease:Power0.easeNone}, "-=.7")
      .to(".award_logo", .5, {alpha:0, ease:Expo.easeOut}, "-=.5")
           
      .to(".lenovo_logo", .4, {alpha:1, x:"0", ease:Power2.easeOut}, "-=.25")
      .from(".vendor_logo", .5, {alpha:0, ease:Power0.easeNone})
      .from(".product_frame", .5, {alpha:0, ease:Power0.easeNone})
      .from(".cta", .5, {alpha:0, ease:Power0.easeNone})

      .to(".replay", .5, {autoAlpha:1, visibility: "visible", display:'block', ease:Power0.easeOut});
      
      // tl.seek("seek");

      // tl.timeScale(.25);

      var currentDuration = tl.duration();
      console.log(currentDuration);   
};


replay.addEventListener("click", function(){
    tl.restart();
})
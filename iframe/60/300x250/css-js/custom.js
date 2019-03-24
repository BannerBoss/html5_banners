var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   // 1st frame animation
   .from(".cherry_blossoms", .5, {x:-130, rotation:0.02, ease:Sine.easeOut})
   .from(".oranges", .5, {x:-70, y:70, rotation:0.02, ease:Sine.easeOut}, "-=.25")
   .from(".big_flowers", .5, {x:100, y:100, rotation:0.02, ease:Sine.easeOut}, "-=.25")
   .add(cherry_blossoms_flow, "-=1")

   .from(".chinese_word, .box", .5, {alpha:0, ease:Sine.easeOut}, "-=.5")
   .to(".box", .5, {alpha:0, ease:Sine.easeOut, delay:1})
   .from(".whc_logo", .5, {alpha:0, ease:Sine.easeOut})

   // 2nd frame animation
   .to(".chinese_word, .whc_logo", .5, {alpha:0, ease:Sine.easeOut, delay:1})
   .from(".frame2_txt1, .frame2_txt2", .5, {alpha:0, ease:Sine.easeOut})
   .from(".date", .5, {alpha:0, ease:Sine.easeOut})

   .to("#frame_one, #frame_two", .5, {alpha:0, ease:Sine.easeOut, delay:1})

   // 3rd frame animation
   .from(".card", .5, {alpha:0, ease:Sine.easeOut, onComplete:card_sliding})
   .from(".frame3_txt1", .5, {alpha:0, ease:Sine.easeOut}, "-=.25")
   .from(".dollar_sign", .5, {alpha:0, ease:Sine.easeOut})
   .from(".frame3_list1", .5, {x:-150, rotation:0.02, ease:Sine.easeOut})
   .from(".star", .5, {alpha:0, ease:Sine.easeOut})
   .from(".frame3_list2", .5, {x:-150, rotation:0.02, ease:Sine.easeOut})
   .from(".money_bag", .5, {alpha:0, ease:Sine.easeOut})
   .from(".frame3_list3", .5, {x:-150, rotation:0.02, ease:Sine.easeOut})
   .to("#frame_three", .5, {alpha:0, ease:Sine.easeOut, delay:1.5})

   // 4th frame animation
   .from(".catalogue", .5, {alpha:0, ease:Sine.easeOut})
   .from(".marron_strip", .5, {x:-300, rotation:0.02, ease:Sine.easeOut})
   .from(".frame4_txt1, .here", .5, {alpha:0, ease:Sine.easeOut})
   .to(".here", .3, {alpha:0, repeat:7, yoyo:true, ease:Expo.easeInOut, delay:.2})

   // 5th frame animation
   .from(".whc_white_logo, .final_frame_bg, .address", .3, {alpha:0, ease:Sine.easeOut, delay:.5})
; 


function card_sliding(){
   TweenMax.to(".card", .5, {rotation:5, ease:Sine.easeOut});
   TweenMax.to(".card", .5, {rotation:-5, repeat:7, yoyo:true, ease:Sine.easeInOut, delay:.5});
   TweenMax.to(".card", .5, {rotation:0, ease:Sine.easeOut, delay:4});
}

function cherry_blossoms_flow() {
  TweenMax.to(".loose_cherry_blossoms_1", 7, {y:135, rotation:-20, transformOrigin: "50% 50%", ease: SlowMo.ease.config( 1, 1, false)});
  TweenMax.to(".loose_cherry_blossoms_2", 7, {y:110, rotation:55, transformOrigin: "50% 50%", ease: SlowMo.ease.config( 1, 1, false), delay:.2});
  TweenMax.to(".loose_cherry_blossoms_3", 7, {y:100, rotation:30, transformOrigin: "50% 50%", ease: SlowMo.ease.config( 1, 1, false), delay:.25});
  TweenMax.to(".loose_cherry_blossoms_4", 7, {y:200, rotation:50, transformOrigin: "50% 50%", ease: SlowMo.ease.config( 1, 1, false), delay:.2});
  TweenMax.to(".loose_cherry_blossoms_5", 7, {y:95, rotation:-30, transformOrigin: "50% 50%", ease: SlowMo.ease.config( 1, 1, false), delay:.3});
}


/*-------------------------------------
  Add all timelines to master timeline...
---------------------------------------*/
masterTimeline.add([tl1]);


/*-------------------------------------
  After window load...
---------------------------------------*/   
window.onload = function()
{
  masterTimeline.play();
}

// masterTimeline.timeScale(.25);
/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = tl1.duration();
console.log(currentDuration); 
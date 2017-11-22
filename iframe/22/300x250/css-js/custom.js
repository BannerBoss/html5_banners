var banner = document.getElementById('banner');
var replay = document.getElementById('replay');

var tl = new TimelineMax();

window.onload = function() {
    startBanner();
    
    tl.to(".movie", .5, { left:-184, opacity:1, ease:Power0.easeOut})
      .to(".movie", .4, { left:-170, ease:Power0.easeOut})
      .to(".movie", .4, {left: -147, top: -106, scale:.65, ease:Power0.easeOut}, "scaledown")      
      .to(".screen", .4, {left: -116, top: -106, scale:.65, ease:Power0.easeOut}, "scaledown")
      .to(".movie", 4.4, {x: 39, y: -50, scale:.4, ease:Power0.easeNone})
      .to(".lenovo", .4, {x:10, alpha:0, ease:Power0.easeOut}, ".8")
      .from(".projector", .3, {scale:1, x:150, ease:Power0.easeOut}, "1.2")
      .from(".gradian", .1, {alpha:0, ease:Power0.easeOut}, "1.2")
      .to(".ray", .3, {scale:1, ease:Power0.easeOut}, "1.2")
      .from(".text1", .5, {x:-50, alpha:0, ease:Back.easeOut}, "1")
      .from(".text2", .5, {x:-50, alpha:0, ease:Back.easeOut}, "1.3")
      .to(".text1, .text2", .1, {x:-5, ease:Back.easeOut}, "2.5")
      .to(".text1, .text2", .5, {x:55, alpha:0, ease:Back.easeOut}, "2.7")
      .from(".text3", .5, {x:-50, alpha:0, ease:Back.easeOut}, "3")
      .from(".text4", .5, {x:-50, alpha:0, ease:Back.easeOut}, "3.2")
      .to(".text3, .text4", .1, {x:-5, ease:Back.easeOut, delay:.5})
      .to(".text3, .text4", .5, {x:55, alpha:0, ease:Back.easeOut}, "fade-out")
      .to(".screen, .movie", .5, {x:-100, alpha:0, ease:Back.easeOut}, "fade-out")    
      .to(".projector", .3, {scale:1, left:0, y:-5, ease:Power0.easeOut}, "-=.5")
      .to(".ray", .3, {scale:.6, x:15, y:50, display:"none", ease:Power0.easeOut}, "fade-out")
      .from(".ray-small", .3, {alpha:0}, "-=.25")
      .from(".intel", .5, {alpha:0, ease:Power0.easeOut}, "-=.25")
      .from(".intel_inside", .5, {x:-50, alpha:0, ease:Back.easeOut}, "-=.25")
      .from(".better_experience", .5, {x:-50, alpha:0, ease:Back.easeOut}, "-=.25")
      .from(".yoga", .5, {x:-50, alpha:0, ease:Back.easeOut}, "-=.25")
      .from(".tab_3_pro", .5, {x:-50, alpha:0, ease:Back.easeOut}, "-=.25")
      .from(".bring_home", .5, {x:-50, alpha:0, ease:Back.easeOut}, "-=.25")
      .to(".intel_inside, .better_experience", .1, {x:-5, ease:Back.easeOut, delay:.5})
      .to(".intel_inside, .better_experience", .5, {x:55, alpha:0, ease:Back.easeOut,})
      .from(".atom", .5, {x:-50, alpha:0, ease:Back.easeOut}, "-=.25")
      .from(".x5", .5, {x:-50, alpha:0, ease:Back.easeOut}, "back-=.25")      
      .to(".lenovo", .5, {x:0, alpha:1, ease:Power0.easeOut}, 'back')
      .from(".cta", .2, {x:-50, alpha:0, ease:Power0.easeOut})
      .to(".replay", .3, {autoAlpha:1, display:'block', ease:Power0.easeOut})
      ;

      
      // tl.seek("f5");

      var currentDuration = tl.duration();
      console.log(currentDuration);   
};

var startBanner = function () {
    banner.style.visibility = 'visible';
    banner.className = 'is_visible';
};

replay.addEventListener("click", function(){
    tl.restart();
})
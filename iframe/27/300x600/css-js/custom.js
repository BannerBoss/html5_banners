var banner = document.getElementById('banner');
var clickarea = document.querySelector(".clickarea");

var tl = new TimelineMax();

window.onload = function() {   
    
    tl.set(banner, {visibility: "visible"}) 
      .from(".circle1", .5, {alpha: 0, scale:0, ease: Back.easeOut})
      .from(".circle2", .5, {alpha: 0, scale:0, ease: Back.easeOut}, "-=.25")
      .from(".circle3", .5, {alpha: 0, scale:0, ease: Back.easeOut}, "-=.25")
      .from(".car1", .5, {alpha: 0, scale:0, ease: Back.easeOut}, "-=.25")

      .to(".circle, .car1", .5, {y: 65, ease: Power2.easeOut, delay:.5}, "-=.25")
      .from(".head", .5, {alpha: 0, y: 20, ease: Back.easeOut}, "-=.5")
      .from(".style", .5, {alpha: 0, y: 20, ease: Back.easeOut}, "-=.25")

      .to(".car1", .5, {scale:1.1, ease: Power2.easeOut, delay:.5})
      .to(".car1", .5, {alpha: 0, scale:0, ease: Power2.easeOut}, "-=.30")
      .to(".circle1", .3, {scale:4, ease: Quad.easeOut}, "-=.45")


      .to("#frame_one", .5, {alpha: 0, ease: Power4.easeOut}, "-=.15")
      
      .set(".circle1", {alpha: 0, scale:0, top: 146, ease: Power4.easeOut})
      .set(".circle2", {alpha: 0, scale:0, top: 125, ease: Power4.easeOut})
      .set(".circle3", {alpha: 0, scale:0, top: 104, ease: Power4.easeOut})

      .from("#frame_two", 1, {alpha: 0, ease: Quad.easeOut}, "-=.15")
      .to(".circle1", .5, {alpha: 1, scale:1, ease: Back.easeOut})
      .to(".circle2", .5, {alpha: .4, scale:1, ease: Back.easeOut}, "-=.25")
      .to(".circle3", .5, {alpha: .2, scale:1, ease: Back.easeOut}, "-=.25")
      .from(".car2", .5, {alpha: 0, scale:0, ease: Back.easeOut}, "-=.25")

      .to(".circle", .5, {y: 5, ease: Power2.easeOut, delay:.5}, "up-=.25")  
      .to(".car2", .5, {y: -45, ease: Power2.easeOut, delay:.5}, "up-=.25") 

      .from(".fuel", .3, {alpha: 0, y: -40, ease: Back.easeOut}, "-=.05")
      .from(".class", .3, {alpha: 0, y: -40, ease: Back.easeOut}, "-=.15")

      .from(".l1", .3, {alpha: 0, y: 20, ease: Sine.easeOut}, "line-=.05")
      .from(".l2", .3, {alpha: 0, y: -20, ease: Sine.easeOut}, "line-=.05")
      .from(".fourty-six", .3, {alpha: 0, ease: Sine.easeOut}, "-=.05")
      .from(".jato", .3, {alpha: 0, y: 40, ease: Sine.easeOut}, "-=.05")
      .to(".circle1", .3, {scale:4, ease: Quad.easeOut, delay:1})
      .to(".car2", .8, {x: 320, ease: Power2.easeOut}) 

      .to("#frame_two", .5, {alpha: 0, ease: Power4.easeOut}, "-=.15")
      
      .set(".circle1", {alpha: 0, scale:0, top: 206, ease: Power4.easeOut})
      .set(".circle2", {alpha: 0, scale:0, top: 185, ease: Power4.easeOut})
      .set(".circle3", {alpha: 0, scale:0, top: 163, ease: Power4.easeOut})

      .from(".bg3", 1, {alpha: 0, x:-300, ease: Sine.easeOut}, "-=.25")
      .to(".circle1", .5, {alpha: 1, scale:1, ease: Back.easeOut})
      .to(".circle2", .5, {alpha: .4, scale:1, ease: Back.easeOut}, "-=.25")
      .to(".circle3", .5, {alpha: .2, scale:1, ease: Back.easeOut}, "-=.25")
      .from(".car3", .5, {alpha: 0, scale:0, ease: Back.easeOut}, "-=.25")

      .to(".circle", .5, {y: 68, ease: Power2.easeOut, delay:.5}, "down-=.25")  
      .to(".car3", .5, {y: 68, ease: Power2.easeOut, delay:.5}, "down-=.25")

      .from(".zippy", .5, {alpha: 0, y: 20, ease: Back.easeOut}, "-=.5")
      .from(".roomy", .5, {alpha: 0, y: 20, ease: Back.easeOut}, "-=.25")

      .to(".car3", .5, {scale:1.1, ease: Power2.easeOut, delay:.5})
      .to(".car3", .5, {alpha: 0, scale:0, ease: Power2.easeOut}, "-=.30")
      .to(".circle1", .3, {scale:4, ease: Quad.easeOut}, "-=.45") 


      .to("#frame_three", .5, {alpha: 0, ease: Power4.easeOut}, "-=.15")
      
      .set(".circle1", {alpha: 0, scale:0, top: 147, ease: Power4.easeOut})
      .set(".circle2", {alpha: 0, scale:0, top: 127, ease: Power4.easeOut})
      .set(".circle3", {alpha: 0, scale:0, top: 106, ease: Power4.easeOut})

      .from("#frame_four", 1, {alpha: 0, ease: Quad.easeOut}, "-=.15")
      .to(".circle1", .5, {alpha: 1, scale:1.4, ease: Back.easeOut})
      .to(".circle2", .5, {alpha: .4, scale:1.4, ease: Back.easeOut}, "-=.25")
      .to(".circle3", .5, {alpha: .2, scale:1.4, ease: Back.easeOut}, "-=.25")
      .from(".newlook", .5, {alpha: 0, scale:0, ease: Back.easeOut}, "-=.25")

      .to("#frame_four", .3, {alpha: 0, ease: Quad.easeOut, delay:1})

      .set(".circle1", {alpha: 0, scale:0, top: 78, ease: Power4.easeOut})
      .set(".circle2", {alpha: 0, scale:0, top: 58, ease: Power4.easeOut})
      .set(".circle3", {alpha: 0, scale:0, top: 38, ease: Power4.easeOut})
      .set(".car3", {alpha: 0, scale:0, top: -65, ease: Power4.easeOut})

      .from("#frame_five", 1, {alpha: 0, ease: Power4.easeOut}, "-=.15")
      .to(".circle1", .5, {alpha: 1, scale:1, ease: Back.easeOut})
      .to(".circle2", .5, {alpha: .4, scale:1, ease: Back.easeOut}, "-=.25")
      .to(".circle3", .5, {alpha: .2, scale:1, ease: Back.easeOut}, "-=.25")
      .to(".car3", .5, {alpha:1 , scale:1, ease: Back.easeOut}, "-=.25")
      .from(".price", .5, {alpha:0 , x:100, ease: Quad.easeOut}, "-=.25")
      .from(".drive", .5, {alpha:0 , x:50, ease: Quad.easeOut}, "-=.35")
      .staggerFrom(".test, .brochure, .pricing", .6, {rotationY: -90, ease: Quad.easeOut}, ".2")

      ;  
      

      var currentDuration = tl.duration();
      console.log(currentDuration);   
};

clickarea.addEventListener("mouseover", function(){
      console.log("mouse over");
      TweenMax.to(".disclaimer", .5, {alpha:1, visibility:"visible", ease:Quad.easeOut});
});

clickarea.addEventListener("mouseout", function(){
      console.log("mouse out");
      TweenMax.to(".disclaimer", .5, {alpha:0, visibility:"hidden", ease:Quad.easeOut});
});
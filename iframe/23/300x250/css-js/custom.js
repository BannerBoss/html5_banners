var banner = document.getElementById('banner');

var tl = new TimelineMax();

window.onload = function() {   
    
    tl.set(banner, {visibility: "visible"}) 
      .from(".bg", .5, {rotation: 45, transformOrigin: "0% 100%", ease:Quad.easeOut})   
      .from(".logo", .5, {alpha:0, ease:Sine.easeOut}, "-=.15")
      .from(".join", .5, {rotation: 90, transformOrigin: "0% 0%", ease:Quad.easeOut})    
      .from(".national", .5, {alpha:0, ease:Sine.easeOut}, "-=.15")

      .to(".join", .5, {rotation: -90, transformOrigin: "0% 0%", ease:Power3.easein, delay:2})
      .from(".february", .5, {rotation: 90, transformOrigin: "0% 0%", ease:Quad.easeOut}, "-=.45") 
      .to(".line-anim", .4, {width:147, ease:Quad.easeOut}) 
      .from(".adelaide", .5, {rotation: 90, transformOrigin: "0% 0%", ease:Quad.easeOut}, "-=.25") 

      .to(".line-anim", .4, {width:0, ease:Quad.easeOut, delay:2}) 
      .to(".adelaide", .4, {clip: "rect(0px, 24px, 250px, 24px)", ease:Quad.easeOut})


      .from(".block", .5, {x:-300, ease:Quad.easeOut})
      .from(".largest", .5, {alpha:0, x:-300, ease:Sine.easeOut}, "-=.15")
      .to(".largest", .5, {alpha:0, ease:Quad.easeOut, delay: 1})
      .from(".experts", .5, {alpha:0, x:-300, ease:Sine.easeOut})
      .to(".experts", .5, {alpha:0, ease:Quad.easeOut, delay: 1})
      .from(".uniquely", .5, {alpha:0, x:-300, ease:Quad.easeOut})


      .to(".uniquely, .block, .february", .5, {x:-300, ease:Quad.easeOut, delay: 1})
      .from(".early", .5, {rotation: 90, transformOrigin: "0% 0%", ease:Quad.easeOut})
      .from(".button", .5, {x: 300, ease:Quad.easeOut})
      .from(".shape", .5, {alpha: 0, x: -10, ease:Quad.easeOut})
      .from(".register", .5, {alpha: 0, x: -10, ease:Quad.easeOut}, "-=.25")




      ;  
      

      var currentDuration = tl.duration();
      console.log(currentDuration);   
};
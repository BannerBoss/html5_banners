var banner = document.getElementById('wrapper');
var tl;
window.onload = function() {
    startBanner();
      
          
          // tl = new TimelineMax({ repeat: 2});
          // tl.from("#shoes", 0, {alpha:0, ease:Power0.easeOut, delay:0});
          // tl.from("#logo", 0, {alpha:0, ease:Power0.easeOut, delay:0});
          
          // tl.from("#txt1", 0.5, {alpha:0, ease:Power0.easeOut, delay:0.5});
          // tl.to("#txt1", 0.5, {alpha:0, ease:Power0.easeOut, delay:3});
          
          // tl.from("#txt2", 0.5, {alpha:0, ease:Power0.easeOut, delay:0.5});

          // tl.from("#bgColor", 0.5, {alpha:1, left:301, ease:Power0.easeOut, delay:3});          

          // tl.add('lastFrame');
          // tl.from("#product", 0.5, {alpha:0, left:420, ease:Power0.easeOut}, 'lastFrame');
          // tl.from("#txt3", 0.5, {alpha:0, left:-150, ease:Power0.easeOut}, 'lastFrame');
          // tl.from("#cta", 0.5, {alpha:0, left:-150, ease:Power0.easeOut}, 'lastFrame');

          // tl.call(loopHandler);
          
          // tl.set("#txt2", {opacity: 0});
          // tl.add('lastFrameOut', '+=2');
          // tl.to("#product", 0.5, {alpha:0, left:420, ease:Power0.easeOut},'lastFrameOut');
          // tl.to("#txt3", 0.5, {alpha:0, left:-150, ease:Power0.easeOut},'lastFrameOut');
          // tl.to("#cta", 0.5, {alpha:0, left:-150, ease:Power0.easeOut},'lastFrameOut');
          // tl.to("#bgColor", 0.5, {alpha:0, ease:Power0.easeOut},'lastFrameOut');

          




          // var loopCount = 0;
          // function loopHandler(){
          //   loopCount++;
          //   console.log(loopCount);
          //   if(loopCount == 3){
          //     // tl.pause();
          //     TweenMax.killAll();
          //   }
          // }

          allAnimation();
          
          console.log(tl.duration());



  
  }

function allAnimation(){

  tl = new TimelineMax({ repeat: 2});
  tl.from("#shoes", 0, {alpha:0, ease:Power0.easeOut, delay:0});
  tl.from("#logo", 0, {alpha:0, ease:Power0.easeOut, delay:0});
  
  tl.from("#txt1", 0.5, {alpha:0, ease:Power0.easeOut, delay:0.5});
  tl.to("#txt1", 0.5, {alpha:0, ease:Power0.easeOut, delay:3});
  
  tl.from("#txt2", 0.5, {alpha:0, ease:Power0.easeOut, delay:0.5});

  tl.from("#bgColor", 0.5, {alpha:1, left:301, ease:Power0.easeOut, delay:3});          

  tl.add('lastFrame');
  tl.from("#product", 0.5, {alpha:0, left:420, ease:Power0.easeOut}, 'lastFrame');
  tl.from("#txt3", 0.5, {alpha:0, left:-150, ease:Power0.easeOut}, 'lastFrame');
  tl.from("#cta", 0.5, {alpha:0, left:-150, ease:Power0.easeOut}, 'lastFrame');

  tl.call(loopHandler);
  
  tl.set("#txt2", {opacity: 0});
  tl.add('lastFrameOut', '+=2');
  tl.to("#product", 0.5, {alpha:0, left:420, ease:Power0.easeOut},'lastFrameOut');
  tl.to("#txt3", 0.5, {alpha:0, left:-150, ease:Power0.easeOut},'lastFrameOut');
  tl.to("#cta", 0.5, {alpha:0, left:-150, ease:Power0.easeOut},'lastFrameOut');
  tl.to("#bgColor", 0.5, {alpha:0, ease:Power0.easeOut},'lastFrameOut');

  
  // tl.timeScale(5);



  var loopCount = 0;
  function loopHandler(){
    loopCount++;
    console.log(loopCount);
    if(loopCount == 3){
      // tl.pause();
      TweenMax.killAll();
    }
  }
};
                  
var startBanner = function () {
    banner.style.visibility = 'visible';
};


banner.addEventListener('mouseenter', function(){
  tl.pause();
});

banner.addEventListener('mouseleave', function(){
  tl.resume();
});

document.querySelector('#cta').onclick = function(){
  console.log('re start');
  TweenMax.killAll();
  allAnimation();
}



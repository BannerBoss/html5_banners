/**
*  Helper
*/
function $(selector){
  return document.querySelector(selector);
}

function $$(selector){
  return document.querySelectorAll(selector);
}

/**
*  Banner JavaScript
*/
var tl = new TimelineMax({paused: true});
function defineAnimation(){
  
  tl.from('.copy1', .5, { x: 300},0);
  tl.fromTo('.running', 2, { x: -200 }, { x: 300, ease: Power0.easeNone});
  tl.set('.running', { scaleX: '-1'}, '+=.5');
  tl.add('return_back', '+=1');
  tl.fromTo('.running', 2, { x: 300 }, { x: 50, ease: Power0.easeNone},'return_back');
  tl.from('.copy2', 2, { x: 300, ease: Power0.easeNone},'return_back-=.2');
  tl.to('.copy1', 2, { x: -300, ease: Power0.easeNone},'return_back+=.2');
  tl.to('.logo', 1, { y: -20, ease: Power0.easeNone}, 'return_back+=.8');
  tl.set('.cta', { 'opacity': 1},'return_back+=.8');
  tl.from('.cta', 1, { x: 215, ease: Power0.easeNone}, 'return_back+=.8');

  tl.set('.running', {backgroundPosition: "-2000px -400px", scaleX: '1'}, 'return_back+=2');
  tl.set('.running', {backgroundPosition: "0px -200px", x: 30 },'+=.02');
  tl.to('.running', 2.2, { backgroundPosition: "-5000px -200px", ease:SteppedEase.config(25), repeat: 8});
  tl.add(ctaEffect, 'return_back+=3');

  
  tl.to('.running', .8, { backgroundPosition: "-5000px 0", ease:SteppedEase.config(25), repeat: 8 }, 0);
  
  /*var currentDuration = tl.duration();
        console.log(currentDuration);*/
}

function ctaEffect(){
  $('.cta').className = 'cta is-animate';
  setTimeout(function(){
    $('.cta').className = 'cta';
  }, 1000);
}

defineAnimation();

function runBanner(){
  $('#content').style.visibility = 'visible';
  tl.play();
}


window.onload = function() {
  runBanner();
};

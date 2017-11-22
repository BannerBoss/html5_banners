function $(selector){
	return document.querySelector(selector);
}

function $$(selector){
	return document.querySelectorAll(selector);
}

function reverse(a) {
    var temp = [];
    var len = a.length;
    for (var i = (len - 1); i > -1; i--) {
        temp.push(a[i]);
    }
    return temp;
}



var banner;
var f1SeneAll;
var f1ContentAll;
var f2SceneAll;
var f2ContentAll;
var f3Scene1Content;
var f3Scene2Content;
var f3Cta;
var f3CtaCopy;
var tl;


window.onload = init;

function init(){
	banner = document.getElementById('banner');
	banner.style.visibility = 'visible';
	
	banner = $('#banner');
	f1SeneAll = $$('#frame1 .scene');
	f1ContentAll = $$('#frame1 .scene .content');
	f2SceneAll = $$('#frame2 .scene');
	f2ContentAll = $$('#frame2 .scene .content');
	f3Scene1Content = $$('#frame3 .scene1 .content');
	f3Scene2Content = $$('#frame3 .scene2 .movie');
	f3Cta = $('.cta');
	f3CtaCopy = $('.cta .cta-copy');
	
	animateBanner();
}

function animateBanner(){
	tl = new TimelineMax();
	
	//Frame1 animation
	var f1Duration = 1.2;
	var f1Delay = 1.2;
	
	f1SeneAll = reverse(f1SeneAll);
	f1ContentAll = reverse(f1ContentAll);
	
	for(var i=0; i<f1SeneAll.length; i++){
		var _duration = f1Duration -(i*0.2);
		tl.to(f1SeneAll[i], _duration, {x:'+=300',ease: Power2.easeIn}, f1Delay);
		tl.to(f1ContentAll[i], _duration, {x:'+=50',ease: Power2.easeIn},f1Delay);
		f1Delay += 0.40;
	}
	
	//Frame2 animation
	var f2Duration = 1.2;
	var f2Delay = 4.2;
	
	f2SceneAll = reverse(f2SceneAll);
	f2ContentAll = reverse(f2ContentAll);
	
	for(var j = 0; j<f2SceneAll.length; j++){
		var _durationf2 = f2Duration - (j*0.2);
		tl.to(f2SceneAll[j], _durationf2, {x:'-=300',ease: Power2.easeIn}, f2Delay);
		tl.to(f2ContentAll[j], _durationf2, {x:'-=50',ease: Power2.easeIn}, f2Delay);
		
		// exceptional delay for red box
		if(j == 3){
			f2Delay += 0.30;
		}else {
			f2Delay += 0.35;
		}
	}
	
	var f3Delay = f2Delay - 0.2;
	tl.staggerFrom(f3Scene1Content, 0.5, {x:142}, 0.1, f3Delay);
	tl.staggerFrom(f3Scene2Content, 0.5, {x: 158}, 0.1);
	tl.from(f3Cta, 0.2, {y:20, opacity: 0});
	tl.from(f3CtaCopy, 0.1, {y:5, opacity: 0, ease: Power2.easeIn});
	
}
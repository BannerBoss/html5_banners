// HogarthClass -----------------------------------------
var H = {
	// get element by ID
	e:function(id){
		return document.getElementById(id);
	},

	// get param by name
	gpn: function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	} 
}

// Main Timeline
var TL = new TimelineMax({ repeat: 1, repeatDelay: 2 });

// Remove trash on init
TL.add( TweenMax.to(H.e('wrapper'), 0, {opacity: 1}) )

TL.add([
	TweenMax.to(H.e('bg'), 1.0, { delay:0.5, autoAlpha:1, }),
	TweenMax.to(H.e('kid'), 1.0, { delay:1.0, autoAlpha:1, }),
	TweenMax.from(H.e('crown'), 1.0, { delay:1.5, autoAlpha:0, y:-30}),
	TweenMax.from(H.e('txt1'), 1.0, { delay:2, autoAlpha:0 }),
]);

TL.add([
	TweenMax.to(H.e('txt1'), 1.0, { delay:2.5, autoAlpha:1, y:-15 }),
	TweenMax.from(H.e('icon3'), 1.0, { delay:3, autoAlpha:0 }),
	TweenMax.from(H.e('icon2'), 1.0, { delay:3.5, autoAlpha:0 }),
	TweenMax.from(H.e('icon1'), 1.0, { delay:4, autoAlpha:0 }),
]);

TL.add([
	TweenMax.to(H.e('txt1'), 0.5, { autoAlpha:0, }),
	TweenMax.to(H.e('icon1'), 0.5, { autoAlpha:0 }),
	TweenMax.to(H.e('icon2'), 0.5, { autoAlpha:0 }),
	TweenMax.to(H.e('icon3'), 0.5, { autoAlpha:0 }),
], "+=2.0");

TL.add([
	TweenMax.from(H.e('logo'), 0.5, { delay:0.5, autoAlpha:0 }),
	TweenMax.from(H.e('product'), 0.5, { delay:0.5, autoAlpha:0, x:20 }),
	TweenMax.from(H.e('bubble'), 0.5, { delay:0.5, autoAlpha:0 }),
	TweenMax.from(H.e('cta'), 0.5, { delay:0.5, autoAlpha:0 }),
	],"+=0" ,"sequence");
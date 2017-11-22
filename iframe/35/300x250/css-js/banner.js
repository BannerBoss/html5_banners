
/*------------------------------------
Helper function
------------------------------------*/
function $ (selector) {
	return document.querySelector(selector);
}

/*------------------------------------
Custom video player
------------------------------------*/
var banner 				= $('#banner');
var video1 				= $('#video1');
var video2 				= $('#video2');
var video1CTA			= $('.now-playing__1');
var video2CTA			= $('.now-playing__2');
var unMuteCTA 			= $('.frame1__click-for-audio');
var vPlayer 			= {};
vPlayer.video 			= video1;
vPlayer.playPause 		= $('.play-pause');
vPlayer.muteUnmute 		= $('.mute-unmute');
vPlayer.progressBar 	= $('.seek-bar__input');
vPlayer.progressAmount 	= $('.seek-bar__progress');
vPlayer.playHDCTA		= $('.play-hd');
vPlayer.controls 		= $('.video-player__controls');
vPlayer.isFullscreen 	= false;

// play Pause Handler
vPlayer.playPauseHandler = function () {
	if(vPlayer.video.paused){
		vPlayer.video.play();
		vPlayer.playPause.classList.remove('is-paused');
	}else {
		vPlayer.video.pause();
		vPlayer.playPause.classList.add('is-paused');
	}
};

// mute Unmute Handler
vPlayer.muteUnmuteHandler = function () {
	if(vPlayer.video.muted){
		vPlayer.video.muted = false;
		vPlayer.muteUnmute.classList.remove('is-muted');
	}else {
		vPlayer.video.muted = true;
		vPlayer.muteUnmute.classList.add('is-muted');
	}
};

// unmute handler
vPlayer.unmuteHandler = function(){
	unMuteCTA.style.display = 'none';
	vPlayer.video.muted = false;
	vPlayer.muteUnmute.classList.remove('is-muted');
	vPlayer.controls.classList.add('is-show');
};

// video time update Handler
vPlayer.timeupdateHandler = function () {
	var _value = (100 / vPlayer.video.duration) * vPlayer.video.currentTime;
	vPlayer.progressBar.value = _value;
	vPlayer.progressAmount.style.width = _value+'%';
};

// user Time update Handler
vPlayer.userTimeupdateHandler = function () {
	var _value = vPlayer.progressBar.value;
	var _currentTime = (vPlayer.video.duration/100) * _value;
	vPlayer.video.currentTime = _currentTime;
	vPlayer.progressAmount.style.width = _value+'%';
};

// video End Handler
vPlayer.videoEndHandler = function () {
	exitFullScreen();
	animateSecondFrame();
};


// first Play Handler
vPlayer.firstPlayHandler = function (mute) {
	vPlayer.video.addEventListener('timeupdate', vPlayer.timeupdateHandler);
	vPlayer.video.addEventListener('ended', vPlayer.videoEndHandler);

	var _mute = true;
	if(mute != undefined){
		_mute = mute;
	}

	if(_mute === false){
		vPlayer.unmuteHandler();
	}

	vPlayer.video.currentTime = 0;
	vPlayer.video.muted = _mute;
	vPlayer.video.play();
};

// Play Second video
vPlayer.playSelectedVideo = function (thisVideo) {
	vPlayer.video.pause();
	video1.style.visibility = 'hidden';
	video2.style.visibility = 'hidden';
	thisVideo.style.visibility = 'visible';
	vPlayer.video = thisVideo;
	vPlayer.firstPlayHandler(false);
}

// video1 play handler
function video1PlayHandler(){
	video2CTA.classList.remove('is-running');
	video1CTA.classList.add('is-running');
	vPlayer.playSelectedVideo(video1);
}

// video2 play handler
function video2PlayHandler(){
	video1CTA.classList.remove('is-running');
	video2CTA.classList.add('is-running');
	vPlayer.playSelectedVideo(video2);
}


// enable fullscreen
function enableFullScreen(vid){
	if (vid.requestFullscreen) {
        vid.requestFullscreen();
    }else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
    }else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen();
    }else if (vid.msRequestFullscreen) {
        vid.msRequestFullscreen();
    }else if(vid.webkitSupportsFullscreen){
        vid.webkitEnterFullscreen();
    }
}

// exit fullscreen
function exitFullScreen(){
	if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }  
}


// play hd functionality
function playHDHandler(){

	vPlayer.video.setAttribute('controls','');
	
	vPlayer.unmuteHandler();

	vPlayer.video.play();
	enableFullScreen(vPlayer.video);

	Enabler.counter('play_hd_cta');
	vPlayer.isFullscreen = true;
}

// full screen chage handler
function fullscreenChangeHandler(){
	if(vPlayer.isFullscreen){
		vPlayer.controls.style.display = 'none';
		frame1Lockup.style.display = 'none';
		vPlayer.isFullscreen = false;
	}else {
		vPlayer.video.removeAttribute('controls');
		vPlayer.controls.style.display = 'block';
		frame1Lockup.style.display = 'block';

		// play pause icon chage if custom controls 
		if(vPlayer.video.paused){
			vPlayer.playPause.classList.add('is-paused');
		}else {
			vPlayer.playPause.classList.remove('is-paused');
		}

		// mute unmute icon chage if custom controls 
		if(vPlayer.video.muted){
			vPlayer.muteUnmute.classList.add('is-muted');
		}else {
			vPlayer.muteUnmute.classList.remove('is-muted');
		}
	}
} 

// video player init
vPlayer.init = function () {
	vPlayer.playPause.addEventListener('click', vPlayer.playPauseHandler, false);
	vPlayer.muteUnmute.addEventListener('click', vPlayer.muteUnmuteHandler, false);
	vPlayer.progressBar.addEventListener('change', vPlayer.userTimeupdateHandler);
	vPlayer.progressBar.addEventListener('input', vPlayer.userTimeupdateHandler);
	video1CTA.addEventListener('click', video1PlayHandler, false);
	video2CTA.addEventListener('click', video2PlayHandler, false);
	unMuteCTA.addEventListener('click', vPlayer.unmuteHandler, false);
	vPlayer.playHDCTA.addEventListener('click', playHDHandler, false)

	// fullscreen change handler bind for all browser
	document.addEventListener("fullscreenchange", fullscreenChangeHandler, false);
	document.addEventListener("mozfullscreenchange", fullscreenChangeHandler, false);
	document.addEventListener("webkitfullscreenchange", fullscreenChangeHandler, false);
	document.addEventListener("MSFullscreenChange", fullscreenChangeHandler, false);
};


/*------------------------------------
Animate first Frame
------------------------------------*/
var frame1Lockup 		= $('.frame1__lockup');
frame1Lockup.addEventListener('click', lockupClickHandler, false);

function lockupClickHandler(){
	Enabler.exit('frame1_lockup');
	vPlayer.video.pause();
	animateSecondFrame();
}


function animateFirstFrame(){
	vPlayer.init();
	vPlayer.firstPlayHandler();
}

/*------------------------------------
Frame2
------------------------------------*/
var frame2 				= $('.frame2');
var frame2Html			= frame2.innerHTML;
var frame2Glitch 		= $('.frame2__glitch');
var frame2CTA 			= $('.frame2__cta');
var frame2Replay 		= $('.frame2__replay');
var frame2Frame2FB		= $('.frame2__fb');
var frame2Frame2Twitter = $('.frame2__twitter');
var frame2HashTag		= $('.frame2__hashtag');
var frame2BG			= $('.frame2__content__final');

function bannerReplayHandler(event){
	frame2.classList.remove('is-active');
	frame2.innerHTML = frame2Html;
	vPlayer.playSelectedVideo(video1);

	frame2Glitch 		= $('.frame2__glitch');
	frame2CTA 			= $('.frame2__cta');
	frame2Replay 		= $('.frame2__replay');
	frame2Frame2FB		= $('.frame2__fb');
	frame2Frame2Twitter = $('.frame2__twitter');
	frame2HashTag		= $('.frame2__hashtag');
	frame2BG			= $('.frame2__content__final');

	Enabler.counter('replay_cta');
	event.stopPropagation();
}

function frame2CtaClickHandler(event){
	Enabler.exit('watch_video_cta');
	event.stopPropagation();
}

function frame2FbClickHandler(event){
	Enabler.exit('facebook_cta');
	event.stopPropagation();
}

function frame2TwitterClickHandler(event){
	Enabler.exit('twitter_cta');
	event.stopPropagation();
}

function frame2HashTagClickHandler(event){
	Enabler.exit('hashtag_cta');
	event.stopPropagation();
}

function frame2BgClickHandler(){
	Enabler.exit('frame2_bg');
}

function animateSecondFrame(){
	frame2.classList.add('is-active');
	frame2CTA.addEventListener('mouseenter', glitchAnimation, false);
	frame2CTA.addEventListener('click', frame2CtaClickHandler, false);
	frame2Replay.addEventListener('click', bannerReplayHandler, false);
	frame2Frame2FB.addEventListener('click', frame2FbClickHandler, false);
	frame2Frame2Twitter.addEventListener('click', frame2TwitterClickHandler, false);
	frame2HashTag.addEventListener('click', frame2HashTagClickHandler, false);
	frame2BG.addEventListener('click', frame2BgClickHandler, false);

	
	setTimeout(function(){
		glitchAnimation();
	},1500);

	setTimeout(function(){
		glitchAnimation();
	},4000);
}

function glitchAnimation(){
	frame2Glitch.classList.add('animate-glitch');
	setTimeout(function(){
		frame2Glitch.classList.remove('animate-glitch');
	},600);
}



/*------------------------------------
DoubleClick functionality
------------------------------------*/
window.onload = function() {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
}
 
function enablerInitHandler() {
    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}
 
function pageLoadedHandler() {
	// video1 reporting
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
	  studio.video.Reporter.attach('video_1', video1);
	});

	// video2 reporting
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
	  studio.video.Reporter.attach('video_2', video2);
	});

	banner.style.visibility = 'visible';

    // to run second frame comment animateFirstFrame(); & uncomment animateSecondFrame();
	animateFirstFrame();
	// animateSecondFrame();

}





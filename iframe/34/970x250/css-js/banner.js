/*-------------------------------------
    playWithVideo utility function
---------------------------------------*/
var PostPhysicalRelease = true;
(!PostPhysicalRelease) ? $('body').addClass('pre-release') : $('body').addClass('post-release') ;

/*-------------------------------------
    Frame Element initialization
---------------------------------------*/
var frame_two = $('.frame_two');
var frame_two_bg = $('#frame_two_bg');
var frame_two_rating = $('.frame_two .movie-rating');
var frame_two_rating_bg = $('#frame_two_rating');
var frame_two_smoke = $('#stream_video');
var frame_two_dark_overlay = $('.frame_two .dark-overlay');

var frame_three = $('.frame_three');
var frame_three_tom = $('#frame_three_tom');
var frame_three_james = $('#frame_three_james');
var frame_three_title = $('.frame_three .left-content .title');
var frame_three_sub_title = $('.frame_three .left-content .sub_title');
var frame_three_copyright = $('.frame_three .left-content .copyright');
var frame_three_poster = $('.frame_three .left-content .poster');
var frame_three_amazon_logo = $('.frame_three .buy_now img');
var frame_three_cta_buynow = $('.frame_three .buy_now .buy_now__cta');
var frame_three_cta_home = $('.frame_three .home_cta');
var frame_three_cta_gallery = $('.frame_three .gallery_cta');
var frame_three_trailer_block = $('.frame_three .right-content .trailer-block');
var frame_three_video_trailer = $('#frame_three_trailer');
var frame_three_replay_block = $('.frame_three .replay-block');

var gallery_wrapper = $('.gallery-wrapper');
var gallery_title = $('.gallery-wrapper .left-content .title');
var gallery_sub_title = $('.gallery-wrapper .left-content .sub_title');
var gallery_poster = $('.gallery-wrapper .left-content .poster');
var gallery_amazon_logo = $('.gallery-wrapper .buy_now img');
var gallery_cta_buynow = $('.gallery-wrapper .buy_now .buy_now__cta');
var gallery_cta_home = $('.gallery-wrapper .home_cta');
var gallery_cta_gallery = $('.gallery-wrapper .gallery_cta');
var gallery_copyright = $('.gallery-wrapper .left-content .copyright');
var gallery_next = $('.gallery-content .next');
var gallery_previous = $('.gallery-content .previous');
var gallery = {};

var tl1 = new TimelineLite();
var tl2 = new TimelineLite();
var tl3 = new TimelineLite();
var tl4 = new TimelineLite();

/*-------------------------------------
    Sizmek api
---------------------------------------*/

$(window).load(function(){
    // initEB();
    startAd();
});

function initEB(){
    if (!EB.isInitialized()){
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    }else{
        startAd();
    }
    function handleClickthrough(){
    // EB.clickthrough('buynow');
    }


    document.getElementById('banner').addEventListener("click", function(event){
        EB.clickthrough();
        click_on_trailer();
    });
}

function startAd(){
    document.getElementById("banner").style.visibility = "visible";
    frame_two_anim();
}

/*------------------------------------------
    Tracks a user action custom interaction
--------------------------------------------*/
function customPauseInteraction(){
    EB.userActionCounter("pause_interaction_detected");
}

function customReplayInteraction(){
    EB.userActionCounter("replay_interaction_detected");
}

function customPlayInteraction(){
    EB.userActionCounter("play_interaction_detected");
}

function customMuteInteraction(){
    EB.userActionCounter("mute_interaction_detected");
}

function customUnmuteInteraction(){
    EB.userActionCounter("unmute_interaction_detected");
}

function customGalleryInteraction(){
    EB.userActionCounter("gallery_interaction_detected");
}

function customHomeInteraction(){
    EB.userActionCounter("home_interaction_detected");
}

function customSlideChangeInteraction(){
    EB.userActionCounter("slide_change_interaction_detected");
}

/*-------------------------------------
    playWithVideo utility function
---------------------------------------*/
var playWithVideo = function(handler, time) {
    var wrapped = function() {
        if(this.currentTime >= time) {
            $(this).off('timeupdate', wrapped);
                return handler.apply(this, arguments);
            }
        };
    return wrapped;
};

/*-------------------------------------
   Frame three Gallery
---------------------------------------*/
$(document).ready(function(){

    gallery.elm = $('.gallery-wrapper .gallery');
    gallery.totalSlide = $('.gallery-wrapper .gallery li').length;
    gallery.slideWidth = 676;
    gallery.activeSlide = 1;
    gallery.next = gallery_next;
    gallery.prev = gallery_previous;

    gallery.slideChange = function(){
        gallery.prev.css('opacity', 1).removeClass('inactive');
        gallery.next.css('opacity', 1).removeClass('inactive');

        if(gallery.activeSlide === 1){ gallery.prev.css('opacity', 0.5).addClass('inactive');  }
        else if(gallery.activeSlide === gallery.totalSlide){ gallery.next.css('opacity', 0.5).addClass('inactive'); }

        gallery.elm.css('margin-left', -gallery.slideWidth*(gallery.activeSlide-1));
    };

    gallery.ini = function(){
        gallery.elm.css({'width': gallery.totalSlide*100+'%', 'margin-left': 0});
        gallery.activeSlide = 1;
        gallery.slideChange();
    };
    gallery.ini();

    gallery.next.on('click',function(e){
        if(gallery.activeSlide < gallery.totalSlide){
            gallery.activeSlide++;
            gallery.slideChange();
            customSlideChangeInteraction();
        } else {
            $('.frame_three .replay-block .frame_three_replay').css("display", "block");
            gallery_wrapper.hide();
            customHomeInteraction();
        }
        e.preventDefault();
        e.stopPropagation();
    });

    gallery.prev.on('click',function(e){
        if(gallery.activeSlide > 1){
            gallery.activeSlide--;
            gallery.slideChange();
            customSlideChangeInteraction();
        } else {
            $('.frame_three .replay-block .frame_three_replay').css("display", "block");
            gallery_wrapper.hide();
            customHomeInteraction();
        }
        e.preventDefault();
        e.stopPropagation();
    });

});

/*-------------------------------------
   Frame two animation
---------------------------------------*/
var frame_two_anim = function(){
    frame_two.css('opacity', 1);

    tl2.to(frame_two_bg,2.5,{css:{top: -200},ease:Linear.easeNone});
    tl2.to(frame_two_bg,1.5,{css:{top: -352}});

    tl2.staggerTo(frame_two_rating, 0.3, {css:{scale: 0.9}},0.2,0);
    tl2.to(frame_two_rating,3,{css:{scale: 1}},1);

    tl2.to(frame_two_rating,0.3,{css:{opacity:0, scale:1.2, top:'-=50px'}, onComplete:function(){
        frame_three_anim();
    }},2.5);

};

/*-------------------------------------
   Frame three animation
---------------------------------------*/
var frame_three_anim = function(){
    tl3.to(frame_three_tom,0.5,{css:{top: -2}});
    tl3.to(frame_three_james,0.5,{css:{top: 35}});
    tl3.to(frame_two_dark_overlay,0.5,{css:{opacity: 1}},0);
    tl3.to(frame_three_title,0.5,{css:{opacity: 1, scale:1}});
    tl3.to([frame_three_sub_title,frame_three_copyright],0.5,{css:{opacity: 1}});
    tl3.to(frame_three_poster,0.4,{css:{opacity:1, scale: 1}});

    tl3.staggerTo([frame_three_amazon_logo,frame_three_cta_buynow], 0.4, {css:{opacity:1, marginTop: '-=20px'}},0.2);
    tl3.to([frame_three_cta_home,frame_three_cta_gallery], 0.4, {css:{opacity:1, bottom: 19}, onComplete: function(){
        tl3.to(frame_three_trailer_block,0.2,{css:{opacity: 1}});
        frame_three_video_trailer[0].muted = true;
        frame_three_video_trailer[0].play();
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('.frame_three .video-control').css("display", "none");
            $('.frame_three .mobile-video-control #mobile-play').css("display", "block");
        }
    }});

};

/*-------------------------------------
   Gallery animation
---------------------------------------*/
var gallery_animation = function(){
    tl4.pause(0);
    tl4.clear();
    tl4.to(gallery_title,0.5,{css:{opacity: 1, scale:1}});
    tl4.to([gallery_sub_title,gallery_copyright],0.5,{css:{opacity: 1}});
    tl4.to(gallery_poster,0.4,{css:{opacity:1, scale: 1}});

    tl4.to(gallery_previous, 0.2, {css:{left: '-=40px', opacity: 1}},1);
    tl4.to(gallery_next, 0.2, {css:{right: '-=40px', opacity: 1},onComplete: function(){
        gallery.ini();
    }},1);

    tl4.staggerTo([gallery_amazon_logo,gallery_cta_buynow], 0.4, {css:{opacity:1, marginTop: '-=20px'}}, 0.2);
    tl4.to([gallery_cta_home,gallery_cta_gallery], 0.4, {css:{opacity:1, bottom: 19}});
    tl4.play();
};

frame_three_video_trailer.on('ended', function(){
    $('.frame_three .replay-block .frame_three_replay').css("display", "block");
    frame_three_replay_block.show();
});

/*-------------------------------------
    Frame three trailer control
---------------------------------------*/
// play/pause
$('.frame_three .video-control .play-pause').on('click', function(e){
    if($(this).hasClass('pause')){
        frame_three_video_trailer[0].pause();
        $(this).removeClass('pause').addClass('play');
        customPauseInteraction();
    }else{
        frame_three_video_trailer[0].play();
        $(this).removeClass('play').addClass('pause');
        customPlayInteraction();
    }
    e.preventDefault();
    e.stopPropagation();
});

// mute/unmute
$('.frame_three .video-control .mute-unmute').on('click', function(e){
    if($(this).hasClass('mute')){
        frame_three_video_trailer[0].muted = true;
        $(this).removeClass('mute').addClass('unmute');
        customMuteInteraction()
    }else{
        frame_three_video_trailer[0].muted = false;
        $(this).removeClass('unmute').addClass('mute');
        customUnmuteInteraction();
    }
    e.preventDefault();
    e.stopPropagation();
});

click_on_trailer = function () {
    frame_three_video_trailer[0].muted = true;
    $('.frame_three .video-control .mute-unmute').removeClass('mute').addClass('unmute');
    frame_three_video_trailer[0].pause();
    $('.frame_three .video-control .play-pause').removeClass('pause').addClass('play');
};

/*-------------------------------------
    Frame three trailer replay block
    hover & click functionality
---------------------------------------*/
frame_three_replay_block.on('click',function(e){

    $('.frame_three .replay-block .frame_three_replay').css("display", "none");
    frame_three_replay_block.hide();
    frame_three_video_trailer[0].muted = false;
    $('.frame_three .video-control .mute-unmute').removeClass('unmute').addClass('mute');
    frame_three_video_trailer[0].play();
    $('.frame_three .video-control .play-pause').removeClass('play').addClass('pause');

    customReplayInteraction();

    document.getElementById('frame_three_trailer').addEventListener('ended',function(){
        document.getElementById('frame_three_trailer').webkitExitFullScreen();
    },false);

    e.preventDefault();
    e.stopPropagation();
});

/*-------------------------------------
    Play video for mobile devices
---------------------------------------*/
$('.frame_three .mobile-video-control #mobile-play').on('click', function(e){

    $('.frame_three .mobile-video-control').css("display", "none");
    $('.frame_three .video-control').css("display", "block");

    frame_three_video_trailer[0].muted = false;
    $('.frame_three .video-control .mute-unmute').removeClass('unmute').addClass('mute');
    frame_three_video_trailer[0].play();
    $('.frame_three .video-control .play-pause').removeClass('play').addClass('pause');

    customPlayInteraction();

    document.getElementById('frame_three_trailer').addEventListener('ended',function(){
        document.getElementById('frame_three_trailer').webkitExitFullScreen();
    },false);

    e.preventDefault();
    e.stopPropagation();
});

/*-------------------------------------
    Frame three home & gallery click
---------------------------------------*/
frame_three_cta_gallery.on('click', function(e){
    tl4.pause(0);
    tl4.clear();

    $('.frame_three .mobile-video-control #mobile-play').css("display", "none");
    gallery_wrapper.show();
    frame_three_video_trailer[0].pause();
    frame_three_video_trailer[0].currentTime = 0;
    frame_three_replay_block.show();

    gallery_animation();
    gallery.ini();
    customGalleryInteraction();

    e.preventDefault();
    e.stopPropagation();
});

gallery_cta_home.on('click', function(e){
    $('.frame_three .mobile-video-control #mobile-play').css("display", "none");
    $('.frame_three .replay-block .frame_three_replay').css("display", "block");
    gallery_wrapper.hide();
    customHomeInteraction();

    e.preventDefault();
    e.stopPropagation();
});
/*-------------------------------------
    Sizmek api
---------------------------------------*/
window.onload = function(){
    initEB();
    startAd();
};

function initEB(){
    if (!EB.isInitialized()){
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    }else{
        startAd();
    }

    document.getElementById('banner').addEventListener("click", function(event){
        EB.clickthrough();
    });
}

function startAd(){
    document.getElementById("banner").style.visibility = "visible";
    frame_one_animation();
}

/*------------------------------------------
    Tracks a user action custom interaction
--------------------------------------------*/
function customMuteInteraction(){
    EB.userActionCounter("mute_interaction_detected");
}

function customUnmuteInteraction(){
    EB.userActionCounter("unmute_interaction_detected");
}




/*-------------------------------------
    Frame Element initialization
---------------------------------------*/
var frame_one               = $('.frame_one');
var frame_one_video         = $('#frame_one_trailer');
var frame_one_play_pause    = $('.frame_one .video-control .play-pause');
var book_now                = $('.frame_one .book-now');




    function frame_one_animation() {
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

            /* video autoplay */
        var frame_one_video_autoplay = function(){
            frame_one_video[0].muted = true;
            $('.frame_one .video-control .mute-unmute').removeClass('mute').addClass('unmute');
            frame_one_video[0].play();
        };
         frame_one_video_autoplay();


        /* Video starts after 0 seconds */
        var video_start_timeframe = function () {
            frame_one_video.on('timeupdate', playWithVideo(function(){
                // frame_one_animation();
            }, 30));
        };
         video_start_timeframe();

            // mute/unmute
            $('.frame_one .book-now').on('click', function(e){
                if($(this).hasClass('book-now')){
                    $( "#banner .frame_two").css( "display","block" );
                    frame_two_animation();
					frame_one_video[0].muted = true;
                }

            });



        setTimeout(function(){ frame_two_animation()}, 30000);

    }
     $('.frame_one .video-control .mute-unmute').on('click', function(e){
                if($(this).hasClass('mute')){
                    frame_one_video[0].muted = true;
                    $(this).removeClass('mute').addClass('unmute');
                    customMuteInteraction();
                }else{
                    frame_one_video[0].muted = false;
                    $(this).removeClass('unmute').addClass('mute');
                    customUnmuteInteraction();
                }
                e.preventDefault();
                e.stopPropagation();
            });

     function frame_two_animation() {
         $( "#banner .frame_one").css( "display","none" );
         $( "#banner .frame_two").addClass( "active" );
         $( "#banner .frame_two").addClass( "trasnsition-glow bg " );
         $( "#banner .frame_two").removeClass( "trasnsition-glow" );


     }





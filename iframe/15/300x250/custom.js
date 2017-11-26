
//------------------------------------------------------------------------------
//      DC STUDIO BLOCK
//------------------------------------------------------------------------------


// Check for enabler init
if (!Enabler.isInitialized()) {
    Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitialized);
} 
else {
    enablerInitialized();
}

// Enabler initialization
function enablerInitialized() {
    if (!Enabler.isVisible()) {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,adVisible);
    } else {
        adVisible();
    }
}

// Make the ad Visible
function adVisible() {
    showAd();
}

// Exit Handler
bgExitHandler = function(e) {
    Enabler.exit('Exit_Clickthrough');
    var myvideo = document.getElementById("vid-player");
    myvideo.pause();
    myvideo.currentTime = 0; 
}

//------------------------------------------------------------------------------
//  CUSTOM BLOCK
//------------------------------------------------------------------------------

// start ad animation
function showAd(){
    document.getElementsByClassName("bg-exit")[0].onclick = bgExitHandler;
    console.log("Ad Started !");    
    animFrame1();
}

// Frame 1 Animation
//-------------------------------------------------------------
function animFrame1()
{
    console.log("Frame1 Started!!!");
    var cta1 = document.getElementsByClassName("cta1")[0];
    cta1.onclick = animFrame2;

    var iid = setInterval(animateCTA,1);
    var op = 0;
    function animateCTA() {
        if(op >= 1)clearInterval(iid);
        op += 0.05;
        //console.log(op);
        cta1.style.opacity = op; 
    }      
}

// Frame 2 Video
//-------------------------------------------------------------
function animFrame2(){
    document.getElementById("frame2").style.display = 'block';
    var myvideo = document.getElementById("vid-player");
    var vidclose = document.getElementsByClassName("vid-close")[0];
    
    Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
       studio.video.Reporter.attach('video_1', myvideo);
    });
    
    myvideo.play();
    
    myvideo.onended = function(){
        console.log('video ends');
        closeVideo();
    };  
    // for Saffari
    myvideo.addEventListener('ended', closeVideo);    

    function showReplay(){
        var replayBtn = document.getElementsByClassName("vid-replay")[0];
        replayBtn.style.display = 'block';
        replayBtn.onclick = function(){
            myvideo.currentTime = 0;
            myvideo.play();
            document.getElementById("frame2").style.display = 'block';          
            replayBtn.style.display = 'none';
        }
    }

/*    function stopVideo(){
        myvideo.pause();
        myvideo.currentTime = 0; 
        showReplay();
        //console.log('video ends');
    }*/

    function closeVideo(){
        myvideo.pause();
        myvideo.currentTime = 0;         
        document.getElementById("frame2").style.display = 'none';
        document.getElementsByClassName("cta1")[0].style.display = 'none';
        document.getElementsByClassName("cta2")[0].style.display = 'block';
        document.getElementsByClassName("cta2")[0].onclick = bgExitHandler;
        showReplay();                        
    }

    vidclose.onclick = function(){
        closeVideo();
    }
}


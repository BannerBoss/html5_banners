var banner = document.getElementById('banner');

window.onload = function() {
    startBanner();

    function loopBanner(containerId,bannerDuration,loopCount){

        var interval = setInterval(loopIt,bannerDuration);
        var loop = 0;

        function loopIt(){
            if(loop >= loopCount){
				document.getElementById('banner').classList.add("is-paused");
                clearInterval(interval);
                return;
				
            }
            loop++;
            var banner = document.getElementById(containerId);
            var tmp = banner.innerHTML;
            banner.innerHTML = tmp;
			/*document.getElementsByClassName('is-paused'); */
			
			 
        }
    }

    loopBanner('banner',15000,1);
		

}

var startBanner = function () {
	banner.style.visibility = 'visible';
};


	
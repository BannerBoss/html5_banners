var banner = document.getElementById('banner');

window.onload = function() {
    startBanner();
};

var startBanner = function () {
    banner.style.visibility = 'visible';
    banner.className = 'is_visible';

    document.getElementById('click-btn').addEventListener('click',exitHandler);

    function exitHandler(){	
        ExitApi.exit();
    	//console.log('exit !!');
    }
};


// Bannner reply code

var reply = document.getElementById('replay');

reply.addEventListener('click', function(event){
    event.stopPropagation();
    var tmp = banner.innerHTML;
    banner.innerHTML = tmp; 
    reply.style.display = 'none';
    setTimeout(function(){
        reply.style.display = 'block';
    },500);
})
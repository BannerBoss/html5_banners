// JavaScript Document

var banner = document.getElementById('banner');
var cta = document.querySelector('.cta2');


function bannerLoaded(){
	banner.className = 'is-visible';
}

window.onload = bannerLoaded;

banner.addEventListener("click", function(){
       window.open("http://www.google.com/");
    });
	
	
cta.addEventListener('click', function(event){
		window.open("http://www.yahoo.com/");
	});	
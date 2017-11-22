
var searchCopy;
var endCopy;
var introImageID;
var endImageID;
var imageFolderURL = "https://s0.2mdn.net/ads/richmedia/studio/41388688/"   
var exitURL;
function checkDCInit()
{

	loadDynamicContent();
}


function loadDynamicContent()
{
	exitURL = 'http://www.booking.com/destinationfinder/romantic.html?aid=1145611;label=brand_UK&utm_source=PUBLISHER';

	var imgSrcIntro = '300x250_intro.jpg';
	var imgSrcCity1 = '300x250_city1.jpg';
	var imgSrcCity2 = '300x250_city2.jpg';

    document.getElementById("intro_image").innerHTML = '<img src="'+imgSrcIntro+'" alt="">';
	document.getElementById("end_image").innerHTML = '<img src="'+imgSrcCity1+'" alt="">';
	document.getElementById("city2").innerHTML = '<img src="'+imgSrcCity2+'" alt="">';
	
	document.getElementById('action').innerHTML = 'Romance';
	document.getElementById('country').innerHTML = 'Bruges';
	document.getElementById('destination').innerHTML = 'Vienna';

	document.getElementById('endcopy_container').innerHTML = 'Every passion has a destination';
	document.getElementById('search_copy').innerHTML = 'Romantic';

	App.init();
}

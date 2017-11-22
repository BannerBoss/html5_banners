var banner = document.getElementById('banner');

window.onload = function() {
    startBanner();
};

var startBanner = function () {
    banner.style.visibility = 'visible';
    banner.classList.add('is_visible');
};
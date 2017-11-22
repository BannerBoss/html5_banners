/*****ionLoad event********/

window.onload = function() {
	console.log('Loaded');
};

/*************/


setTimeout(function () {
    var showNumber = function () {
        var numberArr = ['0.0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3.0'];
        var element = document.getElementById('number');

        element.innerHTML = numberArr[globalCounter];
        globalCounter += 1;

        if (element.innerHTML != 'undefined') {
            console.log(element);

        } else {
            element.innerHTML = numberArr[numberArr.length - 1];
            clearInterval(timer);
        }
    };
    var globalCounter = 0;
    var timer = setInterval(showNumber, 48);
}, 5500);
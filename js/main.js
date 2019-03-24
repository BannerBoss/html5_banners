$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	: 300,
		maxHeight	: 600,
		width       : 300,
		height      : 600,
		fitToView	: true,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".various1").fancybox({
		maxWidth	: 300,
		maxHeight	: 250,
		width       : 300,
		height      : 250,
		fitToView	: true,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".various2").fancybox({
		maxWidth	: 970,
		maxHeight	: 250,
		width       : 970,
		height      : 250,
		fitToView	: true,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".various3").fancybox({
		maxWidth	: 320,
		maxHeight	: 480,
		width       : 320,
		height      : 480,
		fitToView	: true,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".various4").fancybox({
		maxWidth	: 980,
		maxHeight	: 300,
		width       : 980,
		height      : 300,
		fitToView	: true,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".various5").fancybox({
		maxWidth	: 750,
		maxHeight	: 430,
		width       : 750,
		height      : 430,
		fitToView	: true,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});


	$(window).scroll(function() {
	    if ($(this).scrollTop() > 50 ) {
	        $('.scrolltop:hidden').stop(true, true).fadeIn();
	    } else {
	        $('.scrolltop').stop(true, true).fadeOut();
	    }
	});

	$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})

	$('#exampleModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var recipient = button.data('whatever') // Extract info from data-* attributes
	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  modal.find('.modal-title').text('New message to ' + recipient)
	  modal.find('.modal-body input').val(recipient)
	})
});
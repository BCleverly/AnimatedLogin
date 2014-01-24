if (!$.support.transition)
  $.fn.transition = $.fn.animate;

$lb = $('.login-box');

$('.start-anim').on('click', function(e){
	
	var docHeight = Math.floor($(document).height() /2);
	var lfHeight = Math.floor($lb.height() /2);
	var transHeight = docHeight-lfHeight;
	
	console.log(docHeight, lfHeight)
	
	$lb.show(function()
	{
		$(this).transit({
			y: transHeight
		});
	});
	
	return false;
});
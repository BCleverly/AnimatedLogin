$lb = $('.login-box');

$('.start-anim').on('click', function(e){
	
	var docHeight = $(document).height();
	transHeight = (docHeight / 2) - ($lb.height() / 2);
	
	console.log(docHeight, transHeight)
	
	$lb.show(function(){
		$(this).transit({
			y: transHeight
		});
	});
	
	return false;
});
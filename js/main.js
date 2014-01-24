if (!$.support.transition)
  $.fn.transition = $.fn.animate;

var $lb = $('.login-box');
var docHeight = Math.floor( $(document).height() / 2 );
var lfHeight = Math.floor( $lb.height() );
var transHeight = docHeight-lfHeight;

$('.start-anim-fade').on('click', function(e){
	fadeInLoginForm();			
	return false;
});

$('.start-anim-slide').on('click', function(e){
	slideInLoginForm();			
	return false;
});

function slideInLoginForm()
{
	
}

function fadeInLoginForm()
{
	if(checkFormStatus())
	{
		$lb.find('.login-form').fadeOut(function(){
			$lb.transit({
				top:0,
				y: '-250px'
			})
			.fadeOut()
			.data('active', false);
		});
	}
	else 
	{
		$lb.show(function(){
			$(this).transit({
				top:'auto',
				y: transHeight
			}, function(){
				$(this).find('.login-form').fadeIn();
			});		
		}).data('active', true);
	}
}

function checkFormStatus()
{
	return $lb.data('active');
}
if (!$.support.transition)
  $.fn.transition = $.fn.animate;
$lb = $('.login-box');
$lbf = $('.login-box-fade');
$lbs = $('.login-box-slide');
var docHeight = Math.floor( $(document).outerHeight(true) / 2 );
var lfHeight = Math.floor( $lb.outerHeight(true) );
var transHeight = docHeight-lfHeight;

$('.start-anim-fade').on('click', function(e){
	fadeInLoginForm();			
	return false;
});

$('.start-anim-slide').on('click', function(e){
	slideInLoginForm();			
	return false;
});
$('.js-login-form').on('keyup', function(e){
	$username = $(this).find('#username').val();
	$password = $(this).find('#password').val();
	if (($username != '') && ($password != '')) {
		$('.login-btn').fadeIn();
	}else{
		$('.login-btn').fadeOut();
	}
	e.preventDefault();
});

$('.login-btn').on('click', function(){
	$('.animated').fadeIn();
});
function slideInLoginForm()
{
	if(checkFormStatus($lbs))
	{
		$('.login-form.login-form-slide input[type=password]').transit({
			x:'0px'
		})
		$('.login-form.login-form-slide input[type=text]').transit({
			x:'0px'
		}, function(){
			$lbs.transit({
				top:0,
				y: '-250px'
			})
			.data('active', false);	
		});
	}
	else
	{
		$lbs.show(function(){
			$(this).transit({
				top:'auto',
				y: transHeight
			}, function(){
				$('.login-form.login-form-slide input[type=password]').transit({
					x:'190px'
				})
				$('.login-form.login-form-slide input[type=text]').transit({
					x:'-190px'
				})
			});		
		}).data('active', true);
	}
}
function checkFormStatus(form)
{
	return form.data('active');
}
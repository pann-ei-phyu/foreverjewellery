
$(document).ready(function () {
	$('#mandalay_address').hide();
	$('#naypyitaw_address').hide();

	$('#yangon').click(function () {
		    	$('#yangon_address').show();
				$('#mandalay_address').hide();
				$('#naypyitaw_address').hide();	
			})

		    $('#mandalay').click(function () {
		    	$('#mandalay_address').show();
				$('#yangon_address').hide();
				$('#naypyitaw_address').hide();	
			})
			$('#naypyitaw').click(function () {
		    	$('#naypyitaw_address').show();
				$('#yangon_address').hide();
				$('#mandalay_address').hide();	
			})

	$('.contact_map ul li a').click(function () {
		$('li a').removeClass("active");
		$(this).addClass("active");
	});

	
});
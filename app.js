$(document).ready( function() {
	$('.btn').on("click",function() {
		$(".btn").hide();
		$('.glass.hidden').show();
		console.log(request);
	});
});

var getImages = function(){
	
	$.ajax({
		
		url: "https://api.instagram.com/v1/tags/search?q=fitfam&client_id=07f9f44e86e044e2a5ac299b0cc85ac6"
		
		})
};


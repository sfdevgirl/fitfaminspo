$(document).ready( function() {
	$('.btn').on("click",function() {
		$(".btn").hide();
		$('.glass.hidden').show();
		console.log(request);
	});
});

var getImages = function(){
	
	$.ajax({
		// url: "https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=07f9f44e86e044e2a5ac299b0cc85ac6",
		url: "https://api.instagram.com/v1/tags/search?q=fitfam&access_token=07f9f44e86e044e2a5ac299b0cc85ac6"
		// dataType: "jsonp",
		// type: "GET",
		})
};


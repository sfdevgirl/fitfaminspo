$(document).ready( function() {
	getRequest();
	$('.btn').on("click",function() {
		$(".lead").hide();
		// $(".more").show();
		$('.glass.hidden').show();
		$(".form").show();
		$('h3.masthead-brand').css("position", "none")

	});

});
const API_URL = "https://api.instagram.com/v1/tags/shannongetshealthyfit/media/recent?client_id=07f9f44e86e044e2a5ac299b0cc85ac6"
//"https://api.instagram.com/v1/users/33885538/media/recent/?client_id=07f9f44e86e044e2a5ac299b0cc85ac6";


function getRequest(){
	
	var request = $.ajax({ 
		url: API_URL, 
		type: "GET",
		dataType: "JSONP" });
	request.success(function(data){
		showResults(data.data);

	});
};

function showResults(results){
  var html = "";
  
  $.each(results, function(index, value){
  	html += '<div class="card">';
    html += '<img src="' + value.images.standard_resolution.url + '"/>'; 
    html += '<figcaption>' + value.caption.text + '"</figcaption>'; 
    html += '</div>';
    
//     function getRequestTwo(){
	
// 	var request = $.ajax({ 
// 		url: pagination.next_url, 
// 		type: "GET",
// 		dataType: "JSONP" });
// 	request.success(function(data){
// 		showResults(data.data);

// 	});
// };
    
// $('.more').on("click", function(){
// 	getRequestTwo();
// });
    
  });
  $('.inner .glass .form').html(html);
  // $('.inner .glass .form .caption').html(cap);
}


	
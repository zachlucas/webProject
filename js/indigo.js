window.onload = function(){

var text_input = document.getElementById ('mainText');
console.log(text_input);
text_input.focus();
text_input.select();

    
}


$(document).ready(function(){
	var timer;
	$('#mainText').keyup(function () {
	    clearTimeout(timer);
	    timer = setTimeout(function (event) {

	        console.log('Search keypress');
	        var text = $('#mainText').val();
	        if (text.length > 0){
	        	$.ajax({
				    url: "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=8&q=purple+"+text+"&callback=?",
				    dataType: "jsonp",
				    success: function(data) {


				        for (var i = 0; i < data.responseData.results.length; i++) {
				        	console.log('hitting one');
				            //$('#image-container').append('<img src="' + data.responseData.results[i].tbUrl + '">' + '<br>');
				            //$('body').css('background','url('+data.responseData.results[i].tbUrl+')');
				            $('body').append('<img src="' + data.responseData.results[i].tbUrl + '">' );
				        }
				    }

				});
	    	}
	    }, 1000);
	});
});
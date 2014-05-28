
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
	        	window.open('https://www.google.com/search?q=red+'+text+'&es_sm=91&source=lnms&tbm=isch&sa=X&ei=u8taU5fyHc_nsAS5woKwCA&ved=0CAgQ_AUoAQ&biw=1474&bih=690','_blank');
	        	$('#mainText').val('');
	    	}
	        //$('#textTobeSearched').text(text);
	    }, 1000);
	});
});

window.onload = function(){
	Parse.initialize("223pnaz2xlGltDgtcLNQyP1BVnCp0IqqBu1lDCXr", "QnvWmIcLSCd3wfaHxPe1M8KvRkcY11QhsEjoTrSG");

	console.log("test");
	var text_input = document.getElementById ('messageInput');
	console.log(text_input);
	text_input.focus();
	text_input.select();

	$("h2")
    .css("background-color", "#FFCC00")
    .css("color", invertColor("#FFCC00"));

}

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}

$(document).ready(function(){
	$("#mainDiv")
    .css("background-color", "#FFCC00")
    .css("color", invertColor("#FFCC00"));
});

function sendMessage(){
	$('#results').empty();

	if ($('#messageInput').val().length > 5 && $('#messageInput').val().length < 140){
		var message = Parse.Object.extend("Message");
		var messageToSend = new message();

		var custom_acl = new Parse.ACL();
		
		custom_acl.setPublicReadAccess(true);
		custom_acl.setPublicWriteAccess(true);
		messageToSend.setACL(custom_acl);


		messageToSend.set("name", "Web User");
		messageToSend.set("seen", "no");
		messageToSend.set("message", $('#messageInput').val());
		 
		messageToSend.save(null, {
		  success: function(messageToSend) {
		    // Execute any logic that should take place after the object is saved.
		  },
		  error: function(messageToSend, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and description.
		    alert('Failed to create new object, with error code: ' + error.description);
		  }
		});




		var query = new Parse.Query(message);
		query.equalTo("seen", "no");

		query.ascending("createdAt");
		query.first({
		  success: function(object) {
		    // Successfully retrieved the object.
		    console.log(object.get("message"));

		    $('#results').css('display','block');
		    $('#results').append(object.get("message"));
		    $('#results').append('<br>Sent by: '+object.get("name") );

		    $('#messageInput').val('');
		    object.destroy({
			  success: function(myObject) {
			    // The object was deleted from the Parse Cloud.
			    $('#messageInput').attr('placeholder','Send another!');
			  },
			  error: function(myObject, error) {
			    // The delete failed.
			    // error is a Parse.Error with an error code and description.
			  }
			});

		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	}
	else{
		alert("Message needs to be between 5 and 140 characters");
	}
}
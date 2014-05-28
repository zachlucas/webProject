function orangeClicked(){
	window.open('todo.html','_self');
}

function greenClicked(){
	window.open('GiveAndGet.html','_self');
}

function yellowClicked(){
  window.open('https://www.google.com/search?q=yellow&source=lnms&tbm=isch&sa=X&ei=6sVaU5vHA6PKsQTlzYCwCA&ved=0CAgQ_AUoAQ&biw=1474&bih=690','_self');
}

function blueClicked(){
  window.open('http://www.psu.edu','_self');
}

function redClicked(){
  window.open('red.html','_self');
}

function indigoClicked(){
  window.open('indigo.html','_self');
}

function violetClicked(){
  window.open('violet.html','_self');
}

$(document).ready(function(){
    $( "#todoButton" ).animate({
      height: "150px"
  }, 1000, function() {
    // Animation complete.
});
    $( "#giveAndGetButton" ).animate({
      height: "150px"
  }, 1000, function() {
    // Animation complete.
  });
$( "#Y" ).animate({
      height: "150px"
  }, 1000, function() {
    // Animation complete.
  });
$( "#G" ).animate({
      height: "150px"
  }, 1000, function() {
    // Animation complete.
  });
$( "#B" ).animate({
      height: "150px"
  }, 1000, function() {
    // Animation complete.
  });
$( "#I" ).animate({
      height: "150px"
  }, 1000, function() {
    // Animation complete.
  });
$( "#V" ).animate({
      height: "150px"
  }, 1000, function() {
    // Animation complete.
  });


});
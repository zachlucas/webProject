
window.onload = function(){

var text_input = document.getElementById ('mainText');
console.log(text_input);
text_input.focus();
text_input.select();

findLines();
    
}
function findLines(){


var divHeight = document.getElementById('top').offsetHeight;
    var lineHeight = parseInt(document.getElementById('top').style.lineHeight);
    var lines = divHeight / lineHeight;
    console.log("Lines: " + lines);
    console.log("Lines: " + divHeight);
    console.log("Lines: " + lineHeight);
}
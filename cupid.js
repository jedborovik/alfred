
$(document).ready(function() {


	canv = document.getElementById('site-canvas');
	ctx = canv.getContext('2d');



	var file = "story.txt";
	storyArr = []; //your array

	$.get(file, function(data) {
	   storyArr = data.split("\n");
	});
	
	
	setTimeout(main, 1000);

});


function main() {

	interv = 0;

	drawTimer = setInterval(function() {

		drawLine((storyArr[interv]));
		interv++;
		if (interv > storyArr.length) {
			clearInterval(drawTimer);
		}
	}
	, 1000);

	
	
}

function drawLine(line) {
	ctx.font = 'bold 20px helvetica';

	var yCoord = 100

	var xCoord = 10;

	ctx.fillStyle = "#000";

	ctx.fillText(line, xCoord, yCoord);

}

/*
.panel {
color: #808080;
font-size: 1.385em;
font-weight: bolder;
*/

init();


function init() {

	var canv = document.getElementById("siteCanvas");
	ctx = canv.getContext('2d');


	var file = "story.txt";
	storyArr = []; //your array

	$.get(file, function(data) {
	   storyArr = data.split("\n");
	});
	
	
	setTimeout(main, 300);

}


function main() {

	for (var i = 0; i<storyArr.length; i++) {
		drawLine((storyArr[i]));
	}
	
	
}

function drawLine(line) {

	var yCoord = 300

	var xCoord = 50;

	ctx.fillStyle = "#000";

	ctx.fillText(line, xCoord, yCoord);

}

/*
.panel {
color: #808080;
font-size: 1.385em;
font-weight: bolder;
*/
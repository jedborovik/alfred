init();


function init() {

	var canv = document.getElementById("siteCanvas");

	var file = "story.txt";
	resultArr = [];

	function getHandler() {
		return function(data) {
			resultArr = data;
		};
	}
	$.ajax(file).done(getHandler());

	mainLoop();
}


function mainLoop() {
	alert(resultArr);
}

/*
.panel {
color: #808080;
font-size: 1.385em;
font-weight: bolder;
*/
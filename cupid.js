


init();

function init() {

	var canv = document.getElementById("siteCanvas");

	var file = "story.txt";
	var resultArr = [], numberOfFiles = 1000;

	function getHandler() {
		return function(data) {
			resultArr[] = data;
		}
	}
	$.ajax(file).done(getHandler());

}

/*
.panel {
color: #808080;
font-size: 1.385em;
font-weight: bolder;
*/
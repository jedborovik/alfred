<<<<<<< HEAD
=======



>>>>>>> 96cb0e0c06f58c81e75908c632dbd93b87ebd158
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
<<<<<<< HEAD

	mainLoop();
}

=======
>>>>>>> 96cb0e0c06f58c81e75908c632dbd93b87ebd158

function mainLoop() {
	alert(resultArr);
}

/*
.panel {
color: #808080;
font-size: 1.385em;
font-weight: bolder;
*/
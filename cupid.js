
init();


function init() {

	var canv = document.getElementById("siteCanvas");

	var file = "story.txt";
	storyArr = ''; //your array

	jQuery.get(file, function(data) {
	   alert(data);
	});

/*
	for (var i = 0; i<storyArr.length; i++) {
		console.log(storyArr[i]);
	}
*/
}



/*
.panel {
color: #808080;
font-size: 1.385em;
font-weight: bolder;
*/
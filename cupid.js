$(document).ready(function() {

	methods["begin"]();
	$(document).on('keypress', function(e) {
		methods["keypress"](e);
	});
});

var methods = {
	begin: function() {
		this.spacebar();
	},
	keypress: function(e) {
		e.preventDefault();
		if (e.which === 32) {
			this.spacebar();
		}
	},
	spacebar: function() {
		if (story["hasNext"]()) {
			$(".textField").html(story["next"]());
			$("#audioField").attr("src", story["audioURL"]());
		}
	}
}; 

var story = {
	storyArr: ["Hello there, my name is Alfred.", "I'm a talking website.", "That is all. Goodbye."],
	currPos: -1,
	hasNext: function() {
		return this.currPos < this.storyArr.length - 1;
	},
	next: function() {
		return this.storyArr[++this.currPos];	
	},
	audioURL: function() {
		return "http://tts-api.com/tts.mp3?q=" + this.storyArr[this.currPos];
	}
};



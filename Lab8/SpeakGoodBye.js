(function(global){
	var SpeakGoodBye = {};
	const speakWord = "Good Bye";
	SpeakGoodBye.speak = function (name) {
	 	console.log(speakWord + " " + name);
	};
	SpeakGoodBye.power = function (name) {
	 	console.log(name + " has enough power");
	};
	global.SpeakGoodBye = SpeakGoodBye;
})(window);
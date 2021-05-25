(function(global){
	var SpeakHello = {};
	const speakWord = "Hello";
	SpeakHello.speak = function(name) {		
 		console.log(speakWord + " " + name);
 	};
 	SpeakHello.power = function(name) {
	 	console.log(name + " hasn`t enough power");	 	
	};
	global.SpeakHello = SpeakHello;
})(window);
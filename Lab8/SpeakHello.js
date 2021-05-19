var SpeakHello = (function(){
	speakWord: "Hello",
	speak: function (name) {		
 		console.log(SpeakHello.speakWord + " " + name);
 	},
 	power: function power(name) {
	 	console.log(name + " hasn`t enough power");
	}
})();

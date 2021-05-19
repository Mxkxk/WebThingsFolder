var SpeakHello = (function(){
	const speakWord = "Hello"
	function speak(name) {		
 		console.log(speakWord + " " + name);
 	}
 	function power(name) {
	 	console.log(name + " hasn`t enough power");	 	
	}
	return {		
	 	speak : speak,
	 	power : power
	}
})();
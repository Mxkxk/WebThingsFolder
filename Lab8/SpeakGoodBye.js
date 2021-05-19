var SpeakGoodBye = (function(){
	const speakWord = "Good Bye"
	function speak(name) {
	 	console.log(speakWord + " " + name);
	}
	function power(name) {
	 	console.log(name + " has enough power");
	}
	return{
		speak : speak,
		power : power		
	}	
})();
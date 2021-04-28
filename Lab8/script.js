var script = {};
script.names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
(function(){
	for (var i = 0; i < script.names.length; i++) {
	  if (script.names[i].toLowerCase()[0] == "j") {
	    SpeakGoodBye.speak(script.names[i]);
	  } else {
	    SpeakHello.speak(script.names[i]);
	  }
	}
})();
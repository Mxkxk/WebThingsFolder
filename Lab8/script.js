(function(){
	var script = {};
	script.names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
	script.surnames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez"];
	script.charCodePower = function (name){
		var sum = 0;
		for(var i = 0; i < name.length; i++)sum += name.charCodeAt(i);
		return sum;
	};

	for (var i = 0; i < script.names.length; i++) {
	  if (script.names[i].toLowerCase()[0] == "j") {
	    window.SpeakGoodBye.speak(script.names[i]);
	  } else {
	    window.SpeakHello.speak(script.names[i]);
	  }
	}
	console.log("There used surname array for comparation sums of char codes with some value(600):");
	for (var i = 0; i < script.surnames.length; i++) {		
		if(script.charCodePower(script.surnames[i]) > 600)window.SpeakGoodBye.power(script.surnames[i]);
		else window.SpeakHello.power(script.surnames[i]);
	}
})();
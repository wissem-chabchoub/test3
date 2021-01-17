





(function () {

var nom = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < nom.length; i++) {
		var firstLetter = nom[i].charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			speak1(nom[i] + '<br>');
			
		} else {
		
			speak2(nom[i] + '<br>');
		}
	}
})();

  

const question = require('../models/questions');

exports.GetRandomQuestion = (req, res, next) => {
	
//für Allgemeine Bundesländer
question.find({stats:"Allgemein"}).then((ergebnis)=>{
	var newItems = [];
	const anzahlfragen=Math.min(ergebnis.length,30)
	for (var i = 0; i < anzahlfragen; i++) {
		var randomzahl = Math.floor(Math.random() * (ergebnis.length -1));
		
		console.log("randomzahl=",randomzahl)
		newItems.push(ergebnis[randomzahl]);
	  
		ergebnis.splice(randomzahl, 1);
		
		console.log("item=",ergebnis)

	
	  }
	  console.log("lenghth=",newItems.length)
	  
	  res.status(200).send(newItems);
})

	
		
}
exports.StatsRandomQuestion = (req, res, next) => {
	

	const { stats} = req.params;
console.log("land=",stats)
	question.find({ stats }).then((ergebnis)=>{
		var newStats = [];
		for (var i = 0; i < 3; i++) {
			var randomzahl = Math.floor(Math.random() * ergebnis.length);
			
			console.log("randomzahl=",randomzahl)
			newStats.push(ergebnis[randomzahl]);
		  
			ergebnis.splice(randomzahl, 1);
			
			console.log("item=",ergebnis)

		
		  }
		  console.log("newStatslenghth=",newStats.length)
		  
		  res.status(200).send(newStats);
	})
}
	
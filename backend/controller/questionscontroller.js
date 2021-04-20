
const question = require('../models/questions');
const { validationResult } = require('express-validator')

exports.getquestion = (req, res, next) => {
	
	question.find().then(
		(ergebnis) => {
			res.status(200).send(ergebnis);
		}
	).catch( (fehler) => {
		res.status(500).send("Fehler : "+fehler);
	});
}


exports.postquestion = (req, res, next) => {

	const questions = req.body;
	const errors = validationResult(req)
	
		if (!errors.isEmpty()) {
		
			return res.status(422).json({
				fehlerBeiValidierung: errors.array()
			})
		}
console.log("questions=",questions)
	question.create(questions).then(
		(ergebnis) => {
			res.status(201).send(ergebnis);
		}
	).catch( (fehler) => {
		res.status(500).send("Fehler bei create(): "+fehler);
	});
}

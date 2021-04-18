
const data = require('../models/data');

exports.getdata = (req, res, next) => {
	
	data.find().then(
		(ergebnis) => {
			res.status(200).send(ergebnis);
		}
	).catch( (fehler) => {
		res.status(500).send("Fehler get data: "+fehler);
	});
}


exports.postdata = (req, res, next) => {

	const dataname = req.body;

	data.create(dataname).then(
		(ergebnis) => {
			res.status(201).send(ergebnis);
		}
	).catch( (fehler) => {
		res.status(500).send("Fehler Data: "+fehler);
	});
}

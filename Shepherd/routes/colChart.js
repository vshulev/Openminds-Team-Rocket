var Model = require('../models/model').Model;

exports.display = function(req, res) {
	var model = new Model();
	model.getOverallHealth(function(err, result) {
		if(err) res.send(err);
		else res.send(result);
	});

	/*
	// render view
	res.render('colChart');
	*/
};

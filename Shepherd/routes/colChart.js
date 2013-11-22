var Model = require('../models/model').Model;

exports.display = function(req, res) {
	var model = new Model();
	model.getMachineSoftware('SRVW0000060058', function(err, result) {
		if(err) res.send(err);
		else {
			querydata = JSON.stringify(result);
			res.render('colChart', querydata);
		}
	});
};

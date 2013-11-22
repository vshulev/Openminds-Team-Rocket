var Model = require('../models/model').Model;

exports.display = function (req, res){
	machineID = req.params.id;
	res.render('machineInfoView', machineID);
};

exports.getMachines = function (req, res) {
	var model = new Model();
	model.getMachineInfo(req.params.id, function(err, result) {
		if(err) res.send(err);
		else res.send(result[0]);
	});
};

exports.getSoftware = function(req, res) {
	var model = new Model();
	model.getMachineSoftware(req.params.id, function(err, result) {
		if(err) res.send(err);
		else {
			// normalise data
			var out = {
				AppName: new Array(),
				version: new Array()	
			};		

			for(i=0; i<result.length; i++) {
				out.AppName.push(result[i].PackageID);
				out.version.push(1);			
			}

			res.send(out);
		}	
	});
};

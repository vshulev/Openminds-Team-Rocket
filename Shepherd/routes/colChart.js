exports.display = function(req, res) {
	console.log(res);
	// render view
	res.render('colChart');
};

exports.getData = function(req, res) {
	res.send({ hello: "world" });
}

var MongoClient = require('mongodb').MongoClient; 

exports.Model = function() {

	/*
	 * Connect tp DB
	 */
	var db = null;

	/*
	 * Connect to database
	 */
	this.connect = function(callback) {

		MongoClient.connect('mongodb://127.0.0.1:27017/shepdb', function(err, dbase){
			if(err) callback(err);
			else {
				db = dbase;
				callback(null);
			}
		});
	}

	/*
	 * Specify collection to query
	 */
	this.getCollection = function(cname, callback) {

		if(db == null) {
			this.connect(function() {
				db.collection(cname, function(err, collection) {
					if(err) callback(err);
					else callback(null, collection);
				});
			});
		}
		else {
			db.collection(cname, function(err, collection) {
				if(err) callback(err);
				else callback(null, collection);
			});
		}

	}

	/*
	 * Returns data about all machines health
	 */
	this.getOverallHealth = function(callback) {
		this.getCollection('software', function(err, collection) { 
			if(err) callback(err);
			else {
				collection.find({ Status: "Obsolete" }).toArray(function(err, results) {
					if(err) callback(error);
					else callback(null, results);
				});
			}
		});
	}

	/*
	 * Returns relevant information about a single machine
	 */
	this.getMachineInfo = function(id, callback) {
		this.getCollection('machines', function(err, collection) { 
			if(err) callback(err);
			else {
				collection.find({ ServerName: id }, { _id: 0 }).toArray(function(err, results) {
					if(err) callback(error);
					else callback(null, results);
				});
			}
		});
	}

	/*
	 * Returns all software installed on machine
	 */
	this.getMachineSoftware = function(id, callback) {
		this.getCollection('inventory', function(err, collection) {
			if(err) callback(err);
			else {
				collection.find({ ServerName: id }, { _id: 0, PackageID: 1 }).toArray(function(err, results) {
					if(err) callback(err);
					else callback(null, results);
				});
			}
		});
	}

	

}



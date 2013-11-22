var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var MongoClient = require('mongodb').MongoClient;    

function parser(filename, coll){
	
	var c = 0;
	var header;
	//var collection = [];
	var db;
	MongoClient.connect('mongodb://127.0.0.1:27017/shepdb', function(err, dbase){
		if(err) throw err;
		db = dbase;
		var instream = fs.createReadStream(filename);
		var rl = readline.createInterface({
		 	input: instream,
		  	output: new stream
		});
		rl.on('line', populate);
		rl.on('close', function(){
			db.close();
		});
	});

    function populate(line){
    	var doc = {};
	    if (c == 0){
	    	//console.log(line);
	    	header = line.split("|");
	    	c++;
	    } else {
	    	//console.log(line);
	    	var data = line.split("|");
	    	for(i = 0; i < header.length; i++){
	    		doc[header[i]] =  data[i];
	    	}
	    	//console.log(doc);
			var collection = db.collection(coll);
			collection.insert(doc, function(err, docs){
				if(err) console.log(err);
			});
		}
    }
}

new parser("Inventory20131006.txt", "inventory");
new parser("Machines20131006.txt", "machines");
new parser("Software20131006.txt", "software");
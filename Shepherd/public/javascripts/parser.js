var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var mongo = require('mongodb');
 
var Server = mongo.Server,
Db = mongo.Db,
BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('shepdb', server);

function parser(filename){
	var instream = fs.createReadStream(filename);
	var rl = readline.createInterface({
	  input: instream,
	  output: new stream
	});
	var c = 0;
	var header;

	rl.on('line', function(line) {
	    //Do your stuff ...
	    var document = {};
	    if (c == 0){
	    	console.log(line);
	    	header = line.split("|");
	    	c++;
	    } else {
	    	console.log(line);
	    	var data = line.split("|");
	    	for(i = 0; i < header.length; i++){
	    		document[header[i]] =  data[i];
	    		console.log(document);
	    	}
		}
	});
}

new parser("Inventory20131006.txt");
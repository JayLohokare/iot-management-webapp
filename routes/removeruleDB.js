var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	removed_rule = req.app.locals.removed_ruleT;
	from_project = req.app.locals.from_projectT;
	
	console.log("selected pros in db = "+removed_rule);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/rulesDB';
var url2 = 'mongodb://127.0.0.1:27017/thingsDB';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection(from_project);
		var q = 0;
		
		console.log('pehleee sectedd pro  '+from_project);
			console.log('--------------array hai kya= '+Array.isArray(removed_rule));
			
		var bool = 	Array.isArray(removed_rule);
//		var arr = selected_project.join();	
	//	console.log('---badme  sectedd pro  '+arr);
		if(bool){
				while(removed_rule[q]){
					collection.remove({"rule_name":removed_rule[q]});
					q++;
				}	
		}
		else{
				collection.remove({"rule_name":removed_rule});
		}	
				//db.close();	
		res.redirect('http://35.162.23.96:3000/rules?project_name='+from_project);						
		
      } 
     
    });
	
	
	
	
	/////////////end////
  
});
	
module.exports = router;

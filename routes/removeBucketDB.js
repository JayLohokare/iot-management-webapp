var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	selected_bucket = req.app.locals.selected_bucketT;
	project = req.app.locals.projectT;
	
	//console.log("selected pros in db = "+removed_rule);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/rulesDB';
var url2 = 'mongodb://127.0.0.1:27017/bucketName';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection(project);
		var q = 0;
		
		console.log('pehleee sectedd pro  '+project);
			console.log('--------------array hai kya= '+Array.isArray(selected_bucket));
			
		var bool = 	Array.isArray(selected_bucket);
//		var arr = selected_project.join();	
	//	console.log('---badme  sectedd pro  '+arr);
		if(bool){
				while(selected_bucket[q]){
					collection.remove({"bucket_name":selected_bucket[q]});
					q++;
				}	
		}
		else{
				collection.remove({"bucket_name":selected_bucket});
		}	
				//db.close();	
		//res.redirect('http://35.162.23.96:3000/rules?project_name='+from_project);						
		
      } 
     
    });
	
// Use connect method to connect to the Server
MongoClient.connect(url2, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url2);

    // Get the documents collection
    var collection = db.collection(project);
		var q = 0;
		
		console.log('pehleee sectedd pro  '+project);
			console.log('--------------array hai kya= '+Array.isArray(selected_bucket));
			
		var bool = 	Array.isArray(selected_bucket);
//		var arr = selected_project.join();	
	//	console.log('---badme  sectedd pro  '+arr);
		if(bool){
				while(selected_bucket[q]){
					collection.remove({"bucket_name":selected_bucket[q]});
					q++;
				}	
		}
		else{
				collection.remove({"bucket_name":selected_bucket});
		}	
				//db.close();	
		res.redirect('http://35.162.23.96:3000/bucket?project_name='+project);						
		
      } 
     
    });
		
	
	
	/////////////end////
  
});
	
module.exports = router;

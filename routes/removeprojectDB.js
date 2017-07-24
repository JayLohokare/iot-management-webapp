var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	selected_project = req.app.locals.selected_projectT;
	console.log("selected pros in db = "+selected_project);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/projects';
var url2 = 'mongodb://127.0.0.1:27017/thingsDB';
var bool;
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('projects');
		var q = 0;
		
		console.log('pehleee sectedd pro  '+selected_project);
			console.log('--------------array hai kya= '+Array.isArray(selected_project));
			
		bool = 	Array.isArray(selected_project);
//		var arr = selected_project.join();	
	//	console.log('---badme  sectedd pro  '+arr);
		if(bool){
				while(selected_project[q]){
					collection.remove({"project_name":selected_project[q]});
					q++;
				}	
		}
		else{
				collection.remove({"project_name":selected_project});
		}	
				//db.close();	
		res.redirect('http://35.162.23.96:3000/projects');						
		
      } 
     
    });
	
	
	 MongoClient.connect(url2, function (err2, db2) {
  if (err2) {
    console.log('Unable to connect to the mongoDB server. Error:', err2);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url2);
    console.log('the selelcted project for removal'+selected_project);
    //console.log('lets priinttt db  '+db2);
	var e =0;
	if(bool){
		while(selected_project[e]){	
			var collection = db2.collection(selected_project[e]);
			// Get the documents collection
			collection.drop();
			e++;
		}
	}
	else{
		var collection = db2.collection(selected_project);
			// Get the documents collection
			collection.drop()
	}	
		//db2.close();	
		
      } 
     
    });	
	
	
	/////////////end////
  
});
	
module.exports = router;

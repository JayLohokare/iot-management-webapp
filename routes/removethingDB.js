var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	selected_thing = req.app.locals.selected_projectE;
	project = req.app.locals.projectE;
	
	console.log("selected things in db = "+selected_thing);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/thingsDB';
var url3 = 'mongodb://127.0.0.1:27017/projects';
var url2 = 'mongodb://127.0.0.1:27017/state';

// Use connect method to connect to the Server
MongoClient.connect(url3, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url3);

	//console.log('proje  '+project);
    // Get the documents collection
    var collection = db.collection('projects');

	
	
		 collection.find({"project_name":project}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  var q=0;
		   	var count = result[0].count	; 
		console.log('count of things before adding in remove thing '+count);
			
		  var bool = 	Array.isArray(selected_thing);
		if(bool){
			while(selected_thing[q]){
				count--;
			
				q++;
			}	
		}
		else{
				count--;
		
		}
		 	
			console.log('count of things after adding in remove thing'+count);
			
			collection.update({"project_name":project},{$set:{"count":count}});
		
		
      } else {
        console.log('No project found with this name!');
			
	  }
     
    });
	
		
      } 
     
    }); 
	
	// Use connect method to connect to the Server
MongoClient.connect(url2, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url2);

	//console.log('proje  '+project);
    // Get the documents collection
	var q=0;
    var collection = db.collection(project);
	var bool = 	Array.isArray(selected_thing);
		if(bool){
			while(selected_thing[q]){

				collection.remove({"_id":selected_thing[q]});
				q++;
			}	
		}
		else{
				collection.remove({"_id":selected_thing});
		
		}
	
	
		
      } 
     
    }); 
	
	 
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
		
		var bool = 	Array.isArray(selected_thing);
		if(bool){
			while(selected_thing[q]){
				collection.remove({"_id":selected_thing[q]});
				q++;
			}	
		}
		else{
				collection.remove({"_id":selected_thing});
		
		}	
			db.close();	
		res.redirect('http://35.162.23.96:3000/things?project_name='+project);						
		
      } 
     
    });
	
	
	 
	
	
	/////////////end////
  
});
	
module.exports = router;

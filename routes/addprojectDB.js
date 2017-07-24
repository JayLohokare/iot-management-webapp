var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	project_name = req.app.locals.project_nameT;
	console.log("User name in db = "+project_name);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/projects';
var url2 = 'mongodb://127.0.0.1:27017/thingsDB';
var url3 = 'mongodb://127.0.0.1:27017/rulesDB';

// Use connect method to connect to the Server

MongoClient.connect(url2, function (err2, db2) {
  if (err2) {
    console.log('Unable to connect to the mongoDB server. Error:', err2);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url2);

    // Get the documents collection
	db2.createCollection(project_name, function(err, collection){
	   if (err) throw err;

	   	console.log("Created collection");
	 	
	});
							//db2.close();	
		
      } 
     
    });	
	
	MongoClient.connect(url3, function (err3, db3) {
  if (err3) {
    console.log('Unable to connect to the mongoDB server. Error:', err3);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url3);

    // Get the documents collection
	db3.createCollection(project_name, function(err, collection){
	   if (err) throw err;

	   	console.log("Created collection");
	 	
	});
							//db2.close();	
		
      } 
     
    });	
	
	
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('projects');

    // Insert some users
		collection.insert({"project_name":project_name,"count":0,"online":0});
							//db.close();	
						
		
      } 
     
    });

	
	 res.redirect('http://35.162.23.96:3000/projects');						
		
	
	
	/////////////end////
  
});
	
module.exports = router;

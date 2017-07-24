var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	type_name = req.app.locals.type_nameT;
	project = req.app.locals.projectT;
	
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/typesDB';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection(project);

    // Insert some users
		collection.insert({"type_name":type_name});
							db.close();	
		res.redirect('http://35.162.23.96:3000/things?project_name='+project);							
		
      } 
     
    });
	
	
	 
	
	
	/////////////end////
  
});
	
module.exports = router;

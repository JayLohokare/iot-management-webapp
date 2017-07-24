var express = require('express');
var router = express.Router();

var projects=0;
var things=0;
var online=0;
var rules=0;

var dd = 44;
/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/projects';
var url2 = 'mongodb://127.0.0.1:27017/rulesDB';


// Use connect method to connect to the Server
MongoClient.connect(url2, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection

	
  console.log('rulees count '+rules);  
	/////////////end////
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
    var collection = db.collection('projects');


	 // Insert some users
    collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  var i =0;
		 
		  while(result[i]){
			things = things + result[i].count;
			online = online + result[i].online;
			i++;
		  }
		  projects = i;
		 // console.log("arrrayyy = "+project_names);
		   res.render('dashboard',{projects_count:projects,things_count:things,online_count:online,rules_count:rules });
			
							db.close();			  
		
      } else {
        console.log('No document(s) found with defined "find" criteria!');
			res.render('dashboard',{projects_count:projects,things_count:things,online_count:online,rules_count:rules });
						
	  }
     
    });
	
	/////////////end////
  }
});

	
	
});

module.exports = router;

var express = require('express');
var router = express.Router();

var project_names = [];
var device_count = [];
var online = [];
var dd = 44;
/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/projects';



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
		  project_names = [];
		  device_count = [];
		  online = [];
		  while(result[i]){
			project_names[i] = result[i].project_name;
			device_count[i] = result[i].count;
			online[i] = result[i].online;
			i++;
		  }
		  console.log("arrrayyy = "+project_names);
		  console.log("arrrayyy of online= "+online);
		  
		  
		   res.render('projects',{project_names_array:project_names,device_count_array:device_count,online_array:online });
			
							db.close();			  
		
      } else {
        console.log('No document(s) found with defined "find" criteria!');
		res.render('projects',{project_names_array:project_names, device_count_array:device_count,online_array:online });
			
	  }
     
    });
	
	
	 
	
	
	/////////////end////
  }
});
	
	
});

module.exports = router;

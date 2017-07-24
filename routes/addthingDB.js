var express = require('express');
var router = express.Router();
var sha256 = require('js-sha256');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	project = req.app.locals.project_nameT;
	type = req.app.locals.typeT;
	thing_name = req.app.locals.thing_nameT;
	passw = req.app.locals.passwT;
	isadmin = req.app.locals.isadminT;
	
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/thingsDB';
var url2 = 'mongodb://127.0.0.1:27017/mqtt';
var url3 = 'mongodb://127.0.0.1:27017/projects';
var pubsub_array;

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

		var count = collection.find({"project_name":project}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  	var count = result[0].count	; 
			console.log('count of things before adding '+count);
			count++;
			console.log('count of things after adding '+count);
			
			collection.update({"project_name":project},{$set:{"count":count}});
		
		
      } else {
        console.log('No project found with this name!');
			
	  }
     
    });
	
		
      } 
     
    });
	
	
MongoClient.connect(url2, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

	console.log('project---name iss in addthingDBJS '+project);
    
	console.log('admin type in addthingDBJS '+isadmin);
	// Get the documents collection
    var collection = db.collection('mqtt_user');
		var encryPass = sha256(passw);
		console.log('encrypted password is----------'+encryPass);
		var username = project+'/'+type+'/'+thing_name;
    // Insert some users
	if(isadmin=='admin'){
		collection.insert({"username":username,"password":encryPass,"is_superuser":true});
	}
	else if(isadmin=='notadmin'){
		collection.insert({"username":username,"password":encryPass,"is_superuser":false});
	}	
	
	var collection2 = db.collection('mqtt_acl');
	if(isadmin=='admin'){
		pubsub_array = ["#"];
	}
	else if(isadmin=='notadmin'){
		var st1 = '$iot/'+username+'/*';
		var st2 = '$state/'+username+'/update';
		var st3 = '$state/'+username+'/response';
		var st4 = '$state/'+username+'/request';
		var st5 = '$alert/'+username;
		pubsub_array = [st1,st2,st3,st4,st5];
	}	
		collection2.insert({"username":username,"pubsub":pubsub_array});
	
		
      } 
     
    });
	

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

	console.log('project---name iss  '+project);
    // Get the documents collection
    var collection = db.collection(project);

		var id = type+'/'+thing_name;
    // Insert some users
		collection.insert({"_id":id,"type":type,"connected":0});
							db.close();	
		res.redirect('http://35.162.23.96:3000/things?project_name='+project);							
		
      } 
     
    });
	
	
	 
	
	
	/////////////end////
  
});
	
module.exports = router;

var express = require('express');
var router = express.Router();

  var thing_names = [];
		  var types =[];
	var types_names =[];		  
	var conn =[];	
var boolq = 1;	
var bucket_names = [];
var bucket_thing =[];
		
/* GET home page. */
router.get('/', function(req, res, next) {
	
	project_name = req.app.locals.project_nameQ;
	console.log("User name in db of things page ------= "+project_name);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/thingsDB';
var url2 = 'mongodb://127.0.0.1:27017/typesDB';
var url3 = 'mongodb://127.0.0.1:27017/bucketName';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
   var collection = db.collection(project_name);

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  var i =0;
		   thing_names = [];
			types = [];
			conn = [];
		  while(result[i]){
			thing_names[i] = result[i]._id;
			types[i] = result[i].type;
			conn[i] = result[i].connected;
			i++;
		  }
		result =[];		
		  console.log("arrrayyy ---------------= "+thing_names);
			
		   //res.render('thingspage',{thing_name_array:thing_names, types_array:types, project_name_selected:project_name });





		//db.close();	
		
      } 
	else{
		thing_names = [];
		types =[];
		conn =[];
		console.log("nothing in the project");
	}     
    });
	
}

});


MongoClient.connect(url3, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url3);

    // Get the documents collection
   var collection = db.collection(project_name);

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  var i =0;
		   bucket_names = [];
			bucket_thing =[];
		  while(result[i]){
			bucket_names[i] = result[i].bucket_name;
			bucket_thing[i] = result[i].kafka_topic;
			i++;
		  }
		result =[];		
		  console.log("arrrayyy of bucket ---------------= "+bucket_names);
			
		   res.render('bucketpage',{bucket_thing_array:bucket_thing, bucket_array: bucket_names, conn_array:conn, types_names_array:types_names, thing_name_array:thing_names, types_array:types, project_name_selected:project_name });





		//db.close();	
		
      } 
	else{
		bucket_names = [];

		console.log("nothing in the bucketss");
		res.render('bucketpage',{bucket_thing_array: bucket_thing, bucket_array: bucket_names, conn_array:conn, types_names_array:types_names, thing_name_array:thing_names, types_array:types, project_name_selected:project_name });

	}     
    });
	
}

});



});
	
module.exports = router;

var express = require('express');
var router = express.Router();

  var bucket_name = [];
	var kafka_topic = [];
	var values = [];
	var boolq = 1;	
		
/* GET home page. */
router.get('/', function(req, res, next) {
	
	project_name = req.app.locals.project_nameP;
	topic_selected = req.app.locals.topic_selectedP;
	parameter = req.app.locals.parameterP;
	
	console.log("User name in db of things page ------= "+project_name);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/bucketName';
var url2 = 'mongodb://127.0.0.1:27017/bucketDB';


// Use connect method to connect to the Server
MongoClient.connect(url2, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url2);

    // Get the documents collection
	var s = topic_selected;
		while(s.charAt(0) === '$')
		{
		 s = s.substr(1);
		}
   var collection = db.collection(s);

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  var i =0;
		   values = [];
			
			
		  
		  while(result[i]){
			values[i] = result[i].tstamp;
			i++;
		  }
		result =[];		
		  console.log("--------------- values from plot graph= "+values);
			
		  
		//db.close();	
		
      } 
	else{
		values = [];
	
		console.log("nothing in the project");
		
	}     
    });
	
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
   var collection = db.collection(project_name);

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  var i =0;
		   bucket_name = [];
			kafka_topic= [];
			
		  while(result[i]){
			bucket_name[i] = result[i].bucket_name;
			kafka_topic[i] = result[i].kafka_topic;
			i++;
		  }
		result =[];		
		  //console.log("arrrayyy ---------------= "+thing_names);
			
		   res.render('plotgraphpage',{parameter_name:parameter, values_array:values, bucket_name_array:bucket_name, kafka_topic_array:kafka_topic, project_name_selected:project_name });





		//db.close();	
		
      } 
	else{
		kafka_topic = [];
		bucket_name =[];
		console.log("nothing in the project");
		res.render('plotgraphpage',{parameter_name:parameter, values_array:values, bucket_name_array:bucket_name, kafka_topic_array:kafka_topic, project_name_selected:project_name });

	}     
    });
	
}

});





});
	
module.exports = router;

var express = require('express');
var router = express.Router();

  var bucket_name = [];
	var kafka_topic = [];
	var boolq = 1;	
		
/* GET home page. */
router.get('/', function(req, res, next) {
	
	project_name = req.app.locals.project_nameQ;
	console.log("User name in db of things page ------= "+project_name);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/bucketName';



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
			
		   res.render('visualizepage',{bucket_name_array:bucket_name, kafka_topic_array:kafka_topic, project_name_selected:project_name });





		//db.close();	
		
      } 
	else{
		bucket_name = [];
		kafka_topic =[];
		console.log("nothing in the project");
		res.render('visualizepage',{bucket_name_array:bucket_name, kafka_topic_array:kafka_topic, project_name_selected:project_name });

	}     
    });
	
}

});





});
	
module.exports = router;

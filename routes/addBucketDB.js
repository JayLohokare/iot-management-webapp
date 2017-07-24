var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	bucket_name = req.app.locals.bucket_nameR ;

	condition = req.app.locals.conditionR ;
	topictype = req.app.locals.topictypeR;
	project = req.app.locals.projectR ;
	thing = req.app.locals.thingR ;
	last_part = req.app.locals.last_partR ;
	last_part2 = req.app.locals.last_part2R;

	
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/rulesDB';
var url2 = 'mongodb://127.0.0.1:27017/bucketDB';
var url3 = 'mongodb://127.0.0.1:27017/bucketName';

var kafka_topic;
var colle;
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
	var query = 'SELECT * FROM message';
	var mongoserver = 'mongodb://localhost'	;
	var mongodb = 'bucketDB';
	var mongocollection = project;

	if(topictype == 'iot'){
				if(last_part){
					kafka_topic = '$' + topictype +'/'+ project +'/'+ thing +'/'+last_part;
					
					colle = topictype +'/'+ project +'/'+ thing +'/'+last_part;
				}
				else{
					kafka_topic = '$' + topictype +'/'+ project +'/'+ thing;
					colle = topictype +'/'+ project +'/'+ thing;
				}	
			}
			else if(topictype == 'state'){
				kafka_topic = '$' + topictype +'/'+ project +'/'+ thing +'/'+last_part2;
				colle = topictype +'/'+ project +'/'+ thing +'/'+last_part2;
				
			}
			else if(topictype == 'alert'){
				kafka_topic = '$' + topictype +'/'+ project +'/'+ thing +'/';
				colle =  topictype +'/'+ project +'/'+ thing;
			
			}
			
		collection.insert({"bucket_name":bucket_name,"kafka_topic":kafka_topic,"action":'mongodb',"query":query,"mongoServer":mongoserver,"mongoDB":mongodb,"mongoCollection":colle});
			
		
		
		
	//		db.close();	
		//res.redirect('http://127.0.0.1:3000/databucket?project_name='+project);							
		
      } 
     
    });


MongoClient.connect(url3, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url3);

	console.log('project---name iss  '+project);
    // Get the documents collection
		var collection = db.collection(project);
	
			
		collection.insert({"bucket_name":bucket_name,"kafka_topic":kafka_topic});
			
		
		
		
	//		db.close();	
	//	res.redirect('http://35.162.23.96:3000/bucket?project_name='+project);							
		
      } 
     
    });
		

	
MongoClient.connect(url2, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url2);

	console.log('project---name iss  '+project);
    // Get the documents collection
		var collection = db.collection(colle);
	
			
		collection.insert({"bucket_name":bucket_name,"kafka_topic":kafka_topic});
			
		
		
		
	//		db.close();	
		res.redirect('http://35.162.23.96:3000/bucket?project_name='+project);							
		
      } 
     
    });
		
	
	 
	
	
	/////////////end////
  
});
	
module.exports = router;

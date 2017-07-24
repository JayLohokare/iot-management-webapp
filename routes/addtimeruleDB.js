var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	rule_name = req.app.locals.rule_nameR ;
	topictype = req.app.locals.topictypeR;
	project = req.app.locals.projectR ;
	thing = req.app.locals.thingR ;
	last_part = req.app.locals.last_partR ;
	last_part2 = req.app.locals.last_part2R;

	message = req.app.locals.messageR;
	hour = req.app.locals.hourR;
	

   console.log("-----message in  addtimerule js at start  = "+message);
	
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/rulesTimeDB';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

	console.log('project---name iss  '+project);
    // Get the documents collection
    var collection = db.collection(hour);

		//var query = 'SELECT * FROM message WHERE '+condition;
		var kafka_topic2;
		
			if(topictype == 'iot'){
				if(last_part){
					var kafka_topic = '$' + topictype +'/'+ project +'/'+ thing +'/'+last_part;
				}
				else{
					var kafka_topic = '$' + topictype +'/'+ project +'/'+ thing;
				}	
			}
			else if(topictype == 'state'){
				var kafka_topic = '$' + topictype +'/'+ project +'/'+ thing +'/'+last_part2;
				
			}
			else if(topictype == 'alert'){
				var kafka_topic = '$' + topictype +'/'+ project +'/'+ thing +'/';
			
			}	
			
			message = JSON.parse(message);

		 console.log("-----message in  addtimerule js at end  = "+message);
	
			collection.insert({"rule_name":rule_name,"republish_topic":kafka_topic,"action":"mqtt","message":message});
							
	
		
		
		
		
	//		db.close();	
		res.redirect('http://35.162.23.96:3000/timeruleslink?project_name='+project);							
		
      } 
     
    });
	
	
	 
	
	
	/////////////end////
  
});
	
module.exports = router;

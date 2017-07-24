var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	rule_name = req.app.locals.rule_nameR ;
	parameter = req.app.locals.parameterR ;
	condition = req.app.locals.conditionR ;
	topictype = req.app.locals.topictypeR;
	project = req.app.locals.projectR ;
	thing = req.app.locals.thingR ;
	last_part = req.app.locals.last_partR ;
	last_part2 = req.app.locals.last_part2R;
	dbtype = req.app.locals.dbtypeR ;
	mongoserver = req.app.locals.mongoserverR;
	mongodb = req.app.locals.mongodbR ;
	mongocollection = req.app.locals.mongocollectionR ;
	topic = req.app.locals.topicR ;
	
	mqtttype = req.app.locals.mqtttypeR ;
	broker_ip = req.app.locals.broker_ipR;
	topictype2 = req.app.locals.topictype2R;
	project2 = req.app.locals.project2R ;
	thing2 = req.app.locals.thing2R ;
	last_partB = req.app.locals.last_partBR ;
	last_part2B = req.app.locals.last_part2BR ;
	other_ip = req.app.locals.other_ipR ;
	other_topic = req.app.locals.other_topicR;
	
	to = req.app.locals.toR;
	message = req.app.locals.messageR;
	subject = req.app.locals.subjectR;
	

	
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/rulesDB';

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

		var query = 'SELECT '+parameter+' FROM message WHERE '+condition;
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
			
			
		if(dbtype == 'mongodb'){
		
			console.log('here is the first type of insert rule');
			// Insert rule
			collection.insert({"rule_name":rule_name,"kafka_topic":kafka_topic,"action":dbtype,"query":query,"mongoServer":mongoserver,"mongoDB":mongodb,"mongoCollection":mongocollection});
							
		}	
		
		else if(dbtype == 'mqtt'){
			
				if(mqtttype == 'our_platform'){
					console.log('topic type 2 is - '+topictype2);
						
					if(topictype2 == 'iot2'){
						if(last_partB){
							var kafka_topic2 = '$iot/'+ project2 +'/'+ thing2 +'/'+last_partB;
						}
						else{
							var kafka_topic2 = '$iot/'+ project2 +'/'+ thing2;
						}
					}
					else if(topictype2 == 'state2'){
						 kafka_topic2 = '$state/'+ project2 +'/'+ thing2 +'/'+last_part2B;
						
					}
					else if(topictype2 == 'alert2'){
						 kafka_topic2 = '$alert/'+ project2 +'/'+ thing2 +'/';
					
					}
						console.log('here is the second type of insert rule. kafka_topic2 - '+ kafka_topic2);
			
					collection.insert({"rule_name":rule_name,"kafka_topic":kafka_topic,"action":dbtype,"query":query,"broker_ip":broker_ip,"republish_topic":kafka_topic2});
				
				}
				else if(mqtttype == 'other_platform'){
					collection.insert({"rule_name":rule_name,"kafka_topic":kafka_topic,"action":dbtype,"query":query,"broker_ip":other_ip,"republish_topic":other_topic});
				

				}	
				
		}	
		else if(dbtype == 'email'){
			
			collection.insert({"rule_name":rule_name,"kafka_topic":kafka_topic,"action":dbtype,"query":query,"to":to,"message":message,"subject":subject});
			
		}
		
		
	//		db.close();	
		res.redirect('http://35.162.23.96:3000/rules?project_name='+project);							
		
      } 
     
    });
	
	
	 
	
	
	/////////////end////
  
});
	
module.exports = router;

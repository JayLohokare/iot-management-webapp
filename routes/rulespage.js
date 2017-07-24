var express = require('express');
var router = express.Router();

  var thing_names = [];
	var types =[];
	var types_names =[];		  
	var conn =[];	
	var rule_names = [];
	var	kafka_topic =[];
	var action =[];
	var	query = [];
	var	broker_ip = [];
	var	republish_topic = [];	
	var to = [];
	var message = [];
	var subject = [];
	
/* GET home page. */
router.get('/', function(req, res, next) {
	
	project_name = req.app.locals.project_nameP;
	console.log("User name in db in rulespageJS = "+project_name);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/thingsDB';
var url2 = 'mongodb://127.0.0.1:27017/rulesDB';



MongoClient.connect(url2, function (err, db) {
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
		  var p=0;
		   rule_names = [];
			kafka_topic =[];
			action =[];
			query = [];
			broker_ip = [];
			republish_topic = [];
			to = [];
			message = [];
			subject = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names[p] = result[i].rule_name;
				kafka_topic[p] = result[i].kafka_topic;
				action[p] = result[i].action;
				query[p] = result[i].query;
				broker_ip[p] = result[i].broker_ip;
				republish_topic[p] = result[i].republish_topic;
				to[p] = result[i].to;
				message[p] = result[i].message;
				subject[p] = result[i].subject;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy = "+rule_names);
		  	
		
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
		   thing_names = [];
			types =[];
			conn =[];
		  while(result[i]){
			thing_names[i] = result[i]._id;
			types[i] = result[i].type;
			conn[i] = result[i].connected;
			i++;
		  }
		  console.log("arrrayyy = "+thing_names);
		   res.render('rulespage',{thing_array:thing_names,project_name_selected:project_name,rule_names_array:rule_names,kafka_topic_array:kafka_topic,action_array:action,query_array:query,broker_ip_array:broker_ip,republish_topic_array:republish_topic, to_array:to, message_array:message, subject_array:subject });



		db.close();	
		
      } 
	  else {
			res.render('rulespage',{thing_array:thing_names,project_name_selected:project_name,rule_names_array:rule_names,kafka_topic_array:kafka_topic,action_array:action,query_array:query,broker_ip_array:broker_ip,republish_topic_array:republish_topic, to_array:to, message_array:message, subject_array:subject });

	  } 
     
    });
	
}

});


});
	
module.exports = router;

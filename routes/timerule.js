var express = require('express');
var router = express.Router();

 
	
/* GET home page. */
router.get('/', function(req, res, next) {
	
	project_name = req.app.locals.project_nameQ;
	console.log("User name in db in rulespageJS = "+project_name);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/thingsDB';
var url2 = 'mongodb://127.0.0.1:27017/rulesTimeDB';
 var thing_names = [];
	var types =[];
	var types_names =[];		  
	var conn =[];	
	var	query = [];
	var	kafka_topic =[];
	var	broker_ip = [];
	var to = [];
	
	var action0 =[];
	var rule_names0 = [];
	var	republish_topic0 = [];	
	var message0 = [];
	var action1 =[];
	var rule_names1 = [];
	var	republish_topic1 = [];	
	var message1 = [];
	var action2 =[];
	var rule_names2 = [];
	var	republish_topic2 = [];	
	var message2 = [];
	var action3 =[];
	var rule_names3 = [];
	var	republish_topic3 = [];	
	var message3 = [];
	var action4 =[];
	var rule_names4 = [];
	var	republish_topic4 = [];	
	var message4 = [];
	var action5 =[];
	var rule_names5 = [];
	var	republish_topic5 = [];	
	var message5 = [];
	var action6 =[];
	var rule_names6 = [];
	var	republish_topic6 = [];	
	var message6 = [];
	var action7 =[];
	var rule_names7 = [];
	var	republish_topic7 = [];	
	var message7 = [];
	var action8 =[];
	var rule_names8 = [];
	var	republish_topic8 = [];	
	var message8 = [];
	var action9 =[];
	var rule_names9 = [];
	var	republish_topic9 = [];	
	var message9 = [];
	var action10 =[];
	var rule_names10 = [];
	var	republish_topic10 = [];	
	var message10 = [];
	var action11 =[];
	var rule_names11 = [];
	var	republish_topic11 = [];	
	var message11 = [];
	var action12 =[];
	var rule_names12 = [];
	var	republish_topic12 = [];	
	var message12 = [];
	var action13 =[];
	var rule_names13 = [];
	var	republish_topic13 = [];	
	var message13 = [];
	var action14 =[];
	var rule_names14 = [];
	var	republish_topic14 = [];	
	var message14 = [];
	var action15 =[];
	var rule_names15 = [];
	var	republish_topic15 = [];	
	var message15 = [];
	var action16 =[];
	var rule_names16 = [];
	var	republish_topic16 = [];	
	var message16 = [];
	var action17 =[];
	var rule_names17 = [];
	var	republish_topic17 = [];	
	var message17 = [];
	var action18 =[];
	var rule_names18 = [];
	var	republish_topic18 = [];	
	var message18 = [];
	var action19 =[];
	var rule_names19 = [];
	var	republish_topic19 = [];	
	var message19 = [];
	var action20 =[];
	var rule_names20 = [];
	var	republish_topic20 = [];	
	var message20 = [];
	var action21 =[];
	var rule_names21 = [];
	var	republish_topic21 = [];	
	var message21 = [];
	var action22 =[];
	var rule_names22 = [];
	var	republish_topic22 = [];	
	var message22 = [];
	var action23 =[];
	var rule_names23 = [];
	var	republish_topic23 = [];	
	var message23 = [];
	
	var subject = [];
	var i=0;
	var p=0;
	

	
	
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
		  
		 //  res.render('timerule',{message_array0:message0, message_array1:message1, message_array2:message2, message_array3:message3, message_array4:message4, message_array5:message5, message_array6:message6, message_array7:message7, message_array8:message8, message_array9:message9, message_array10:message10, message_array11:message11, message_array12:message12, message_array13:message13, message_array14:message14, message_array15:message15, message_array16:message16, message_array17:message17, message_array18:message18, message_array19:message19, message_array20:message20, message_array21:message21, message_array22:message22, message_array23:message23, republish_topic_array0:republish_topic0, republish_topic_array1:republish_topic1, republish_topic_array2:republish_topic2, republish_topic_array3:republish_topic3, republish_topic_array4:republish_topic4, republish_topic_array5:republish_topic5, republish_topic_array6:republish_topic6, republish_topic_array7:republish_topic7, republish_topic_array8:republish_topic8, republish_topic_array9:republish_topic9, republish_topic_array10:republish_topic10, republish_topic_array11:republish_topic11, republish_topic_array12:republish_topic12, republish_topic_array13:republish_topic13, republish_topic_array14:republish_topic14, republish_topic_array15:republish_topic15, republish_topic_array16:republish_topic16, republish_topic_array17:republish_topic17, republish_topic_array18:republish_topic18, republish_topic_array19:republish_topic19, republish_topic_array20:republish_topic20, republish_topic_array21:republish_topic21, republish_topic_array22:republish_topic22, republish_topic_array23:republish_topic23,  rule_names_array0:rule_names0, rule_names_array1:rule_names1, rule_names_array2:rule_names2, rule_names_array3:rule_names3, rule_names_array4:rule_names4, rule_names_array5:rule_names5, rule_names_array6:rule_names6, rule_names_array7:rule_names7, rule_names_array8:rule_names8, rule_names_array9:rule_names9, rule_names_array10:rule_names10, rule_names_array11:rule_names11, rule_names_array12:rule_names12, rule_names_array13:rule_names13, rule_names_array14:rule_names14, rule_names_array15:rule_names15, rule_names_array16:rule_names16, rule_names_array17:rule_names17, rule_names_array18:rule_names18, rule_names_array19:rule_names19, rule_names_array20:rule_names20, rule_names_array21:rule_names21, rule_names_array22:rule_names22, rule_names_array23:rule_names23,  thing_array:thing_names,project_name_selected:project_name});



		db.close();	
		
      } 
	  else {
		   //res.render('timerule',{message_array0:message0, message_array1:message1, message_array2:message2, message_array3:message3, message_array4:message4, message_array5:message5, message_array6:message6, message_array7:message7, message_array8:message8, message_array9:message9, message_array10:message10, message_array11:message11, message_array12:message12, message_array13:message13, message_array14:message14, message_array15:message15, message_array16:message16, message_array17:message17, message_array18:message18, message_array19:message19, message_array20:message20, message_array21:message21, message_array22:message22, message_array23:message23, republish_topic_array0:republish_topic0, republish_topic_array1:republish_topic1, republish_topic_array2:republish_topic2, republish_topic_array3:republish_topic3, republish_topic_array4:republish_topic4, republish_topic_array5:republish_topic5, republish_topic_array6:republish_topic6, republish_topic_array7:republish_topic7, republish_topic_array8:republish_topic8, republish_topic_array9:republish_topic9, republish_topic_array10:republish_topic10, republish_topic_array11:republish_topic11, republish_topic_array12:republish_topic12, republish_topic_array13:republish_topic13, republish_topic_array14:republish_topic14, republish_topic_array15:republish_topic15, republish_topic_array16:republish_topic16, republish_topic_array17:republish_topic17, republish_topic_array18:republish_topic18, republish_topic_array19:republish_topic19, republish_topic_array20:republish_topic20, republish_topic_array21:republish_topic21, republish_topic_array22:republish_topic22, republish_topic_array23:republish_topic23,  rule_names_array0:rule_names0, rule_names_array1:rule_names1, rule_names_array2:rule_names2, rule_names_array3:rule_names3, rule_names_array4:rule_names4, rule_names_array5:rule_names5, rule_names_array6:rule_names6, rule_names_array7:rule_names7, rule_names_array8:rule_names8, rule_names_array9:rule_names9, rule_names_array10:rule_names10, rule_names_array11:rule_names11, rule_names_array12:rule_names12, rule_names_array13:rule_names13, rule_names_array14:rule_names14, rule_names_array15:rule_names15, rule_names_array16:rule_names16, rule_names_array17:rule_names17, rule_names_array18:rule_names18, rule_names_array19:rule_names19, rule_names_array20:rule_names20, rule_names_array21:rule_names21, rule_names_array22:rule_names22, rule_names_array23:rule_names23,  thing_array:thing_names,project_name_selected:project_name});

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

    // Get the documents collection
   var collection = db.collection('zero');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		   i =0;
		   p=0;
		   rule_names0 = [];
			action0 =[];
			republish_topic0 = [];
			message0 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names0[p] = result[i].rule_name;
				action0[p] = result[i].action;
				republish_topic0[p] = result[i].republish_topic;
				message0[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy0 = "+rule_names0);
      } 
    });
	 var collection = db.collection('one');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  var i =0;
		  var p=0;
		   rule_names1 = [];
			action1 =[];
			republish_topic1 = [];
			message1 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names1[p] = result[i].rule_name;
				action1[p] = result[i].action;
				republish_topic1[p] = result[i].republish_topic;
				message1[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy1 = "+rule_names1);
      } 
    });
	 var collection = db.collection('two');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		   i =0;
		   p=0;
		   rule_names2 = [];
			action2 =[];
			republish_topic2 = [];
			message2 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names2[p] = result[i].rule_name;
				action2[p] = result[i].action;
				republish_topic2[p] = result[i].republish_topic;
				message2[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy2 = "+rule_names2);
      } 
    });
	 var collection = db.collection('three');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names3 = [];
			action3 =[];
			republish_topic3 = [];
			message3 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names3[p] = result[i].rule_name;
				action3[p] = result[i].action;
				republish_topic3[p] = result[i].republish_topic;
				message3[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy3 = "+rule_names3);
      } 
    });
	 var collection = db.collection('four');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names4 = [];
			action4 =[];
			republish_topic4 = [];
			message4 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names4[p] = result[i].rule_name;
				action4[p] = result[i].action;
				republish_topic4[p] = result[i].republish_topic;
				message4[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy4 = "+rule_names4);
      } 
    });
	 var collection = db.collection('five');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names5 = [];
			action5 =[];
			republish_topic5 = [];
			message5 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names5[p] = result[i].rule_name;
				action5[p] = result[i].action;
				republish_topic5[p] = result[i].republish_topic;
				message5[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy5 = "+rule_names5);
      } 
    });
	 var collection = db.collection('six');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names6 = [];
			action6 =[];
			republish_topic6 = [];
			message6 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names6[p] = result[i].rule_name;
				action6[p] = result[i].action;
				republish_topic6[p] = result[i].republish_topic;
				message6[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy6 = "+rule_names6);
      } 
    });
	 var collection = db.collection('seven');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names7 = [];
			action7 =[];
			republish_topic7 = [];
			message7 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names7[p] = result[i].rule_name;
				action7[p] = result[i].action;
				republish_topic7[p] = result[i].republish_topic;
				message7[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy7 = "+rule_names7);
      } 
    });
	 var collection = db.collection('eight');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names8 = [];
			action8 =[];
			republish_topic8 = [];
			message8 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names8[p] = result[i].rule_name;
				action8[p] = result[i].action;
				republish_topic8[p] = result[i].republish_topic;
				message8[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy8 = "+rule_names8);
      } 
    });
	 var collection = db.collection('nine');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names9 = [];
			action9 =[];
			republish_topic9 = [];
			message9 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names9[p] = result[i].rule_name;
				action9[p] = result[i].action;
				republish_topic9[p] = result[i].republish_topic;
				message9[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy9 = "+rule_names9);
      } 
    });
	 var collection = db.collection('ten');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names10 = [];
			action10 =[];
			republish_topic10 = [];
			message10 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names10[p] = result[i].rule_name;
				action10[p] = result[i].action;
				republish_topic10[p] = result[i].republish_topic;
				message10[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy10 = "+rule_names10);
      } 
    });
	 var collection = db.collection('eleven');

    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names11 = [];
			action11 =[];
			republish_topic11 = [];
			message11 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names11[p] = result[i].rule_name;
				action11[p] = result[i].action;
				republish_topic11[p] = result[i].republish_topic;
				message11[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy11 = "+rule_names11);
      } 
    });
	 var collection = db.collection('twelve');
    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names12 = [];
			action12 =[];
			republish_topic12 = [];
			message12 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names12[p] = result[i].rule_name;
				action12[p] = result[i].action;
				republish_topic12[p] = result[i].republish_topic;
				message12[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy12 = "+rule_names12);
      } 
    });

	 var collection = db.collection('thirteen');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names13 = [];
			action13 =[];
			republish_topic13 = [];
			message13 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names13[p] = result[i].rule_name;
				action13[p] = result[i].action;
				republish_topic13[p] = result[i].republish_topic;
				message13[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy13 = "+rule_names13);
      } 
    });

	 var collection = db.collection('fourteen');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names14 = [];
			action14 =[];
			republish_topic14 = [];
			message14 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names14[p] = result[i].rule_name;
				action14[p] = result[i].action;
				republish_topic14[p] = result[i].republish_topic;
				message14[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy 14= "+rule_names14);
      } 
    });

	 var collection = db.collection('fifteen');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names15 = [];
			action15 =[];
			republish_topic15 = [];
			message15 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names15[p] = result[i].rule_name;
				action15[p] = result[i].action;
				republish_topic15[p] = result[i].republish_topic;
				message15[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy15 = "+rule_names15);
      } 
    });
	console.log("arrrayyy15 outside the find = "+rule_names15);
	 var collection = db.collection('sixteen');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names16 = [];
			action16 =[];
			republish_topic16 = [];
			message16 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names16[p] = result[i].rule_name;
				action16[p] = result[i].action;
				republish_topic16[p] = result[i].republish_topic;
				message16[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy 16= "+rule_names16);
      } 
    });

	 var collection = db.collection('seventeen');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names17 = [];
			action17 =[];
			republish_topic17 = [];
			message17 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names17[p] = result[i].rule_name;
				action17[p] = result[i].action;
				republish_topic17[p] = result[i].republish_topic;
				message17[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy17 = "+rule_names17);
      } 
    });

	 var collection = db.collection('eighteen');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names18 = [];
			action18 =[];
			republish_topic18 = [];
			message18 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names18[p] = result[i].rule_name;
				action18[p] = result[i].action;
				republish_topic18[p] = result[i].republish_topic;
				message18[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy18 = "+rule_names18);
      } 
    });

	 var collection = db.collection('nineteen');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names19 = [];
			action19 =[];
			republish_topic19 = [];
			message19 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names19[p] = result[i].rule_name;
				action19[p] = result[i].action;
				republish_topic19[p] = result[i].republish_topic;
				message19[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy19 = "+rule_names19);
      } 
    });

	 var collection = db.collection('twenty');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names20 = [];
			action20 =[];
			republish_topic20 = [];
			message20 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names20[p] = result[i].rule_name;
				action10[p] = result[i].action;
				republish_topic20[p] = result[i].republish_topic;
				message10[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy20 = "+rule_names20);
      } 
    });

	 var collection = db.collection('twentyone');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names21 = [];
			action21 =[];
			republish_topic21 = [];
			message21 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names21[p] = result[i].rule_name;
				action21[p] = result[i].action;
				republish_topic21[p] = result[i].republish_topic;
				message21[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy21 = "+rule_names21);
      } 
    });

	 var collection = db.collection('twentytwo');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names22 = [];
			action22 =[];
			republish_topic22 = [];
			message22 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names22[p] = result[i].rule_name;
				action22[p] = result[i].action;
				republish_topic22[p] = result[i].republish_topic;
				message22[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy22 = "+rule_names22);
      } 
    });

	 var collection = db.collection('twelvethree');
	     // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  i =0;
		   p=0;
		   rule_names23 = [];
			action23 =[];
			republish_topic23 = [];
			message23 = [];
			
		  while(result[i]){
			  if(result[i].rule_name){
				rule_names23[p] = result[i].rule_name;
				action23[p] = result[i].action;
				republish_topic23[p] = result[i].republish_topic;
				message23[p] = result[i].message;
				p++;
			  }
			i++;
		  }
		  console.log("arrrayyy23 = "+rule_names23);
      } 
    });

	setTimeout(function() {
	console.log("arrrayyy15 while rendering = "+rule_names15);
      res.render('timerule',{message_array0:message0, message_array1:message1, message_array2:message2, message_array3:message3, message_array4:message4, message_array5:message5, message_array6:message6, message_array7:message7, message_array8:message8, message_array9:message9, message_array10:message10, message_array11:message11, message_array12:message12, message_array13:message13, message_array14:message14, message_array15:message15, message_array16:message16, message_array17:message17, message_array18:message18, message_array19:message19, message_array20:message20, message_array21:message21, message_array22:message22, message_array23:message23, republish_topic_array0:republish_topic0, republish_topic_array1:republish_topic1, republish_topic_array2:republish_topic2, republish_topic_array3:republish_topic3, republish_topic_array4:republish_topic4, republish_topic_array5:republish_topic5, republish_topic_array6:republish_topic6, republish_topic_array7:republish_topic7, republish_topic_array8:republish_topic8, republish_topic_array9:republish_topic9, republish_topic_array10:republish_topic10, republish_topic_array11:republish_topic11, republish_topic_array12:republish_topic12, republish_topic_array13:republish_topic13, republish_topic_array14:republish_topic14, republish_topic_array15:republish_topic15, republish_topic_array16:republish_topic16, republish_topic_array17:republish_topic17, republish_topic_array18:republish_topic18, republish_topic_array19:republish_topic19, republish_topic_array20:republish_topic20, republish_topic_array21:republish_topic21, republish_topic_array22:republish_topic22, republish_topic_array23:republish_topic23,  rule_names_array0:rule_names0, rule_names_array1:rule_names1, rule_names_array2:rule_names2, rule_names_array3:rule_names3, rule_names_array4:rule_names4, rule_names_array5:rule_names5, rule_names_array6:rule_names6, rule_names_array7:rule_names7, rule_names_array8:rule_names8, rule_names_array9:rule_names9, rule_names_array10:rule_names10, rule_names_array11:rule_names11, rule_names_array12:rule_names12, rule_names_array13:rule_names13, rule_names_array14:rule_names14, rule_names_array15:rule_names15, rule_names_array16:rule_names16, rule_names_array17:rule_names17, rule_names_array18:rule_names18, rule_names_array19:rule_names19, rule_names_array20:rule_names20, rule_names_array21:rule_names21, rule_names_array22:rule_names22, rule_names_array23:rule_names23,  thing_array:thing_names,project_name_selected:project_name});

	}, 2000);
	  
	
}

});



});
	
module.exports = router;

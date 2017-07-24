var express = require('express');
var router = express.Router();

  var thing_names = [];
		  var types =[];
	var types_names =[];
		var full_id =[];
	var conn =[];
	var tstamp =[];
var state = [];
var state_thing = [];	
var boolq = 1;	
var i =0;
 var curr_status = 0;		  
		
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
var url3 = 'mongodb://127.0.0.1:27017/projects';
var url4 = 'mongodb://127.0.0.1:27017/state';

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
			full_id =[];
		  while(result[i]){
			thing_names[i] = result[i]._id;
			types[i] = result[i].type;
			conn[i] = result[i].connected;
			tstamp[i] = result[i].timestamp;
			full_id[i] = project_name+'/'+result[i]._id;
			i++;
		  }
		  var q=0;
		  curr_status = 0;
		  for(q = 0 ; q < i ; q++){
			if(parseInt(conn[q])){
					curr_status++;
			}
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
		full_id = [];
		console.log("nothing in the project");
	}     
    });
	
}

});
function showObject(obj) {
	console.log('inside the show object function.........');
  var result = "";
  for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      result += p + " : " + obj[p] + "\n";
    } 
  }              
  return result;
}

MongoClient.connect(url4, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url4);

	//console.log('proje  '+project);
    // Get the documents collection
    var collection = db.collection(project_name);

		 collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
			var i=0;
			state_thing = [];
			state = [];
			while(result[i]){
				state_thing[i] = result[i]._id;
				state[i] = showObject(result[i].state[0]);
				i++;
			}			
		console.log('states of state db isss --- '+state_thing);
		console.log('content of state db isss --- '+state);
		
      } else {
        console.log('No project found with this name!');
			
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

	//console.log('proje  '+project);
    // Get the documents collection
    var collection = db.collection('projects');

		var count = collection.find({"project_name":project_name}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  			
			collection.update({"project_name":project_name},{$set:{"online":curr_status}});
		
		
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
    console.log('Connection established to', url2);

    // Get the documents collection
   var collection = db.collection(project_name);
	
    // find things
		   collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		  boolq = 0;
		  var i =0;
		   types_names = [];
			while(result[i]){
			types_names[i] = result[i].type_name;
			i++;
		  }
		  console.log("arrrayyy of types= "+types_names);
		  console.log("connected status in.... "+conn);
			
		  // res.render('thingspage',{types_names_array:types_names});
		  setTimeout(function() {
res.render('thingspage',{full_id_array:full_id, tstamp_array:tstamp, state_thing_array:state_thing, state_array:state, conn_array:conn, types_names_array:types_names, thing_name_array:thing_names, types_array:types, project_name_selected:project_name });
		  },1000);




		//db.close();	
		
      } else{
		  console.log("connected status in else.... "+conn +"name array"+ thing_names);
		  types_name = [];
		  setTimeout(function() {
			res.render('thingspage',{full_id_array:full_id, tstamp_array:tstamp, state_thing_array:state_thing, state_array:state, conn_array:conn, types_names_array:types_names, thing_name_array:thing_names, types_array:types, project_name_selected:project_name });
		  },1000);
	  }
     
    });
	
}

});


});
	
module.exports = router;

var express = require('express');
var router = express.Router();

  var device_names = [];
		  var message =[];
	var boolq = 1;	
		
/* GET home page. */
router.get('/', function(req, res, next) {
	
	project_name = req.app.locals.project_nameQ;
	console.log("User name in db of things page ------= "+project_name);
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/alertDB';


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
		   device_names = [];
			message = [];
			
		  while(result[i]){
			device_names[i] = result[i].device_name;
			message[i] = showObject(result[i].message[0]);
			i++;
		  }
		result =[];		
		  //console.log("arrrayyy ---------------= "+thing_names);
			
		   res.render('alertpage',{device_name_array:device_names, message_array:message, project_name_selected:project_name });





		//db.close();	
		
      } 
	else{
		device_names = [];
		message =[];
		console.log("nothing in the project");
		res.render('alertpage',{device_name_array:device_names, message_array:message, project_name_selected:project_name });

	}     
    });
	
}

});





});
	
module.exports = router;

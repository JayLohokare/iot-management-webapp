var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://127.0.0.1:27017/rulesDB';
var url2 = 'mongodb://127.0.0.1:27017/thingsDB';

	
	
	
	/////////////end////
  
});
	
module.exports = router;

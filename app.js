var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var projects = require('./routes/projects');
var addprojectDB = require('./routes/addprojectDB');
var removeprojectDB = require('./routes/removeprojectDB');
var thingspage = require('./routes/thingspage');
var removethingDB = require('./routes/removethingDB');
var addtypeDB = require('./routes/addtypeDB');
var addthingDB = require('./routes/addthingDB');
var addruleDB = require('./routes/addruleDB');
var rulespage = require('./routes/rulespage');
var removeruleDB = require('./routes/removeruleDB');
var bucketpage = require('./routes/bucketpage');
var addBucketDB = require('./routes/addBucketDB');
var removeBucketDB = require('./routes/removeBucketDB');
var timerule = require('./routes/timerule');
var addtimeruleDB = require('./routes/addtimeruleDB');
var removetimeruleDB = require('./routes/removetimeruleDB');
var dashboard = require('./routes/dashboard');
var alertpage = require('./routes/alertpage');
var visualizepage = require('./routes/visualizepage');
var plotgraphpage = require('./routes/plotgraphpage');

var app = express();


////////////
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/projects',projects);
app.use('/addprojectDB',addprojectDB);
app.use('/removeprojectDB',removeprojectDB);
app.use('/thingspage',thingspage);
app.use('/removethingDB',removethingDB);
app.use('/addtypeDB',addtypeDB);
app.use('/addthingDB',addthingDB);
app.use('/addruleDB',addruleDB);
app.use('/rulespage',rulespage);
app.use('/removeruleDB',removeruleDB);
app.use('/bucketpage',bucketpage);
app.use('/addBucketDB',addBucketDB);
app.use('/removeBucketDB',removeBucketDB);
app.use('/timerule',timerule);
app.use('/addtimeruleDB',addtimeruleDB);
app.use('/removetimeruleDB',removetimeruleDB);
app.use('/dashboard',dashboard);
app.use('/alertpage',alertpage);
app.use('/visualizepage',visualizepage);
app.use('/plotgraphpage',plotgraphpage);

//////////////////////add project////////////
app.get('/addproject',function(req,res){
  var project_name=req.param('project_name');
  
  console.log("User name = "+project_name);
  
	app.locals.project_nameT = project_name;
	
	res.redirect('http://35.162.23.96:3000/addprojectDB');
});

///////////remove project//////////////////
app.get('/removeproject',function(req,res){
  var selected_project=req.param('selected_project');
  
  console.log("sseleceted projectsss are = "+selected_project);
  
	app.locals.selected_projectT = selected_project;
	
	res.redirect('http://35.162.23.96:3000/removeprojectDB');
});

/////////////things page////////////
app.get('/things',function(req,res){
  var project_name=req.param('project_name');
  
	app.locals.project_nameQ = project_name;
	
	res.redirect('http://35.162.23.96:3000/thingspage');
});

///////////////rules page/////////////
app.get('/rules',function(req,res){
  var project_name=req.param('project_name');
  
	app.locals.project_nameP = project_name;
	
	res.redirect('http://35.162.23.96:3000/rulespage');
});


///////////remove thing//////////////////
app.get('/removething',function(req,res){
  var selected_project = req.param('selected_project');
  var project = req.param('project');
  console.log("sseleceted things for deleteare = "+selected_project);
  console.log("sseleceted project deleteare = "+project);
  
	app.locals.selected_projectE = selected_project;
	app.locals.projectE = project;
	
	res.redirect('http://35.162.23.96:3000/removethingDB');
});

//////////////////////add type////////////
app.get('/addtype',function(req,res){
  var type_name=req.param('type_name');
  var project = req.param('project');
  console.log("type_name= "+type_name);
  
	app.locals.type_nameT = type_name;
	app.locals.projectT = project;
	
	res.redirect('http://35.162.23.96:3000/addtypeDB');
});

//////////////////////add thing////////////
app.get('/addthing',function(req,res){
  var project_name = req.param('project'); 
  var type = req.param('type'); 
  var thing_name = req.param('thing_name'); 
  var passw = req.param('passw'); 
  var isadmin = req.param('isadmin');
  
	app.locals.project_nameT = project_name;
	app.locals.typeT = type;
	app.locals.thing_nameT = thing_name;
	app.locals.passwT = passw;
	app.locals.isadminT = isadmin;
	
	
	res.redirect('http://35.162.23.96:3000/addthingDB');
});


//////////////////////add rule////////////
app.get('/addrule',function(req,res){
	
  var rule_name = req.param('rule_name'); 
  var parameter = req.param('parameter'); 
  var condition = req.param('condition'); 
  var topictype = req.param('topictype'); 
  var project = req.param('project'); 
  var thing = req.param('thing');
  var last_part = req.param('last_part');
  var last_part2 = req.param('last_part2');
  var dbtype = req.param('dbtype');
  var mongoserver = req.param('mongoserver');
  var mongodb = req.param('mongodb');
  var mongocollection = req.param('mongocollection');
  var mqtttype = req.param('mqtttype');
  var broker_ip = req.param('broker_ip');
  var topictype2 = req.param('topictype2');
  var project2 = req.param('project2');
  var thing2 = req.param('thing2');
  var last_partB = req.param('last_partB');
  var last_part2B = req.param('last_part2B');
  var other_ip = req.param('other_ip');
  var other_topic = req.param('other_topic');
  var to = req.param('to');
  var message = req.param('message');
  var subject = req.param('subject');
  
	app.locals.rule_nameR = rule_name;
	app.locals.parameterR = parameter;
	app.locals.conditionR = condition;
	app.locals.topictypeR = topictype;
	app.locals.projectR = project;
	app.locals.thingR = thing;
	app.locals.last_partR = last_part;
	app.locals.last_part2R = last_part2;
	app.locals.dbtypeR = dbtype;
	app.locals.mongoserverR = mongoserver;
	app.locals.mongodbR = mongodb;
	app.locals.mongocollectionR = mongocollection;
	app.locals.mqtttypeR = mqtttype;
	app.locals.broker_ipR = broker_ip;
	app.locals.topictype2R = topictype2;
	app.locals.project2R = project2;
	app.locals.thing2R = thing2;
	app.locals.last_partBR = last_partB;
	app.locals.last_part2BR = last_part2B;
	app.locals.other_ipR = other_ip;
	app.locals.other_topicR = other_topic;
	app.locals.toR = to;
	app.locals.messageR = message;
	app.locals.subjectR = subject;
	
	res.redirect('http://35.162.23.96:3000/addruleDB');
});

///////////remove rule//////////////////
app.get('/removerule',function(req,res){
  var removed_rule=req.param('removed_rule');
  var from_project=req.param('remove_from_project');
  
  console.log("sseleceted projectsss are = "+removed_rule);
  
	app.locals.removed_ruleT = removed_rule;
	app.locals.from_projectT = from_project;
	
	res.redirect('http://35.162.23.96:3000/removeruleDB');
});

/////////////databucket page////////////
app.get('/bucket',function(req,res){
  var project_name=req.param('project_name');
  
	app.locals.project_nameQ = project_name;
	
	res.redirect('http://35.162.23.96:3000/bucketpage');
});

//////////////////////add bucket////////////
app.get('/addBucket',function(req,res){
	
  var bucket_name = req.param('bucket_name'); 
 
  var condition = req.param('condition'); 
  var topictype = req.param('topictype'); 
  var project = req.param('project'); 
  var thing = req.param('thing');
  var last_part = req.param('last_part');
  var last_part2 = req.param('last_part2');
  
	app.locals.bucket_nameR = bucket_name;
	app.locals.conditionR = condition;
	app.locals.topictypeR = topictype;
	app.locals.projectR = project;
	app.locals.thingR = thing;
	app.locals.last_partR = last_part;
	app.locals.last_part2R = last_part2;
	
	res.redirect('http://35.162.23.96:3000/addBucketDB');
});


///////////remove bucket//////////////////////////////
app.get('/removeBucket',function(req,res){
  var selected_bucket=req.param('selected_bucket');
  var project=req.param('project');
  
  console.log("sseleceted bucktes are = "+selected_bucket);
  
	app.locals.selected_bucketT = selected_bucket;
	app.locals.projectT = project;
	
	res.redirect('http://35.162.23.96:3000/removeBucketDB');
});

/////////////time rulepage////////////
app.get('/timeruleslink',function(req,res){
  var project_name=req.param('project_name');
  
	app.locals.project_nameQ = project_name;
	
	res.redirect('http://35.162.23.96:3000/timerule');
});

//////////////////////add time rule////////////
app.get('/addtimerule',function(req,res){
	
  var rule_name = req.param('rule_name'); 
 
  var hour = req.param('hour');
  var message = req.param('message');
	
  var topictype = req.param('topictype'); 
  var project = req.param('project'); 
  var thing = req.param('thing');
  var last_part = req.param('last_part');
  var last_part2 = req.param('last_part2');
  
   console.log("-----message in  app js page = "+message);
  
	app.locals.rule_nameR = rule_name;
	app.locals.hourR = hour;
	app.locals.messageR = message;
	app.locals.topictypeR = topictype;
	app.locals.projectR = project;
	app.locals.thingR = thing;
	app.locals.last_partR = last_part;
	app.locals.last_part2R = last_part2;
	
	res.redirect('http://35.162.23.96:3000/addtimeruleDB');
});

///////////remove bucket//////////////////////////////
app.get('/removetimerule',function(req,res){
  var selected_bucket=req.param('selected_bucket');
  var project=req.param('project');
  
  console.log("sseleceted bucktes are = "+selected_bucket);
  
	app.locals.selected_bucketT = selected_bucket;
	app.locals.projectT = project;
	
	res.redirect('http://35.162.23.96:3000/removetimeruleDB');
});

///////////////rules page/////////////
app.get('/alert',function(req,res){
  var project_name=req.param('project_name');
  
	app.locals.project_nameP = project_name;
	
	res.redirect('http://35.162.23.96:3000/alertpage');
});

///////////////visualize page/////////////
app.get('/visualize',function(req,res){
  var project_name=req.param('project_name');
  
	app.locals.project_nameP = project_name;
	
	res.redirect('http://35.162.23.96:3000/visualizepage');
});

///////////////graphs page/////////////
app.get('/plotgraph',function(req,res){
  var project_name=req.param('project_name');
  var topic_selected = req.param('topic_selected');
  var parameter = req.param('parameter');
	
	app.locals.project_nameP = project_name;
	app.locals.topic_selectedP = topic_selected;
	app.locals.parameterP = parameter;
	
	res.redirect('http://35.162.23.96:3000/plotgraphpage');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

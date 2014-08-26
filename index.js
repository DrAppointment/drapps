var express = require('express')
	, http = require('http')
	, pushService = require('./pushService').PushService
	, webServices = require('./webServices').WebServices;

var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

/*
mongo.Db.connect(mongoUri, function (err, db) {
	db.collection('mydocs', function(er, collection) {
		collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
		});
	});
});

app.get('/appointment', function(req, res){
	mongo.Db.connect(mongoUri, function (err, db) {
		var mydocs = db.collection('mydocs');
		//console.log(mydocs.find());
		mydocs.find().toArray(function (err, docs) {
			res.send(docs);
		});
	}); 
});
*/
//app.get('/servicename', function(req, res){}); ---should accept parameters
//app.post('/servicename', function(req, res){}); ---should accept parameters

//Google Calendar - Node package installation


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Dr. Appointment !!! <br/> v1.3');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

//PUSH notification
var devicePush = new pushService();
app.get('/push', function(req, res){
	devicePush.push({
		platform: 'Android',
		deviceID: 'APA91bF-wA3Zz0X3VKx7nm0NniG52MeSrOBVU8jmGSu2N1tdy4iAHqmGWNRK7KdRHcRMF4luWBb-47W4AVnDZBAhTe_udoVR7Q7Wl2LberWR2n9YZc7dvcl4_Y9XRWSp6R2qSMk9qvpTwqU8HPzaXa966OrFGJ7hFQ',
		msgcount: 1,
		message: 'Push message test....123'
	});
	res.send('SUCCESS');
});

var ws = new webServices();
app.post('/setProfile', ws.setProfile);
app.post('/updateProfile/:id', ws.updateProfile);
app.get('/getProfile/:id', ws.getProfile);
app.get('/getAppointments/:id/:date', ws.getAppointments);
app.get('/getSpecialtyList', ws.getSpecialtyList);
app.get('/getSlot', ws.getSlot);
app.post('/setConfig/:id', ws.setConfig);

app.post('/getDrList', ws.getDrList);

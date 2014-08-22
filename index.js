var express = require('express')
	, pushService = require('./pushService').PushService
	, mongo = require('mongodb');

var app = express();

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

mongo.Db.connect(mongoUri, function (err, db) {
	db.collection('mydocs', function(er, collection) {
		collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
		});
	});
});

app.get('/appointment', function(req, res){
	/*mongo.Db.connect(mongoUri, function (err, db) {
	  db.collection('mydocs', function(er, collection) {
		
		res.send(JSON.stringify(collection.find()));
	  });
	});*/
	var json_data = { 
						"a": 1,
						"b": "test",
						"c": {"a": 1},
						"d": [1, 2, 3]
					};
					
	res.send(json_data);
});

//app.get('/servicename', function(req, res){}); ---should accept parameters
//app.post('/servicename', function(req, res){}); ---should accept parameters

//Google Calendar - Node package installation


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Dr. Appointment !!! <br/> v1.3');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

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


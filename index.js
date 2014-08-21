var express = require('express')
var app = express();

var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/mydb';

//'mongodb://drappointment_admin:WallaWalla123@ds055709.mongolab.com:55709/appdb';

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
//PUSH notification

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World !!! <br/> v1.2');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

function AndroidPush(){
	var gcm = require('node-gcm');
	var message = new gcm.Message();

	//API Server Key
	var sender = new gcm.Sender('AIzaSyCQyahIKMdL8DrdAwhG9bMcD3NXuu-c94g');
	var registrationIds = [];
	message.addData('message',"Push message test....");
	message.addData('title','Dr. Appointment' );
	//message.addData('msgcnt','1'); // Shows up in the notification in the status bar
	message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
	//message.collapseKey = 'demo';
	//message.delayWhileIdle = true; //Default is false
	message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.

	// At least one reg id required
	registrationIds.push('APA91bF-wA3Zz0X3VKx7nm0NniG52MeSrOBVU8jmGSu2N1tdy4iAHqmGWNRK7KdRHcRMF4luWBb-47W4AVnDZBAhTe_udoVR7Q7Wl2LberWR2n9YZc7dvcl4_Y9XRWSp6R2qSMk9qvpTwqU8HPzaXa966OrFGJ7hFQ');

	/**
	* Parameters: message-literal, registrationIds-array, No. of retries, callback-function
	*/
	sender.send(message, registrationIds, 0, function (result) {
		console.log(result);
	});
}
app.get('/push', function(req, res){
	AndroidPush();
	res.send('SUCCESS');
});


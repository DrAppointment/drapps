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


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World !!! <br/> v1.2');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


/*mongo.Db.connect(mongoUri, function (err, db) {
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
var mongo = require('mongodb');
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

function WebServices(){};

WebServices.prototype.setProfile = function(req, res) {
	console.log(req);
	console.log(req.params('title'));
	console.log('TEST');
	res.jsonp('SUCCESS');
};

WebServices.prototype.getProfile = function(req, res) {
	var id = req.params.id; //parseInt(req.params.id);
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('users');
		/* collectionObj.find().toArray(function (err, data) {
			res.send(data);
		}); */
		collectionObj.findOne({'id': id}, function(err, data) {
			//res.send(data);
            res.jsonp(data);
        });
	}); 
};

WebServices.prototype.getProfessionalDetails= function(req, res) {};

WebServices.prototype.getSpecialtyList= function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('dropdown');
		collectionObj.findOne({'dropdowm_id': 'specialty'}, function(err, data) {
            res.jsonp(data);
        });
	});
};

WebServices.prototype.getSlot= function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('dropdown');
		collectionObj.findOne({'dropdowm_id': 'slot'}, function(err, data) {
            res.jsonp(data);
        });
	});
};

WebServices.prototype.setDrProfile= function(req, res) {};

WebServices.prototype.getClinicDetails= function(req, res) {};

WebServices.prototype.setClinicDetails= function(req, res) {};

WebServices.prototype.getLocations= function(req, res) {};

WebServices.prototype.getDrList= function(req, res) {};

WebServices.prototype.getAppointments= function(req, res) {};

WebServices.prototype.scheduleAppointments= function(req, res) {};

WebServices.prototype.myAppointments= function(req, res) {};

WebServices.prototype.cancelAppointments= function(req, res) {};

WebServices.prototype.rescheduleAppointments= function(req, res) {};

WebServices.prototype.getPendingApprovals= function(req, res) {};

WebServices.prototype.rejectAppointments= function(req, res) {};

WebServices.prototype.approveAppointments= function(req, res) {};

WebServices.prototype.getDashboardDetails= function(req, res) {};

exports.WebServices = WebServices;
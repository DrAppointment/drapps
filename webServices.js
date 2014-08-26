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
//PUSH notification
var pushService = require('./pushService').PushService
var devicePush = new pushService();

var mongo = require('mongodb');
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

function WebServices(){};

WebServices.prototype.setProfile = function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var userObj = db.collection('users');
		console.log(req.body.googleInfo.id);
		userObj.findOne({'google_id': req.body.googleInfo.id}, function(err, data) {
			if(data === null){ 
			    var profileDetails ={
						"google_id":req.body.googleInfo.id,
						"email":req.body.googleInfo.email,
						"verified_email":true,
						"name":req.body.googleInfo.name,
						"given_name":req.body.googleInfo.given_name,
						"family_name":req.body.googleInfo.family_name,
						"link":req.body.googleInfo.link,
						"picture":req.body.googleInfo.picture,
						"gender":req.body.googleInfo.gender,
						"mobile": "",
						"locale":"en",
						"regid":req.body.regid,
						"oauth": req.body.oauth,
						"config": {
							"doctor":false,
							"push":true,
							"calendar":true,
							"sound":true,
							"vibration":true
						}
						
						/* "qualification": {
							"degree": "",
							"passing_year": "",
							"institute": "",
							"experience": ""
						},
						"specialization": "",
						"clinic": [
							{
								"clinic_id": "99",
								"address": {
									"name": "",
									"locality": "",
									"city": "Kolkata",
									"pin": 700091,
									"state": "WB",
									"country": "IN",
									"latlong": {
										"latitude": "",
										"longitude": ""
									}
								},
								"fees": "",
								"slot": "",
								"timeslot": {
									"mon" : "",
									"tue" : "",
									"wed" : "",
									"thu" : "",
									"fri" : "",
									"sat" : "",
									"sun" : ""
								}
							}
						] */
				}
				devicePush.push({
					platform: 'Android',
					deviceID: req.body.regid,
					msgcount: 1,
					message: 'Welcome to Dr. Appointment'
				}),
				userObj.insert(profileDetails, {safe: true}, function(er,rs){
					console.log("Data inserted");
				});
			}
			else {
				console.log('User already exists');
			}
			res.jsonp("Done");
        });
	}); 
};

WebServices.prototype.updateProfile = function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('users');
		collectionObj.update({'google_id': req.params.id},{
					$set:{
							"mobile": req.body.mobile
						}},{multi:true},function(err, data) {
			res.jsonp(data);
		});
	}); 
};

WebServices.prototype.getProfile = function(req, res) {
	var id = req.params.id; //parseInt(req.params.id);
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('users');
		/* collectionObj.find().toArray(function (err, data) {
			res.send(data);
		}); */
		collectionObj.findOne({'google_id': id}, function(err, data) {
			//res.send(data);
            res.jsonp(data);
        });
	}); 
};

WebServices.prototype.getProfessionalDetails= function(req, res) {
	var id = req.params.id;
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('doctor');
		collectionObj.findOne({'google_id': id }, function(err, data) {
            res.jsonp(data);
        })
	});
};

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

WebServices.prototype.getClinicDetails= function(req, res) {
	var id = req.params.id;
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('doctor');
		collectionObj.findOne({'google_id': id }, function(err, data) {
            res.jsonp(data);
        })
	});
};

WebServices.prototype.setClinicDetails= function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('clinics');
		collectionObj.insert({}, function(err, data) {
            res.jsonp(data.toArray());
        })
	});
};

WebServices.prototype.getLocations= function(req, res) {
	
};

WebServices.prototype.getDrList= function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('users');
		collectionObj.find({ 'name' : { $regex : req.body.name } , 'config.doctor':'true'}).toArray(function (err, data) {
            res.jsonp(data);
        })
	});
};

WebServices.prototype.getAppointments= function(req, res) {//gets the scheduled appt of doctor on particular day
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('appointments');
		collectionObj.find({ 'doctor_id': req.params.id, 'date': req.params.date }, function(err, data) {
            res.jsonp(data);
        });
	});
};

WebServices.prototype.scheduleAppointments= function(req, res) {
	
};

WebServices.prototype.myAppointments= function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('appointments');
		collectionObj.find({ 'doctor_id': '115764280134911539331', 'status': 'Requested' }, function(err, data) {
            res.jsonp(data);
        });
	});
};

WebServices.prototype.cancelAppointments= function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('appointments');
		collectionObj.update({'doctor_id': '115764280134911539331'},{$set:{'status':'Cancelled'}},{multi:true},function(err, data) {
			res.jsonp(data);
		});
	})
};

WebServices.prototype.rescheduleAppointments= function(req, res) {};

WebServices.prototype.getPendingApprovals= function(req, res) {};

WebServices.prototype.rejectAppointments= function(req, res) {};

WebServices.prototype.approveAppointments= function(req, res) {};

WebServices.prototype.getDashboardDetails= function(req, res) {};

WebServices.prototype.generateClinicid= function(req, res) {};

WebServices.prototype.setConfig = function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		var collectionObj = db.collection('users');
		collectionObj.update({'google_id': req.params.id},{$set:{'config':req.body}},{multi:true},function(err, data) {
			res.jsonp(data);
		});
	}); 
};


exports.WebServices = WebServices;
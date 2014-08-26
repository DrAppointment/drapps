//http://www.jonathanbroquist.com/building-a-google-calendar-booking-app-with-mongodb-expressjs-angularjs-and-node-js-part-1/
//http://ravibail.wordpress.com/2013/10/25/learnings-from-using-google-calendar-api-from-node/


var util = require('util');
var express  = require('express');
//Middle wares
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//end of middle wares

var config = require('./config');
var gcal = require('google-calendar');

/*
  ===========================================================================
            Setup express + passportjs server for authentication
  ===========================================================================
*/

var app = express();
var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


//app.configure(function() {
 app.use(cookieParser());//; app.use(express.cookieParser());
   app.use(bodyParser.json());//app.use(express.bodyParser());
 app.use(session({ secret: 'keyboard cat', 
                 saveUninitialized: true,
                 resave: true })); //app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
//});
app.listen(8082);

passport.use(new GoogleStrategy({
    clientID: config.consumer_key,
    clientSecret: config.consumer_secret,
    callbackURL: "http://localhost:8082/auth/callback",
    scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar'] 
  },
  function(accessToken, refreshToken, profile, done) {
    profile.accessToken = accessToken;
    return done(null, profile);
  }
));

app.get('/auth',
  passport.authenticate('google', { session: false, 
                 saveUninitialized: true,
                 resave: true }));

app.get('/auth/callback', 
  passport.authenticate('google', { session: false,
                 saveUninitialized: true,
                 resave: true, failureRedirect: '/login' }),
  function(req, res) { 
    req.session.access_token = req.user.accessToken;
    res.redirect('/');
  });


/*
  ===========================================================================
                               Google Calendar
  ===========================================================================
*/

app.all('/', function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  var accessToken = req.session.access_token;
  
  gcal(accessToken).calendarList.list(function(err, data) {
    if(err) return res.send(500,err);
    return res.send(data);
  });
});

app.all('/:calendarId', function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  
  gcal(accessToken).events.list(calendarId, function(err, data) {
    if(err) return res.send(500,err);
    return res.send(data);
  });
});

app.all('/:calendarId/add', function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  var text            = req.query.text || 'Hello World';
  
  gcal(accessToken).events.quickAdd(calendarId, text, function(err, data) {
    if(err) return res.send(500,err);
    return res.redirect('/'+calendarId);
  });
});

app.all('/:calendarId/:eventId/remove', function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  var eventId         = req.params.eventId;
  
  gcal(accessToken).events.delete(calendarId, eventId, function(err, data) {
    if(err) return res.send(500,err);
    return res.redirect('/'+calendarId);
  });
});

app.all('/:calendarId/detailadd', function(req, res){
  if(!req.session.access_token) return res.redirect('/auth');
  
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;

	var cal_event = {
		"start": 	{"dateTime": "2014-08-19T10:00:00.000-07:00"},
		"end": 		{"dateTime": "2014-08-19T10:25:00.000-07:00"},
		"location": "Kolkata",
		"attendees": [
			{"email": "maildebjyoti@gmail.com"},
			{"email": "amiteshhh.nitk@gmail.com"}
		],
		"description": "This is a test appointment. Please ignore this.",
		"summary": "Your Appointment is confirmed",
		"creator": {
			"displayName": "Dr. Appointment Admin"
		},
		"organizer": {
			"displayName": "Admin (Organizer)"
		},
		"status": "confirmed"
	};

  gcal(accessToken).events.insert(calendarId, cal_event, function(err, data) {
    if(err) return res.send(500,err);
    return res.redirect('/'+calendarId);
  });
});

PushService = function(){};

PushService.prototype.push= function(params) {
	var push = {
		platform : params.platform,
		deviceID : params.deviceID,
		msgcount : params.msgcount,
		message : params.message 
	};
	
	if ( push.platform === 'Android' ) {
		var config = {
			sender: 'AIzaSyCQyahIKMdL8DrdAwhG9bMcD3NXuu-c94g',
			title: 'Dr. Appointment',
			sound: 'beep.wav',	//Sound to play upon notification receipt - put in the www folder in app
			timeToLive: 3000,	//Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
			delay : true,		//Default is false
			retries: 1			//No. of retries
		};

		var gcm = require('node-gcm');
		//API Server Key
		var sender = new gcm.Sender(config.sender);
		var registrationIds = [];
		
		//GCM Message
		var message = new gcm.Message();
		message.addData('title', config.title );
		message.addData('soundname',config.sound); 
		message.timeToLive = config.timeToLive; 
		//message.delayWhileIdle = config.delay; 
		message.addData('message', push.message);
		//message.addData('msgcnt',push.msgcount); 
		//message.collapseKey = 'demo';

		// At least one reg id required
		registrationIds.push(push.deviceID);
		
		//Parameters: message-literal, registrationIds-array, No. of retries, callback-function
		sender.send(message, registrationIds, config.retries, function (result) {
			console.log(result);
		});
	}
};

exports.PushService = PushService;
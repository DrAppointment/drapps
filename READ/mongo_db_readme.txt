db.mydocs.find()
db.users.findOne({"google_id":"108845856433955419628"})

db.users.drop()
show collections
db.mydocs.remove({})


db.createCollection("users")
db.users.remove({})
db.users.insert([
	{
		"google_id":"108845856433955419628",
		"email":"drappointment.hackathon@gmail.com",
		"verified_email":true,
		"name":"Dr. Appointment Hackathon",
		"given_name":"Dr. Appointment",
		"family_name":"Hackathon",
		"link":"https://plus.google.com/108845856433955419628",
		"picture":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
		"gender":"male",
		"locale":"en",
		"android_deviceid":"APA91bF-wA3Zz0X3VKx7nm0NniG52MeSrOBVU8jmGSu2N1tdy4iAHqmGWNRK7KdRHcRMF4luWBb-47W4AVnDZBAhTe_udoVR7Q7Wl2LberWR2n9YZc7dvcl4_Y9XRWSp6R2qSMk9qvpTwqU8HPzaXa966OrFGJ7hFQ",
		"oauth": "",
		"config": {
			"doctor":false,
			"push":true,
			"calendar":true,
			"sound":true,
			"vibration":true
		},
		"doctor_id": ""
	},
	{
		"google_id":"115764280134911539331",
		"email":"maildebjyoti@gmail.com",
		"verified_email":true,
		"name":"Debjyoti Acharjee",
		"given_name":"Debjyoti",
		"family_name":"Acharjee",
		"link":"https://plus.google.com/+DebjyotiAcharjee",
		"picture":"https://lh6.googleusercontent.com/-8JQxyPnP_gc/AAAAAAAAAAI/AAAAAAAADjo/tO6ZWF_cpl4/photo.jpg",
		"gender":"male",
		"locale":"en-GB",
		"android_deviceid":"",
		"oauth": "",
		"config": {
			"doctor":true,
			"push":true,
			"calendar":true,
			"sound":true,
			"vibration":true
		},
		"doctor_id": "115764280134911539331"
	}
])
	
db.createCollection("dropdown")
db.dropdown.insert([
	{ 
		"dropdowm_id": "slot",
		"item_list": [10,20,30,40,50,60]
	}
])

db.dropdown.insert([
	{ 
		"dropdowm_id": "specialty",
		"item_list": ["Acupuncturist","Aesthetic Medicine","Aesthetic Surgeon","Allergist/immunologist","Alternative Medicine","Anesthesia And Pain Medicine","Anesthesiologist","Audiologist","Ayurveda","Bariatric Surgeon","Cardiologist","Cosmetic/plastic Surgeon","Dentist","Derma","Dermatologist/Cosmetologist","Diabetologist","Dietitian/nutritionist","Ear-nose-throat (ENT) Specialist","Emergency & Critical Care","Endocrinologist","Gastroenterologist","General Physician","General Surgeon","Geneticist","Geriatrician","Gynecologic Oncologist","Gynecologist/Obstetrician","Hair Transplant Surgeon","Hematologist","Homeopath","Integrated Medicine","Internal Medicine","Nephrologist","Neurologist","Neurosurgeon","Nuclear Medicine Physician","Obesity Specialist","Occupational Therapist","Oncologist","Ophthalmologist","Optician","Oral Medicine And Radiology","Oral Pathologist","Oral Surgeon","Orthopedist","Pathologist","Pediatrician","Physiotherapist","Podiatrist","Psychiatrist","Psychologist","Pulmonologist","Radiologist","Rehab & Physical Medicine Specialist","Rheumatologist","Saloon","Sexologist","Somnologist","Spa","Speech Therapist","Sports Medicine Specialist","Surgeon","Toxicologist","Unani","Urologist","Vascular Surgeon","Venereologist","Veterinarian","Wellness","Yoga And Naturopathy"]
	}
])
db.dropdown.insert([
	{ 
		"dropdowm_id": "appointment_status",
		"item_list": ['Approved', 'Rejected', 'Pending', 'Cancelled']
	}
])

db.createCollection("sequence")
db.sequence.insert([
	{"seq_id": "clinic", "current_seq": 1},
	{"seq_id": "appointment", "current_seq": 5},
	{"seq_id": "user", "current_seq": 0},
	{"seq_id": "doctor", "current_seq": 0}
])

db.createCollection("doctor")
db.doctor.insert([
	{
		"google_id": "115764280134911539331",
		"qualification": {
			"degree": "MBBS, MD (Medicine)",
			"passing_year": "2000",
			"institute": "AIMS",
			"experience": "15years"
		},
		"specialization": "Medicine",
		"clinic": [
			{
				"clinic_id": "99",
				"address": {
					"name": "Apollo Hospital",
					"locality":"Sector V, SaltLake",
					"city": "Kolkata",
					"pin": 700091,
					"state": "WB",
					"country": "IN",
					"latlong": {
						"latitude": "",
						"longitude": ""
					}
				},
				"fees": "500",
				"slot": "20",
				"timeslot": {
					"MO" : [9,10,11,18,19,20],
					"TU" : [9,10,11,18,19,20],
					"WE" : [],
					"TH" : [],
					"FR" : [9,10,11,18,19,20],
					"SA" : [],
					"SU" : [18,19,20]
				}
			},
			{
				"clinic_id": "98",
				"address": {
					"name": "Tata Hospital",
					"locality":"Sector V, SaltLake",
					"city": "Kolkata",
					"pin": 700091,
					"state": "WB",
					"country": "IN",
					"latlong": {
						"latitude": "",
						"longitude": ""
					}
				},
				"fees": "200",
				"timeslot": {
					"MO" : [],
					"TU" : [],
					"WE" : [9,10,11,18,19,20],
					"TH" : [9,10,11,18,19,20],
					"FR" : [],
					"SA" : [],
					"SU" : [9,10,11]
				}
			}
		]
	}
])

db.createCollection("clinics")
db.clinics.insert([
	{
		"clinic_id": "98",
		"address": {
			"name": "Tata Hospital",
			"locality":"Sector V, SaltLake",
			"city": "Kolkata",
			"pin": 700091,
			"state": "WB",
			"country": "IN",
			"latlong": {
				"latitude": "",
				"longitude": ""
			}
		}
	},
	{
		"clinic_id": "99",
		"address": {
			"name": "Apollo Hospital",
			"locality":"Sector V, SaltLake",
			"city": "Kolkata",
			"pin": 700091,
			"state": "WB",
			"country": "IN",
			"latlong": {
				"latitude": "",
				"longitude": ""
			}
		}
	}
])

db.createCollection("appointments")
db.appointments.remove({})
db.appointments.insert([
	{
		"appointment_id" : "1",
		"clinic_id" : "99",
		"patient_id": "108845856433955419628",
		"doctor_id": "115764280134911539331",
		"date": "08-24-2014",
		"time": "1900",
		"date_time": "08-24-2014:1900",
		"slot":20,
		"patient_comment": "Severe stomach ache",
		"dr_comment": "Come with empty stomach",
		"status": "Approved",
		"push_status": "N",
		"gcal_status": "N"
	},
	{
		"appointment_id" : "2",
		"clinic_id" : "98",
		"patient_id": "108845856433955419628",
		"doctor_id": "115764280134911539331",
		"date": "08-24-2014",
		"time": "1930",
		"date_time": "08-24-2014:1930",
		"slot":20,
		"patient_comment": "Severe stomach ache",
		"dr_comment": "Come with empty stomach",
		"status": "Approved",
		"push_status": "N",
		"gcal_status": "N"
	},
	{
		"appointment_id" : "3",
		"clinic_id" : "99",
		"patient_id": "108845856433955419628",
		"doctor_id": "115764280134911539331",
		"date": "08-24-2014",
		"time": "1900",
		"date_time": "08-25-2014:1900",
		"slot":20,
		"patient_comment": "Severe stomach ache",
		"dr_comment": "Come with empty stomach",
		"status": "Pending",
		"push_status": "N",
		"gcal_status": "N"
	},
	{
		"appointment_id" : "4",
		"clinic_id" : "99",
		"patient_id": "108845856433955419628",
		"doctor_id": "115764280134911539331",
		"date": "08-24-2014",
		"time": "1100",
		"date_time": "08-25-2014:1100",
		"slot":20,
		"patient_comment": "Severe stomach ache",
		"dr_comment": "Come with empty stomach",
		"status": "Rejected",
		"push_status": "N",
		"gcal_status": "N"
	},
	{
		"appointment_id" : "5",
		"clinic_id" : "98",
		"patient_id": "108845856433955419628",
		"doctor_id": "115764280134911539331",
		"date": "08-24-2014",
		"time": "1930",
		"date_time": "08-25-2014:1930",
		"slot":20,
		"patient_comment": "Severe stomach ache",
		"dr_comment": "Come with empty stomach",
		"status": "Cancelled",
		"push_status": "N",
		"gcal_status": "N"
	}
])

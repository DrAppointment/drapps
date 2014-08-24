https://devcenter.heroku.com/articles/getting-started-with-nodejs

*Works only on VPN
heroku login
	drappointment.hackathon@gmail.com
	WallaWalla123
	

--npm init
--npm install express logfmt --save

mkdir drapps
cd drapps
git init
git add .
git commit -m "init"
heroku apps:create drapps

git push heroku master
heroku ps:scale web=1

heroku addons:add mongolab
npm install mongodb --save

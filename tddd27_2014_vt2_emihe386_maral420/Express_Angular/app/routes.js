// app/routes.js
var db = require('./../config/db');
var mongoose = require('mongoose');
var course = mongoose.model('course');
var user = mongoose.model('user');
var passport = require('passport')
var GoogleStrategy = require('passport-google').Strategy;

	module.exports = function(app) {

		// server routes ===========================================================
		// handle things like api calls
		// authentication routes

		passport.use(new GoogleStrategy({
			returnURL: 'http://localhost:8080/homeView',
			realm: 'http://localhost:8080'
			}, function(identifier, profile, done) {
				User.findOrCreate({ openId: identifier },
					function(err, user) {
						done(err, user);
					}
				);
			}
		));

		// Redirect the user to Google for authentication.  When complete, Google
		// will redirect the user back to the application at
		//     /auth/google/return
		app.get('/auth/google', passport.authenticate('google'),
			function(req, res){
				}
		);

		// Google will redirect the user to this URL after authentication.  Finish
		// the process by verifying the assertion.  If valid, the user will be
		// logged in.  Otherwise, authentication has failed.
		app.get('/auth/google/callback',
			passport.authenticate('google', { failureRedirect: '/getAllCourse'}),
			function(req, res){
				res.redirect('/')
			}
		);

		app.post('/loginRequest', function(req, res){
			console.log(req.body);
			res.send({message:"user exists"});
		});

		app.post('/addCourse', function(req, res) {
			console.log("adds course with body|" + req.body + "|");
			var newCourse = new course({
				courseName: req.body.name,
				greenfee: req.body.greenFee,
				restCond: req.body.restCond,
				enviroment: req.body.env,
				opinion: req.body.overall
			});

			newCourse.save(function(err){
				console.log("Saved course|" + newCourse + "| in db");
				res.send({ message: 'course added!' })
			});

			course.find({courseName: 'k'},
				function(err, resp){
					if(err)
						return console.log(err);
					else
						console.log("found|" + resp + "|")
				});
		});

		app.post('/createUser', function(req, res) {
			console.log("adds user with body|" + req.body + "|");
			var newUser = new user({
				userName: req.body.userName,
				password: req.body.password
			});

			var ifUserExists = false;

			user.find({userName: req.body.userName}, function(err, resp){
				if(err)
					return console.log(err);
				else if (resp.length != 0) {
					console.log("User already exists");
					ifUserExists = true;
					res.send({message: "user already exists"});
				}

				if (!ifUserExists) {
					newUser.save(function(err){
						if (err)
							console.log("error saving user|" + err);
						console.log("Saved user|" + newUser +"| to db");
						res.send({message: "User has been created"});
					});
				};
			});
		});

		app.get('/detailedView/:courseId', function(req, res){
			console.log('get from req.params|' + req.params.courseId + '|end');
			var getCourse = new course();
				if (req.params.courseId == 'hardCoded') {
					getCourse = {name: 'detVarId hardCoded', greenfee:'999'};
					res.json(getCourse);
				} else if(req.params.courseId == 'hard') {
					getCourse = {name: 'Leet', greenfee:'1337'};
					res.json(getCourse);
				} else {
					course.findById(req.params.courseId,
						function(err, resp) {
							if (err)
								res.send(err);
							console.log(resp);
							res.json(resp);
						}
					);
				}
		});
		
		app.get('/getAllCourses', function (req, res){
			course.find({}, function (err, allCourses){
 				if (err)
					return console.log("cannot fetch courses");
				console.log("sending all courses");
				res.json(allCourses);
			})
		});

		// frontend routes =========================================================
		// route to handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

	};
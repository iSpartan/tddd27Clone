// config/db.js
var mongoose= require('mongoose');
var Schema   = mongoose.Schema;

/*
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;
path = require('path')
*/

var courseSchema = new Schema({
    courseName: String,
    description: String,
    greenfee: Number,
    restCond: String,	// Should be Numbers
    enviroment: String,
    opinion: Number,
    numberOfRates: Number		// Should be Numbers
});
/*
var uploads_base = path.join(__dirname, "uploads");

courseSchema.plugin(filePlugin, {
    name: "photo",
    upload_to: path.join(uploads_base, "u"),
    relative_to: uploads_base
});
*/
module.exports = mongoose.model('course', courseSchema);

/*var userSchema = new Schema({
 username: String,
 password: String
 });*/
/*mongoose.model('user', userSchema);

/*mongoose.connect('mongodb://localhost/mydb');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function (){*/
/*	console.log("in mongodb");

	var user = mongoose.model('user');
	var course = mongoose.model('course');*/

	/*user.find({}, function(err, resp) {
			if (err)
				console.log("Error finding all users in setup");
			if (resp.length != 0) {
				console.log("user test case exists");
			} else {
				console.log("Creates a user testcase");
				var testCase1 = new user({
					userName: 'marcus',
					password: 'marcus21'
				});
				testCase1.save(function(){
					console.log("Saved the user test case");
				});
			}
		});

	course.find({}, function(err, resp) {
			if (err)
				console.log("Error finding all courses in setup");
			if (resp.length != 0) {
				console.log("course test case exists");				
			} else {
				console.log("Creates a course testcase");
				var testCase2 = new course({
					courseName: 'testCourse',
					greenfee: '1337',
					restCond: 'testCond',
					enviroment: 'testEnv',
					description: 'A nice course with a lovely nature and a nice 8:th hole',
					opinion: 'testOpinion'
				});
				testCase2.save(function(){
					console.log("Saved the course test case");
				});
			}
		});
});*/

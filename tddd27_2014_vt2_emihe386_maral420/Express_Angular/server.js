// server.js

	// modules =================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');

    /*
    var path = require('path')
    var uploads_base = path.join(__dirname, "uploads")
    */

	// configuration ===========================================
mongoose.connect('mongodb://localhost/mydb');
require('./config/passport')(passport);

app.configure(function() {                  
    app.set('client-url','http://localhost:8080');
    app.set('client-google-signin','/google?action=signin');
    app.disable('x-powered-by');
    app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 	
    app.use(express.cookieParser());			// log every request to the console
    app.use(express.bodyParser())			// have the ability to pull information from html in POST
    app.use(express.methodOverride()); 		// have the ability to simulate DELETE and PUT              
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.session({ secret: 'keyboard cat' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
	});

app.configure('development', function() {
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    console.log("Starting in development mode");
});

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Connected to db");
});

var UserHandler = require('./handlers/UserHandler');
var CourseHandler = require('./handlers/CourseHandler');
var handlers = {
    user: new UserHandler(),
    course: new CourseHandler()
};

require('./handlers/AuthHandler')(app, passport);
var routes = require('./routes');
routes.setup(app, handlers);

// start app ===============================================
app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// shoutout to the user

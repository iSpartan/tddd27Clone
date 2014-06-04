var user = require('../config/user');

var UserHandler = function() {
   // this.createUser = handleCreateUserRequest;
   // this.getUsers = handleGetUsersRequest;
    this.isLoggedIn = isLoggedIn;
   /* this.getUser = handleGetUserRequest;
    this.updateUser = handleUpdateUserRequest;
    this.deleteUser = handleDeleteUserRequest;*/
    this.signOut = signOut;
	console.log("User Handler Set Up");
};
function isLoggedIn(req, res, next) {
	console.log("CHECKS IF LOGGED IN");
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()){
	    console.log("IS LOGGED IN");
	    return res.send({message: true});
	   
	}
	console.log("NOT LOGGED IN");
    res.json({message: false});
    // if they aren't redirect them to the home page
	res.redirect('/');
}

function signOut(req,res){
req.logout();
    res.redirect('http://localhost:8080');

}/*
function handleCreateUserRequest(req,res) {
	console.log(req.body);
};


function handleGetUsersRequest(req,res) {
	console.log("I am here"+req.body.email);
	user.find({}, function (err, users) {
		if(err) {
			console.log(err);
		}	
		else {
		    console.log("current user"+users);
			res.send(users);
		}
	});	
};

function handleGetUserRequest(req, res) {
	console.log("UserHandler.js - handleGetUserRequest input|" + req.params);

	user.findById(req.params.courseId, function(err, resp) {
		if (err) {
			return res.send(err);
		}

		if (!resp) {
			console.log("UserHandler.js - No user found");
			return res.send(401, "User Not Authenticated");
		} else {
			console.log("UserHandler.js - Found user|" + resp);
			return res.send(200, "FOUND A USER"); // SHOULD PROBABLY BE A JSON WITH USER INFORMATION
		}
	});

};*/


module.exports = UserHandler;


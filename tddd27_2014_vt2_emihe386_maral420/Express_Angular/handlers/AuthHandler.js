var UserDB = require('../config/user')
var passport;

module.exports = function(app, passport) {

	app.get('/logout', function(req, res) {
		req.logout();
    console.log("user logout");
		res.redirect('/');
	});

app.get('/auth/google',
	passport.authenticate('google',{scope: ['email']})
);

app.get('/auth/google/callback',
	passport.authenticate('google', {
		successRedirect : '/',
		failureRedirect : '/failure'
	}));

}
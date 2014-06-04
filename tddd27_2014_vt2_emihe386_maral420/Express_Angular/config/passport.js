
var google_strategy = require('passport-google-oauth').OAuth2Strategy;

var UserDB = require('./user');

module.exports = function(passport){

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        UserDB.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new google_strategy({
    clientID: '262869452014.apps.googleusercontent.com',
    clientSecret: 'sNLyVFej0Pj-hw1unnhcxv0u',
    callbackURL: 'http://localhost:8080/auth/google/callback'
},
function(accessToken, refreshToken, profile, done) {

process.nextTick(function() {
    UserDB.findOne({email: profile._json.email},function(err, usr) {
        if(usr!=null){
            console.log("server.js - User existed");
        } else {
            console.log("server.js - No user existed, creates new user");
            usr = new UserDB({
                email: profile._json.email,
                token: accessToken
            });
            usr.save(function(err, usr, num) {
            if(err)	{
                console.log("server.js - error saving user with token" + err);
            }
            console.log("server.js - Saved user to db|" + usr + "|");
        });
        } // DETTA ÄR FEL VI SKA INTE SPARA EN NY USER OM VI REDAN HAR EN, VILKET VI GÖR NU
            return done(null, usr);
    });

        });
}));
};
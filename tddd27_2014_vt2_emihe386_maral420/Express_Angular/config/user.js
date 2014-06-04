// User Schema
//
// 

var mongoose = require('mongoose');

var schema =  new mongoose.Schema(
	{
		email: {type: String, required: true},
		token: {type: String, required: false},
		userName: {type: String, required: false} // If we want the users to be able to specify a username to be shown istead of... something
	}
);

module.exports = mongoose.model('User', schema);

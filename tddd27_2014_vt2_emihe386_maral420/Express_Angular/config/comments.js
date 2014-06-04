var mongoose= require('mongoose');
var Schema   = mongoose.Schema;

var CourseComments = new Schema({
    courseId: String,
    comment: String
});
module.exports = mongoose.model('comments', CourseComments);

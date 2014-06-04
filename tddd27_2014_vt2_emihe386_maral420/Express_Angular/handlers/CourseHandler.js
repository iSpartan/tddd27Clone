var course = require('../config/db')
var comments = require('../config/comments')

var CourseHandler = function(){
    this.getAllCourses = getAllCourses;
    this.sendRating = sendRating;
    this.addCourse = addCourse;
    this.getdetCourse = getdetCourse;
    this.addComment = addComment;
    this.getComments = getComments;
}

function sendRating(req, res){
    console.log("post new rating: "+req.body.courseId+", "+req.body.opinion);
    course.findById(req.body.courseId, function (err, courses){
 	if (err)
	    return console.log("cannot fetch courses");
	 newNumberOfRates=(courses.numberOfRates+1);
	totRate = (courses.opinion*courses.numberOfRates+req.body.opinion)/(newNumberOfRates);
	console.log("newRating: "+totRate);   
	course.update({_id: req.body.courseId}, {opinion: totRate, numberOfRates: newNumberOfRates},
		      function (err, numberAffected, raw) {
			  if (err) return console.log(err);
			  console.log('The number of updated documents was %d', numberAffected);
			  console.log('The raw response from Mongo was ', raw);
		  }); 
    });
  
}
function addComment(req, res){
     console.log("adds comment with body|" + req.body + "|");
    var newComment = new comments({
                               courseId: req.body.courseId,
                               comment: req.body.comment
                               });
    
   newComment.save(function(err){
       if(err)
	   console.log("error in saving comment "+err)

       console.log("Saved comment|" + newComment + "| in db");
       res.send({ message: 'comment added!' })
   });
};

function getComments(req, res){
comments.find({courseId: req.params.courseId}, function (err, allComments){
 				if (err)
                return console.log("cannot fetch comments");
				console.log("sending all comments");
				res.json(allComments);
                })
};

function getAllCourses (req, res){
    course.find({}, function (err, allCourses){
 				if (err)
                return console.log("cannot fetch courses");
				console.log("sending all courses");
				res.json(allCourses);
                })
};
function addCourse (req, res) {
    console.log("adds course with body|" + req.body + "|");
    var newCourse = new course({
        courseName: req.body.name,
        greenfee: req.body.greenFee,
        restCond: req.body.restCond,
        enviroment: req.body.env,
        description: req.body.description,
        opinion: req.body.opinion,
	numberOfRates: 1
                               });
    console.log(req.body.picture);
//    newCourse.set('photo.file', req.body.picture);
    newCourse.save(function(err) {
      if(err)
        console.log(err);
      res.send({ message: 'course added!' });
    });
};

function getdetCourse (req, res){

    console.log('get from req.params|' + req.params.courseId + '|end');
    course.findById(req.params.courseId,
                    function(err, resp) {
			if (err)
			    res.send(err);
			console.log(resp);
			res.json(resp);
                    }
                   );
};

module.exports = CourseHandler;

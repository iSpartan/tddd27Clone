// app/routes.js

function setup(app, handlers){
    app.get('/getAllCourses', handlers.course.getAllCourses);
    app.post('/addCourse', handlers.course.addCourse);
    app.get('/detailedView/:courseId', handlers.course.getdetCourse);
    app.post('/postNewRating', handlers.course.sendRating);
    app.get('/isLoggedIn', handlers.user.isLoggedIn);
    app.get('/signOut', handlers.user.signOut);
    app.post('/addComment', handlers.course.addComment);
    app.get('/getComments/:courseId', handlers.course.getComments);
	console.log("Successfully set up routes");
}


exports.setup = setup;


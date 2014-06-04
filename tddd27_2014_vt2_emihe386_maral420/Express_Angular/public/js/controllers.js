'use strict';

/* Controllers */
(function() {

var myAppControllers =angular.module('myAppControllers', ['ui.bootstrap']);

  myAppControllers.controller('homeCtrl',['$scope', 'courseListService',
    function($scope, courseListService) {
      $scope.allCourses = courseListService.getAllCourses();
    }
  ]);

    myAppControllers.controller('detailedCtrl', ['$scope', '$routeParams', 'courseDetailService', 
						  'courseDetailCommentService',
						 'courseCommentsService', 'sendNewRating',
    function($scope, $routeParams, courseDetailService,courseDetailCommentService, 
	     courseCommentsService, sendNewRating) {
	var courseId = $routeParams.courseId;
	$scope.course = courseDetailService.getCourseData({courseId: $routeParams.courseId});
	$scope.comments = courseCommentsService.getComments({courseId: $routeParams.courseId});

	$scope.submit = function() {
	    $scope.course.courseId = courseId;
	    console.log($scope.course);
	    sendNewRating.save($scope.course);
     }
    
	$scope.addnewcomment = function(){ 
	    $scope.textcomment.courseId = courseId;
      $scope.comments.push($scope.textcomment);
	    courseDetailCommentService.save($scope.textcomment);
      $scope.textcomment="";
}
 } ]);

 myAppControllers.controller('addCourseCtrl', ['$scope', 'addCourseService',
    function($scope, addCourseService){
      $scope.submit = function(){
        addCourseService.save($scope.addCourse);
        $scope.addCourse="";
      }
    }
  ]);

myAppControllers.controller('indexCtrl', ['$scope','bannerLoggedIn','signOutUser',
    function($scope, bannerLoggedIn, signOutUser){
	 
	$scope.signOut = function(){
	$scope.isLoggedIn = signOutUser.signOut();
	}
	$scope.isLoggedIn = bannerLoggedIn.isLoggedIn();
  }
  ]);

}).call(this);

  /* $scope.max = 10;
     $scope.isReadonly = false;
     $scope.percent = 20;

      $scope.hoveringOver = function(value,object) {
        console.log('hoveringOver', value);
        $scope.overStar = value;
        $scope.percent = (100 * $scope.overStar) / $scope.max;
      }

       $scope.hoveringLeave = function(rate) {
         console.log('hoveringLeave',  $scope.addCourse);
	   $scope.percent = (100 * $scope.addCourse.opinion) / $scope.max;
       }*/

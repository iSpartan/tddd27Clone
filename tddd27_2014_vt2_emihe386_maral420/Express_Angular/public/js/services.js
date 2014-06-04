'use strict';

/* Services */

var appService = angular.module('appServices', ['ngResource']);

appService.factory('courseDetailService', ['$resource', '$routeParams',
  function($resource){
    return $resource('/detailedView/:courseId', {}, {
        getCourseData: {method:'GET', isArray:false}
      });
  }]); 

appService.factory('courseCommentsService', ['$resource', '$routeParams',
  function($resource){
    return $resource('/getComments/:courseId', {}, {
        getComments: {method:'GET', isArray:true}
      });
  }]);


appService.factory('sendNewRating', ['$resource',
	function($resource){
	    return $resource('/postNewRating', {}, {});
}]);

appService.factory('courseListService', ['$resource',
  function($resource){
        return $resource('/getAllCourses', {}, {
          getAllCourses: {method:'GET', isArray:true}
      });
  }]);

appService.factory('addCourseService', ['$resource',
  function($resource){
    return $resource('/addCourse', {}, {
    });
  }
]);
/*
appService.factory('createUserService', ['$resource',
  function($resource){
    return $resource('/createUser', {}, {
    });
  }
]);
*/
appService.factory('courseDetailCommentService', ['$resource',
	function($resource){
	    return $resource('/addComment', {}, {});
}]);
/*
appService.factory('accountService', ['$resource',
  function($resource){
    return $resource('/changePassword', {}, {
      changePassword: {method:'POST', isArray:false}
    });
  }
]);
*/

appService.factory('bannerLoggedIn', ['$resource',
  function($resource){
    return $resource('/isLoggedIn', {}, {
      isLoggedIn: {method:'GET', isArray:false}
    });
  }
]);
appService.factory('signOutUser', ['$resource',
  function($resource){
    return $resource('/signOut', {}, {
      signOut: {method:'GET', isArray:false}
    });
  }
]);

/*
appService.factory('loginServices', ['$resource',
  function($resource){
    return $resource('/auth/google', {}, {
      sendGoogleLoginRequest: {method: 'GET'},
      sendLogin: {method:'POST', isArray:false},
      sendForgotpassword: {method:'POST', isArray:false}
    });
  }
]);
*/

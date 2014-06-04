'use strict';

var myApp = angular.module('myApp', [
  'ngRoute',
  'selfFilters',
  'appServices',
  'selfDirectives',
  'myAppControllers',
  'ui.bootstrap'
]);

// Declare app level module which depends on filters, and services
myApp.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.when('/homeView', {
      templateUrl: 'partials/homeView.html',
        controller: 'homeCtrl'
          });
    $routeProvider.when('/addCourse', {
      templateUrl: 'partials/addCourse.html',
      controller: 'addCourseCtrl'
     });
    $routeProvider.when('/detailedView/:courseId', {
      templateUrl: 'partials/detailedView.html',
        controller: 'detailedCtrl'
          });
  /*$routeProvider.when('/accountView', {
      templateUrl: 'partials/accountView.html',
        controller: 'accountCtrl'
          });
  $routeProvider.when('/createAccView', {
      templateUrl: 'partials/createAccView.html',
        controller: 'createAccCtrl'
          });*/
  $routeProvider.otherwise({
    redirectTo: '/homeView'
      });

//    $locationProvider.html5Mode(true);

}]);

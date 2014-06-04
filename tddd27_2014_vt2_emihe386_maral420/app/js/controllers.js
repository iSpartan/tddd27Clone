'use strict';

/* Controllers */
(function() {

var myAppControllers =angular.module('myAppControllers', []);

  myAppControllers.controller('homeCtrl',[$scope, function($scope) {
                           $scope.homeViews =[{'name': 'Hulta',
                                            'greenfee':'400'},
                                            {'name': 'Kind', 'greenfee':'350'}
                                            ];//get info from database

                 }, function($scope, Login){
                    $scope.logInResponse = Login.tryLogIn($scope.logInForm);
                 }
                 ]);
  
   myAppControllers.controller('detailedCtrl',['$scope', function($scope) {
  $scope.golf_course = course.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
  myAppControllers.controller('accountCtrl', function() {

                 
                 });
  myAppControllers.controller('createAccCtrl', function() {

                                  
                 });

}).call(this);
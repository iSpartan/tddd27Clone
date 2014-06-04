'use strict';

/* Services */

var appService = angular.module('appServices', ['ngResource']);

appService.factory('Login', ['$resource',
  function($resource){

  	var sendLogin = function(form, path){
  		return $resource({
  			method: 'POST',
        url: path,
  			params: {data: form}
  		});
  	}
    return {
      tryLogin: function(formData) {
      	return sendLogIn(formData, 'loginAttempt');
      }
    });
  }]);

angular.module('myApp.services', [])
  .factory('githubService', ['$http', function($http) {

    var doRequest = function(username, path) {
      return $http({
        method: 'JSONP',
        url: 'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
      });
    }
    return {
      events: function(username) { return doRequest(username, 'events'); },
    };
  }]);
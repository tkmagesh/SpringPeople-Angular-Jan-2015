'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.service("logService", function(){
	this.log = function(){
		
	}
})
.controller('View1Ctrl', ['$scope','logService', function($scope, logService) {
	$scope.count = 0;
	$scope.increment = function(){
		$scope.count++;
		logService.log($scope.count);
	}
}]);
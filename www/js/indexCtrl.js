var Controllers = angular.module("Controllers");
Controllers.controller("IndexCtrl", ["$scope", 
	function($scope){
		"use strict";
		$scope.hello = "Angular seed";
	}]);
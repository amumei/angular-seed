"use strict";
var Controllers = angular.module("Controllers");

Controllers.controller("IndexCtrl", ["$scope", 
	function($scope){
		$scope.hello = "Angular seed";
	}]);
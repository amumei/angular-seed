"use strict";
var app = angular.module("app");
app.config([
	"$stateProvider",
	"$urlRouterProvider",
	function($stateProvider, $urlRouterProvider){

		var CONTENT = "content"

		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state("index", {
			url: "/",
			views: view(CONTENT, "IndexCtrl", "views/index.html")
		});

		function view(viewName, controllerName, viewUrl){
			var result = {};
			result[viewName] = {
				templateUrl: viewUrl
			};

			if(controllerName !== null){
				result[viewName].controller = controllerName;
			}
			return result;
		}
	}
	]);
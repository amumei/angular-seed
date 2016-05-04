var app = angular.module("app");
app.config([
	"$stateProvider",
	"$urlRouterProvider",
	function($stateProvider, $urlRouterProvider){
		"use strict";

		var MAIN_CONTENT = "content@";

		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state("index", {
			url: "/",
			views: view(MAIN_CONTENT, "IndexCtrl", "views/index.html")
		});

		function view(viewName, ctrlName, viewUrl){
			var result = {};
			result[viewName] = {templateUrl: viewUrl};

			if(ctrlName !== null && ctrlName !== undefined){
				result[viewName].controller = ctrlName;
			}
			return result;
		}
	}
	]);
beforeEach(module("app"));

describe("LandingPageCtrl", function(){
	"use strict";
	var scope, ctrl;

	beforeEach(inject(function($controller){
		scope = {};
		ctrl = $controller("LandingPageCtrl", {$scope: scope});
	}));

	it("should define LandingPageCtrl", function(){
		expect(ctrl).toBeDefined();
	});
});
beforeEach(module("app"));

describe("IndexCtrl", function(){
	"use strict";
	var scope, ctrl;

	beforeEach(inject(function($controller){
		scope = {};
		ctrl = $controller("IndexCtrl", {$scope: scope});
	}));

	it("should define IndexCtrl", function(){
		expect(ctrl).toBeDefined();
	});
});
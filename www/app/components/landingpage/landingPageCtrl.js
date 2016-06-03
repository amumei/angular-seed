(function(){
    "use strict";
    angular.module("app")
        .controller("LandingPageCtrl", ["$scope", LandingPageCtrl]);

    function LandingPageCtrl($scope){
        $scope.hello = "Angular seed landing page";
    }
})();
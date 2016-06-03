(function(){
    "use strict";

    angular.module("app")
        .config(["$stateProvider", "$urlRouterProvider", AppConfig]);

    function AppConfig($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("index", {
                url: "/",
                views: {
                    "content@": {
                        templateUrl: "app/components/landingpage/landingPageView.html",
                        controller: "LandingPageCtrl"
                    }
                }
            });
    }
})();
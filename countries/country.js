viewsModule.config([
    "$routeProvider", function($routeProvider) {
        $routeProvider.when("/countries", {
            templateUrl: "./countries/country.html",
            controller: "CountryController"
        });
    }
]);

viewsModule.controller('CountryController', ['$scope',
                              function($scope) {
                                  $scope.data = "This is the Country page";
                              }]);
                              

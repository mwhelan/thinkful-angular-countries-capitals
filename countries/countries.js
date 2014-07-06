viewsModule.config([
    "$routeProvider", function($routeProvider) {
        $routeProvider.when("/countries", {
            templateUrl: "./countries/countries.html",
            controller: "CountriesController"
        });
    }
]);

viewsModule.controller('CountriesController', [
    '$scope', 'cacCountryList',
    function($scope, cacCountryList) {
        cacCountryList.getCountries().then(function(result) {
            $scope.data = result.data;
        });
    }
]);
                              

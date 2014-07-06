viewsModule.config([
    "$routeProvider", function($routeProvider) {
        $routeProvider.when("/countries", {
            templateUrl: "./countries/countries.html",
            controller: "CountriesController"
        });
    }
]);

viewsModule.controller('CountriesController', [
    '$scope', 'countryRepository',
    function($scope, countryRepository) {
        countryRepository.getCountryList()
            .then(function(result) {
                $scope.countries = result.geonames;
            });
    }
]);
                              

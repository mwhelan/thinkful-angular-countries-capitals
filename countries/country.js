viewsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/countries/:countryCode", {
        templateUrl: "./countries/country.html",
        controller: 'CountryController',
        resolve: {
            capitalPopulation: ['cacCapital', function(cacCapital) {
                cacCapital.getCapitalPopulation()
                .then(function(result) {
                    var pop = result.data.geonames[0].population;
                        return pop;
                    })
                .error(function(reason) {
                        alert(reason);
                    });
            }]
        }
    });
}]);

viewsModule.controller('CountryController', ['$scope', 'cacCountrySingle',
    function ($scope, cacCountrySingle) {
        cacCountrySingle.getCountry().then(function (result) {
            $scope.country = result.data.geonames[0];
        });
    }
]);
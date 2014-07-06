viewsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/countries/:countryCode", {
        templateUrl: "./countries/country.html",
        controller: 'CountryController'
    });
}]);

viewsModule.controller('CountryController', ['$scope', 'cacCountrySingle',
    function ($scope, cacCountrySingle) {
        cacCountrySingle.getCountry().then(function (result) {
            $scope.country = result.data.geonames[0];
        });
    }
]);
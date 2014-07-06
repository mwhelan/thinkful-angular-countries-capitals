viewsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/countries/:countryCode", {
        templateUrl: "./countries/country.html",
        controller: 'CountryController',
        resolve: {
            countryDetails: ['countryRepository', function (countryRepository) {
                return countryRepository.getCountry();
            }],
            neighbourList: ['countryRepository', function (countryRepository) {
                return countryRepository.getNeighbourList();
            }],
            capitalDetails: ['countryRepository', function (countryRepository) {
                return countryRepository.getCapitalDetails();
            }]
        }
    });
}]);

viewsModule.controller('CountryController', ['$scope', 'countryDetails', 'neighbourList', 'capitalDetails',
    function ($scope, countryDetails, neighbourList, capitalDetails) {
        $scope.country = countryDetails.geonames[0];
        $scope.capitalPopulation = capitalDetails.geonames[0].population;
        $scope.neighbours = neighbourList.geonames;
    }
]);
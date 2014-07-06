angular.module('cacDataServices', [])
    .factory('cacCountryList', ['$http', function ($http) {
        return {
            getCountries: function() {
                var url = "http://api.geonames.org/countryInfoJSON?username=mwhelan";
                return $http.get(url, { cache: true });
            }
        }
    }])

.factory('cacCountrySingle', ['$http', '$route', function($http, $route) {
    return {
        getCountry: function() {
            var url = "http://api.geonames.org/countryInfoJSON?username=mwhelan&country=" + $route.current.params.countryCode;
            return $http.get(url);
        }
    }
}])

.factory('cacNeighbourList', ['$http', '$route', function ($http, $route) {
    return {
        getNeighbours: function () {
            var url = "http://api.geonames.org/neighboursJSON?username=mwhelan&country=" + $route.current.params.countryCode;
            return $http.get(url);
        }
    }
}])

.factory('cacCapital', ['$http', '$route', function ($http, $route) {
    return {
        getCapitalPopulation: function() {
            var url = "http://api.geonames.org/searchJSON?formatted=true&username=mwhelan&q=capital&&style=full&country=" + $route.current.params.countryCode;
            return $http.get(url);
        }
    }
}]);

angular.module('cacDataServices', [])
    .factory('cacCountryList', ['$http', function ($http) {
        return {
            getCountries: function () {
                    return $http.get('http://api.geonames.org/countryInfoJSON?username=mwhelan', { cache: true });
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
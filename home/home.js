viewsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "./home/home.html",
        controller: 'HomeController'
    });
}]);

viewsModule.controller('HomeController', ['$scope',
                            function ($scope) {
                                $scope.data = "world";
                            }]);

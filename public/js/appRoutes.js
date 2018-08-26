// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthController'
        })

        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })

        .when('/properties', {
            templateUrl: 'views/properties.html',
            controller: 'PropertyController'
        });

    $locationProvider.html5Mode(true);

}]);

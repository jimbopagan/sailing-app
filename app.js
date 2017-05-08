var app = angular.module('myApp', ['ngRoute', 'myApp.Auth'])
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "components/home/home.html",
            controller: 'HomeController',

        })
        .when("/profile", {
            templateUrl: "/profile/profile.html",
            controller: "ProfileController",
        })
        .otherwise({
            redirecTo: '/home'
        })
}])

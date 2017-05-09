var app = angular.module('myApp', ['ngRoute', 'myApp.Auth'])
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: "/home/home.html",
        controller: 'HomeController'
    })
}]);

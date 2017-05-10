var app = angular.module("myApp");

app.controller("WeatherController", ["$scope", "weatherService", function ($scope, weatherService, $http){
    $scope.getWeatherInfo = function (lat,long){
        weatherService.getWeatherInfo(lat,long).then(function (response){
            console.log(response)
        })
    }


}]);

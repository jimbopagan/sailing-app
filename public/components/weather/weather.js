var app = angular.module("myApp");

app.controller("WeatherController", ["$scope", "weatherService", function ($scope, weatherService, $http){
    $scope.person = {};

    if (localStorage.getItem('lat') === null){
        $scope.itDoesNotExist = true;
    }
    else {
        $scope.itDoesNotExist = false;
    }

    $scope.getWeatherInfo = function (person){
        weatherService.getWeatherInfo(person).then(function (response){
            console.log(response.data.weather[0]);
            $scope.date = response.data.weather[0].date;
            $scope.swellDirection = response.data.weather[0].hourly[0].swellDir16Point;
            $scope.sigWaveHeight = response.data.weather[0].hourly[0].sigHeight_m;
            $scope.windSpeed = response.data.weather[0].hourly[0].windspeedMiles + " miles";
            $scope.windDirection = response.data.weather[0].hourly[0].winddir16Point;
            $scope.visibility = response.data.weather[0].hourly[0].visibility + " %";
            $scope.cloudCover = response.data.weather[0].hourly[0].cloudcover + " %";
            $scope.windChill = response.data.weather[0].hourly[0].WindChillF + " F";
        })
    }
}]);

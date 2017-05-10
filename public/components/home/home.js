var app = angular.module("myApp");

app.controller("HomeController", ["$scope", "UserService", "NgMap", function ($scope, UserService, NgMap) {
    $scope.getLocation = function () {
        var x = document.getElementById("demo");
        var d = new Date();
        document.getElementById("demo2").innerHTML = d;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        }
    }
}]);

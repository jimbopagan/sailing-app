var app = angular.module("myApp");

app.controller("HomeController", ["$scope", "UserService", "NgMap", function ($scope, UserService, NgMap) {
    $scope.getLocation = function () {
        var x = document.getElementById("demo");
        var d = new Date();


        document.getElementById("demo2").innerHTML = d;

        function setDate (d){
            var dd = d.getDate();
            var mm = d.getMonth() + 1;
            var yyyy = d.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }

            var date = yyyy + "-" + mm + "-" + dd;
            localStorage.setItem('date', date);
        }

        setDate(d);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

        function showPosition(position) {
            localStorage.setItem('lat', position.coords.latitude);
            localStorage.setItem('long', position.coords.longitude);
            x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        }

        if (localStorage.getItem('lat') === null){
            $scope.itDoesNotExist = true;
        }
        else {
            $scope.itDoesNotExist = false;
        }
    }
}]);

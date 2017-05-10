var app = angular.module("myApp");

app.controller("HomeController", ["$scope", "UserService", 'NgMap', function ($scope, UserService, NgMap) {

    //    NgMap.getMap().then(function (map) {
    //        var center = map.getCenter();
    //        console.log(center);
    //        $scope.center = "[" + center.lng() + ", " + center.lat() + "]";
    //        console.log($scope.center);
    //    })

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

    //                initMap(position.coords.longitude, position.coords.latitude);
=======
//    NgMap.getMap().then(function (map) {
//        var center = map.getCenter();
//        console.log(center);
//        $scope.center = "[" + center.lng() + ", " + center.lat() + "]";
//        console.log($scope.center);
//    })
    //    $scope.getLocation = function () {
    //        var x = document.getElementById("demo");
    //
    //
    //        if (navigator.geolocation) {
    //            navigator.geolocation.getCurrentPosition(showPosition);
    //        } else {
    //            x.innerHTML = "Geolocation is not supported by this browser.";
    //        }
    //
    //        function showPosition(position) {
    //            x.innerHTML = "Latitude: " + position.coords.latitude +
    //                "<br>Longitude: " + position.coords.longitude;
    //            initMap(position.coords.longitude, position.coords.latitude);
    //        }
    //    }
>>>>>>> 57e098be41e0ddc0c11c2a9592ce4787a7e585b6
    //    function initMap(long, lat) {
    //        var uluru = {
    //            lat: lat,
    //            lng: long
    //        };
    //        var map = new google.maps.Map(document.getElementById('map'), {
    //            zoom: 4,
    //            center: uluru
    //        });
    //        var marker = new google.maps.Marker({
    //            position: uluru,
    //            map: map
    //        });
    //    }


}]);

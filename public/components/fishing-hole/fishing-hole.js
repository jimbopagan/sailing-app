var app = angular.module("myApp");

app.controller("FishingHoleController", ["$scope", "fishingHoleService", "UserService", function ($scope,fishingHoleService, UserService) {

    $scope.get = function (){
        fishingHoleService.getFishingHole(key,search).then(function(response){
            $scope.results = response;
        })
    };

    $scope.get();

}]);

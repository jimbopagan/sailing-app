var app = angular.module("myApp");

app.controller("FishingHoleController", ["$scope", "fishingHoleService", "UserService", function ($scope, fishingHoleService, UserService) {
    $scope.holes = [];
    $scope.get = function (state) {
        fishingHoleService.getFishingHole(state).then(function (res) {
            console.log(res)
            if(res == []){
                $scope.resultMessage = 'no fishing holes in your state';
            } else {
                $scope.holes = res;
            }
        })
    };
    $scope.newHole = function (hole) {
        fishingHoleService.addFishingHole(hole).then(function(res) {
            if (res) {
                $scope.message = "Hole added";
                $scope.form.$setPristine();
                $scope.hole={};
            }
            else {
                $scope.message = "There was a problem"
            }
        })
    }
}]);

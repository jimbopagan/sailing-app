var app = angular.module("myApp");

app.controller("FishingHoleController", ["$scope", "fishingHoleService", "UserService", function ($scope, fishingHoleService, UserService) {
    $scope.holes = [];
    $scope.get = function (state) {
        fishingHoleService.getFishingHole(state).then(function (res) {
            console.log(res)
            if(res == 'No results found'){
                $scope.resultMessage = 'no fishing holes in your state';
                $scope.message = null;
                $scope.holes = [];
            } else if (res) {
                $scope.holes = res;
                $scope.message = null;
                $scope.resultMessage = null;
            }
        })
    };
    $scope.newHole = function (hole) {
        fishingHoleService.addFishingHole(hole).then(function(res) {
            if (res) {
                $scope.message = "Hole added";
                $scope.resultMessage = null;
                $scope.form.$setPristine();
                $scope.hole={};
            }
            else {
                $scope.message = "There was a problem";
                $scope.resultMessage = null;
            }
        })
    }
}]);

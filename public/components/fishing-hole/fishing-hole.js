var app = angular.module("myApp");

app.controller("FishingHoleController", ["$scope", "fishingHoleService", "UserService", function ($scope, fishingHoleService, UserService) {
    $scope.holes = [];
    $scope.get = function (state) {
        console.dir(state);
        fishingHoleService.getFishingHole(state).then(function (res) {
            if (!res) {
                console.dir(res);
                console.log('no holes data');
                $scope.message = 'no fishing holes in your state';
            } else {
                console.log('else')
                $scope.holes = res;
                console.log(res);
                //                $scope.currentUser = res.data.currentUser;
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

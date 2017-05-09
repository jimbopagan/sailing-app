var app = angular.module("myApp");

app.controller("HomeController", ["$scope", "UserService", function ($scope, UserService) {  
    $scope.userService = UserService;

}]);
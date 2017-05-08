var app = angular.module("myApp.Auth");

app.controller("LogoutController", ["UserService", function (UserService) {  
    UserService.logout();
}]);
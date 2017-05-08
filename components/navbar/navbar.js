var app = angular.module("myApp");

app.directive("navbar", ["UserService", function(UserService) {  
    return {
        templateUrl: "components/navbar/navbar.html",
        link: function(scope) {
            scope.userService = UserService;
        }
    }
}]);
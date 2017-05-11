// components/auth/auth.js


var app = angular.module("myApp.Auth", ['ngMap']);

app.config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['Authorization'];
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.common['Authorization'];
    $httpProvider.defaults.headers.common.Authorization = undefined;

    $routeProvider
        .when('/home', {
            templateUrl: "components/home/home.html",
            controller: 'HomeController',
            css: "components/home/home.css"
        })
        .when("/profile", {
            templateUrl: "components/profile/profile.html",
            controller: "ProfileController"
        })
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController",
            css: "components/auth/login/css/login.css"
        })
        .when("/weather", {
            templateUrl: "components/weather/weather.html",
            controller: "WeatherController",
            css: "components/weather/css/weather.css"
        })
        .when("/logout", {
            controller: "LogoutController",
            templateUrl: "components/auth/logout/logout.html",
            css: "components/auth/logout/css/logout.css"
        })
        .when("/forgot", {
            templateUrl: "components/auth/forgot/forgot.html",
            controller: "ForgotPasswordController"
        })
        .when("/fishing-hole", {
            templateUrl: "components/fishing-hole/fishing-hole.html",
            controller: "FishingHoleController"
        })
        .when("/reset/:resetToken", {
            templateUrl: "components/auth/reset/reset.html",
            controller: "PasswordResetController"
        })
        .otherwise({
            redirecTo: '/home'
        });
}]);

app.service("TokenService", [function () {
    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;
    };

    this.getToken = function () {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    };
}]);

app.service("UserService", ["$http", "$location", "TokenService", function ($http, $location, TokenService) {
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {
            TokenService.setToken(response.data.token);
            return response;
        });
    };

    this.logout = function () {
        TokenService.removeToken();
        $location.path("/logout");
    };

    this.isAuthenticated = function () {
        return !!TokenService.getToken();
    };
    this.changePassword = function (newPassword) {
        console.log(newPassword);
        return $http.post("/auth/change-password", {
            newPassword: newPassword
        }).then(function (response) {
            alert("Password Changed Successfully!");
            return response.data;
        }, function (response) {
            alert("Problem with the server");
        });
    };
    this.forgotPassword = function (email) {
        console.log("Sending an email to " + email);
        return $http.post("/auth/forgot", {
            email: email
        })
    };
    this.resetForgottenPassword = function (password, resetToken) {
        return $http.post("/auth/reset" + resetToken, {
            password: password
        }).then(function (response) {
            return response.data.message;
        });
    };
}]);

app.service("weatherService", ['$http', function ($http) {
    this.getWeatherInfo = function (person) {
        var key = 'key=5c3af7f2277b4f15bf5214611170805';
        // var today = new Date();
        // var dd = today.getDate();
        // var mm = today.getMonth() + 1;
        // var yyyy = today.getFullYear();
        //
        // if (dd < 10) {
        //     dd = '0' + dd
        // }
        // if (mm < 10) {
        //     mm = '0' + mm
        // }
        //
        // var date = yyyy + "-" + mm + "-" + dd;


        return $http.get('http://api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&date=' + localStorage.getItem('date') +
            '&q=' + localStorage.getItem('lat') + "," + localStorage.getItem('long') + '&format=json').then(function (response) {
            return response.data
        })
    }
}]);

app.service("fishingHoleService", ["$http", function ($http) {
    this.getFishingHole = function () {
        return $http.get('/api/fishing-hole/holes').then(function (response) {
            return response;
        })
    }

}]);
app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function (config) {
        var token = TokenService.getToken();
        if (token && config.url.startsWith('/api')) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);

var app = angular.module('ExamMania', ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/login.html",
        controller : 'loginController'
    })
    .when("/admin", {
        templateUrl : "views/admin.html",
        controller : 'adminController'
    })
    .when("/user", {
        templateUrl : "views/user.html",
        controller : 'userController'
    })
    .when("/register", {
        templateUrl : "views/register.html",
        controller : 'registerController'
    })
    .when("/sets", {
        templateUrl : "views/sets.html",
        controller : 'setsController'
    })
    .when("/schedule", {
        templateUrl : "views/schedule.html",
        controller : 'scheduleController'
    })
    $locationProvider.html5Mode(true);
}]);

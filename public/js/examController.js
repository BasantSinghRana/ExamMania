
var app = angular.module('ExamMania');

app.controller('examController', function($scope, $location, $cookies) {
     $location.path('/login');
     window.onbeforeunload = function() { return false; };
     window.onpopstate = function (e) { window.history.forward(1); }
});

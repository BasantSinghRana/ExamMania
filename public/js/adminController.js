
var app = angular.module('ExamMania');

app.controller('adminController', function($scope) {
   window.onbeforeunload = function() { return "Your work will be lost."; };
});

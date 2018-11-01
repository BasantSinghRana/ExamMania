
var app = angular.module('ExamMania');

app.controller('scheduleController', function($scope, $http) {
  $http({
    method : "GET",
    url : "/users"
  }).then(function mySuccess(response) {
    $scope.users = response.data;

    console.log($scope.users);
  }, function myError(response) {
    $scope.myWelcome = response.statusText;
  });

  $scope.submit = function(users){
    $http({
      method : "POST",
      url : "/mapSets",
      data : users
    }).then(function mySuccess(response) {
      var res = response.data;

      console.log(res);
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
    });
  }
});


var app = angular.module('ExamMania');

app.controller('setsController', function($scope, $http) {
  $scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);

    $http.post("/questionfileupload", fd, {
      withCredentials: true,
      headers: {'Content-Type': undefined },
      transformRequest: angular.identity
    }).then(function mySuccess(response) {
      var res = response.data;
      console.log(res);
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
    });
  }
});

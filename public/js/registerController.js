
var app = angular.module('ExamMania');

app.controller('registerController', function($scope, $http) {
  $scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);

    $http.post("/fileupload", fd, {
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

  $scope.register = function(){
    var user = {
      username: $scope.user.username,
      password: $scope.user.password
    }
    $http({
      method : "POST",
      url : "/register",
      data : user
    }).then(function mySuccess(response) {
      var res = response.data;
      console.log(res);
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
    });
  }
});
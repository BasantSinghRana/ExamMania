
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
      myFunction(res);
    }, function myError(response) {
      myFunction("Something went wrong!");
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
      myFunction(res);
    }, function myError(response) {
      myFunction("Something went wrong!");
    });
  }

  function myFunction(text) {
    var x = document.getElementById("snackbar");
    x.innerHTML = text;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000)
  }
});

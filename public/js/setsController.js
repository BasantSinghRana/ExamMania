
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
      myFunction(res);
    }, function myError(response) {
      myFunction("Something went wrong!")
    });
  }

  function myFunction(text) {
    var x = document.getElementById("snackbar");
    x.innerHTML = text;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000)
  }
});

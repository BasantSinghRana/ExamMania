
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

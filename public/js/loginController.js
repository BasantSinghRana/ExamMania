
var app = angular.module('ExamMania');

app.controller('loginController', function($scope, $http, $location, $rootScope) {
    window.onbeforeunload = function() { return "Your work will be lost."; };

    $scope.login = function(){
      if(!$scope.user || (!$scope.user.username || !$scope.user.password)){
        myFunction("Incorrect details. Please try again");
        return;
      }
      var user = {
        username: $scope.user.username,
        password: $scope.user.password
      }
      $http({
        method : "POST",
        url : "/login",
        data : user
      }).then(function mySuccess(response) {
        var res = response.data;
        if(res.user_type === "admin"){
          console.log("hi");
          $location.path('/admin');
        }
        else if(res.user_type === "user"){
          $rootScope.user = user;
          $location.path('/user');
        }
        else{
          myFunction("User not found. Please try again");
        }
      }, function myError(response) {
        myFunction("Something went wrong!")
      });
    }

    function myFunction(text) {
      var x = document.getElementById("snackbar");
      x.innerHTML = text;
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", "") }, 3000)
    }
});

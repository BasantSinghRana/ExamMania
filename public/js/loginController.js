
var app = angular.module('ExamMania');

app.controller('loginController', function($scope, $http, $location) {
    $scope.login = function(){
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
          $location.path('/user');
        }
        else{
          alert("User not found. Please try again")
        }
      }, function myError(response) {
        $scope.myWelcome = response.statusText;
        alert("Something went wrong!")
      });
    }
});


var app = angular.module('ExamMania');

app.controller('userController', function($scope, $rootScope, $http) {
   var user = $rootScope.user;
   $http({
     method : "POST",
     url : "/user",
     data : user
   }).then(function mySuccess(response) {
     var res = response.data;
     console.log("response", res);
     $scope.questions = res;
   }, function myError(response) {
     myFunction("Something went wrong!")
   });

   $scope.submit = function(){
     console.log("answers", $scope.questions);
   }

   function myFunction(text) {
     var x = document.getElementById("snackbar");
     x.innerHTML = text;
     x.className = "show";
     setTimeout(function(){ x.className = x.className.replace("show", "") }, 3000)
   }

});

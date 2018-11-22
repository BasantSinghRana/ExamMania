
var app = angular.module('ExamMania');

app.controller('userController', function($scope, $rootScope, $http, $cookies, $location) {

   if($cookies.get("testTaken")){
     $cookies.remove("testTaken")
     $location.path('/login');
     myFunction("Please login again to continue.");
   }
   var user = $rootScope.user;
   var score = 0;
   $scope.ques_index = 0;
   $scope.previousDisabled = true;
   $scope.nextDisabled = false;
   $scope.submitDisabled = true;
   $scope.isques = true;
   $scope.isans = false;
   $scope.noexam = false;
   $http({
     method : "POST",
     url : "/user",
     data : user
   }).then(function mySuccess(response) {
     var res = response.data;
     console.log("response", res);
     if(res.length == 0){
       $scope.isques = false;
       $scope.noexam = true;
     }
     else{
       $scope.questions = res;
     }
   }, function myError(response) {
     myFunction("Something went wrong!")
   });

   $scope.submit = function(){
     console.log("answers", $scope.questions);
     for(var i=0; i<$scope.questions.length; i++){
       var ans = $scope.questions[i];
       if(ans["Answer"] === ans["isSelected"]){
         score = score + 1;
       }
     }
     $scope.score = parseFloat(score * 100.0 / $scope.questions.length).toFixed(2);
     console.log("Congrats " + score + " out of " + $scope.questions.length + " answers are correct ");
     myFunction("Congrats " + score + " out of " + $scope.questions.length + " answers are correct ");
     $scope.isques = false;
     $scope.isans = true;
     $cookies.put("testTaken", true);
   }

   $scope.next = function() {
     // console.log($scope.ques_index);
     $scope.previousDisabled = false;
     $scope.ques_index = $scope.ques_index + 1;
     if ($scope.ques_index == ($scope.questions.length-1)) {
         $scope.nextDisabled = true;
         $scope.submitDisabled = false;
         return;
     }
    };

    $scope.prev = function() {
      // console.log($scope.ques_index);
      $scope.nextDisabled = false;
      $scope.ques_index --;
      if ($scope.ques_index == 0) {
        $scope.previousDisabled = true;
        $scope.submitDisabled = true;
        return;
      }
    };

   function myFunction(text) {
     var x = document.getElementById("snackbar");
     x.innerHTML = text;
     x.className = "show";
     setTimeout(function(){ x.className = x.className.replace("show", "") }, 3000)
   }

});

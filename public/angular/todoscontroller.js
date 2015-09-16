// console.log("hello world from the todoscontroller.js file to the console")
var todoApp = angular.module('todoApp', []);

todoApp.controller('todosController', ['$scope', '$http', function ($scope, $http){
  $scope.name = ""
  $scope.anotherName = "another name here"
}])
// console.log("hello world from the todoscontroller.js file to the console")
var todoApp = angular.module('todoApp', []);

todoApp.controller('todosController', ['$scope', '$http', function ($scope, $http){
  
  $scope.todos = [{name: "clean house"}, {name: "do laundry"},{name: "attend Javascript meetup"}]

}])
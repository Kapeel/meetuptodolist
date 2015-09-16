// console.log("hello world from the todoscontroller.js file to the console")
var todoApp = angular.module('todoApp', []);

todoApp.controller('todosController', ['$scope', '$http', function ($scope, $http){
  $http.get('/todos').success(function(response){
    $scope.todos = response
  })
  // ADD TODO 
  $scope.addTodo = function(){
    $http.post('/todo', $scope.todo).success(function(response){
      $scope.todos.push(response);
      $scope.todo.name = '';
    });
  };
  
}])
angular.module('zikaApp').controller('AuthController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
    $scope.teste = "teste"
    $scope.user = {}

    $scope.sign_in = function(){
      AuthService.sign_in($scope.user)
      console.log("Foi")
    }

    $scope.sign_up = function(){
      console.log("a")
      console.log($scope.user)
      AuthService.sign_up($scope.user)
    }

    $scope.goToRegister = function() {
      console.log("aqui")
       $location.path('/register');
    }



}]);

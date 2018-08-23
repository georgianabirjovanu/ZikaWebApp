angular.module('zikaApp').controller('AuthController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.teste = "teste"
    $scope.user = {}

    $scope.sign_in = function(){
      AuthService.sign_in($scope.user)
      console.log("Foi")

    }



}]);

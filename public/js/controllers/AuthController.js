angular.module('zikaApp').controller('AuthController', ['$scope', '$rootScope', '$location', 'AuthService', '$cookies', function($scope, $rootScope, $location, AuthService, $cookies) {
    $scope.teste = "teste"
    $scope.user = {}

    $scope.sign_in = function(){
      AuthService.sign_in($scope.user).then(function(data){
        $cookies.put('user', data.data);
        $rootScope.user = data.data;
        $location.path('/dashboard');
      })
    }

    if ($rootScope.user || $cookies.get('user')){
      $location.path('/dashboard');
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

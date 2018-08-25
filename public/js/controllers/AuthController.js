angular.module('zikaApp').controller('AuthController', ['$scope', '$rootScope', '$location', 'AuthService', '$cookies', function($scope, $rootScope, $location, AuthService, $cookies) {
    $scope.teste = "teste"
    $scope.user = {}

    $scope.sign_in = function(){
      AuthService.sign_in($scope.user).then(function(data){
        $cookies.putObject('user', data.data);
        $rootScope.user_info = data.data;
        $location.path('/dashboard');
      })
    }

    if ($rootScope.user || $cookies.get('user')){
      $location.path('/dashboard');
    }

    $scope.sign_up = function(){
      AuthService.sign_up($scope.user)
    }

    $scope.goToRegister = function() {
       $location.path('/register');
    }



}]);

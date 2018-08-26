angular.module('zikaApp').controller('MainController', ['$scope','$location','$mdSidenav', '$cookies', '$rootScope', '$mdToast', function($scope, $location, $mdSidenav, $cookies, $rootScope, $mdToast) {

  var toast_position = ['top', 'right'];

  $scope.toast_position = toast_position.join(' ');

  $scope.couldNotLoginToast = function() {
    var pinTo = $scope.toast_position;

    $mdToast.show(
      $mdToast.simple()
        .textContent('Não foi possível fazer login! E-mail e/ou senha incorretos')
        .position(pinTo )
        .hideDelay(3000)
    );
  };


  if (!$rootScope.user_info){
    $rootScope.user_info = $cookies.getObject('user');
  }


  $scope.taglinee = 'Nothing beats a pocket protector!';
  $scope.toggleLeft = buildToggler('left');

   function buildToggler(componentId) {
     return function() {
       $mdSidenav(componentId).toggle();
     };
   }

   $scope.sign_off = function() {
     $cookies.remove('user');
     $rootScope.user_info = null;
     $location.path('/');
   }

   $scope.isLogged = function() {
     return !!$rootScope.user_info;
   }

   $scope.gotoProperties = function(){
     $location.path('properties');
   }

   $scope.gotoDashboard = function(){
     $location.path('dashboard');
   }



}]);

angular.module('zikaApp').controller('MainController', ['$scope','$location','$mdSidenav', '$cookies', '$rootScope', function($scope, $location, $mdSidenav, $cookies, $rootScope) {

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




}]);

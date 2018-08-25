angular.module('zikaApp').controller('DashboardController', ['$scope','$rootScope', function($scope, $rootScope, $mdSidenav) {
  console.log($rootScope.user_info);


    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

}]);

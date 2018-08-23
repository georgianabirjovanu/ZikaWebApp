angular.module('zikaApp').controller('DashboardController', ['$scope','$rootScope', function($scope, $rootScope) {
  console.log($rootScope.user_info);

    $scope.tagline = 'Nothing beats a pocket protector!';

}]);

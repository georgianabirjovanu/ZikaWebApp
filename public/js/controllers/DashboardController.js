angular.module('zikaApp').controller('DashboardController', ['$scope','$rootScope', function($scope, $rootScope, $mdSidenav) {
  $scope.circle_progress = {}
  $scope.circle_progress.labels = ["Finalizadas", "Restante", "Fechadas"];
  $scope.circle_progress.data = [300, 500, 100];

  $scope.progresso_comparativo = {}
  $scope.progresso_comparativo.labels = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
  $scope.progresso_comparativo.series = ['Series A', 'Series B'];
  $scope.progresso_comparativo.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
 $scope.onClick = function (points, evt) {
   console.log(points, evt);
 };

 $scope.progresso_individual_comparativo = {};

 $scope.progresso_individual_comparativo.labels = ['João', 'Maria', 'Josefa', 'Claudia', 'Marcia', 'Klebia', 'Gabriel'];
    $scope.progresso_individual_comparativo.series = ['Series A', 'Series B'];

    $scope.progresso_individual_comparativo.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];


    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

}]);

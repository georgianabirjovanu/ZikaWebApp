angular.module('zikaApp').controller('PropertyController', ['$scope', '$rootScope', '$location', 'ActivityService', '$mdDialog', function($scope, $rootScope, $location, ActivityService, $mdDialog) {
    $scope.property = {}

    $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/add-property.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      let activity = {
        address: answer[0],
        latitude: answer[1],
        longitude: answer[2]
      }
      ActivityService.addActivity(activity, $rootScope.user_info.token);
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

  $scope.addProperty = function() {

  }

  $scope.people = [
    {
      name: 'Joao',
      img: 'https://d3ujk8tqtsey8o.cloudfront.net/imagens_face/small_shutterstock_140713168.jpg',
      selected: false
    },
    {
      name: 'Maria',
      img: 'https://d3ujk8tqtsey8o.cloudfront.net/imagens_face/small_shutterstock_140713168.jpg',
      selected: true
    },
    {
      name: 'Klebia',
      img: 'https://d3ujk8tqtsey8o.cloudfront.net/imagens_face/small_shutterstock_140713168.jpg',
      selected: false
    },
    {
      name: 'Veruska',
      img: 'https://d3ujk8tqtsey8o.cloudfront.net/imagens_face/small_shutterstock_140713168.jpg',
      selected: false
    },
    {
      name: 'Josefa',
      img: 'https://d3ujk8tqtsey8o.cloudfront.net/imagens_face/small_shutterstock_140713168.jpg',
      selected: false
    }
  ]

}]);

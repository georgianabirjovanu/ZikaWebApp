// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $location) {

    $scope.tagline = 'To the moon and back!';

    $scope.goToRegister = function() {
       $location.path('/register');
    }

});

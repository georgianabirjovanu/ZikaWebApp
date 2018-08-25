angular.module('zikaApp', ['ngRoute', 'appRoutes', 'ngMaterial', 'ngMessages', 'ngCookies']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue');
});

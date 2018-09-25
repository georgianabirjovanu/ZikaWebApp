angular.module('zikaApp').controller('PropertyController', ['$scope', '$rootScope', '$location', 'ActivityService', '$mdDialog', '$mdPanel', '$q', '$timeout', function($scope, $rootScope, $location, ActivityService, $mdDialog, $mdPanel, $q, $timeout) {
    $scope.property = {}

    ActivityService.getActivities($rootScope.user_info.token).then((result)=> console.log(result))

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

  $scope.showAddAgent = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/add-agent.html',
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

  // list of `state` value/display objects
   $scope.states        = loadAll();
   $scope.selectedItem  = null;
   $scope.searchText    = "";

   // ******************************
   // Internal methods
   // ******************************

   /**
    * Search for states... use $timeout to simulate
    * remote dataservice call.
    */
   this.querySearch = function(query) {
     var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results );}, Math.random() * 1000, false);
      return deferred.promise;
   }

   /**
    * Build `states` list of key/value pairs
    */
   function loadAll() {
     var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
             Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
             Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
             Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
             North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
             South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
             Wisconsin, Wyoming';

     return allStates.split(/, +/g).map( function (state) {
       return {
         value: state.toLowerCase(),
         display: state
       };
     });
   }

   /**
    * Create filter function for a query string
    */
   function createFilterFor(query) {
     var lowercaseQuery = query.toLowerCase();

     return function filterFn(state) {
       return (state.value.indexOf(lowercaseQuery) === 0);
     };

   }


}]);

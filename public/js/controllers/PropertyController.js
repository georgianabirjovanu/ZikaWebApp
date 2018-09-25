angular.module('zikaApp').controller('PropertyController', ['$scope', '$rootScope', '$location', 'ActivityService', '$mdDialog', '$mdPanel', '$q', '$timeout', 'UserService', '$rootScope',function($scope, $rootScope, $location, ActivityService, $mdDialog, $mdPanel, $q, $timeout, UserService, $rootScope) {
    $scope.property = {}

    ActivityService.getActivities($rootScope.user_info.token).then(
      function(result){
        $scope.proprieties = result
      })

    $scope.selectProperty = function(property){
       $rootScope.current_property = property
     }

    $scope.assignUser = function(){
      ActivityService.assignUser($scope.selectedItem.value,$rootScope.current_property.address,$rootScope.user_info.token).then((result) => console.log(result))
    }

    $scope.getAgent = function(id){
      var agents = $scope.agents.filter((agent)=> agent._id.toString() == id.toString())
      if (agents.length > 0)
        return agents[0]
      else
        return {}
    }

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

  $scope.showEdit = function(ev) {
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'views/edit-property.html',
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
   $scope.allAgents        = []
   loadAll()
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
     var results = query ? $scope.allAgents.filter( createFilterFor(query) ) : $scope.allAgents;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results );}, Math.random() * 1000, false);
      return deferred.promise;
   }

   /**
    * Build `states` list of key/value pairs
    */
   function loadAll() {
     UserService.getUsers($rootScope.user_info.token).then(function(result){
       $scope.agents = result
       $scope.allAgents =  $scope.agents.map(function(agent){
         return {
           value: agent.email,
           display: agent.fullName
         }
       })
     })
   }

   /**
    * Create filter function for a query string
    */
   function createFilterFor(query) {
     var lowercaseQuery = query.toLowerCase();
     return function filterFn(state) {
       return (state.display.toLowerCase().indexOf(lowercaseQuery) === 0);
     };

   }

   $scope.formatDate = function (date) {
      return moment(date).format('DD/MM/YYYY')
    };


}]);

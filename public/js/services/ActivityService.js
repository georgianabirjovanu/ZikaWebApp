var zika = angular.module('zikaApp');

zika.service('ActivityService', ['$q', '$http', function ($q, $http) {

    var user = {status: false};

    // return available functions for use in the controllers
    return ({
        addActivity: addActivity,
        assignUser: assignUser,
        getActivities: getActivities
    });

    function addActivity(activity, token) {
      activity = {activity: activity}
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: API_URL + '/addActivity',
          headers: { 'Authorization': "Bearer " + token , 'Content-Type': 'application/json'},
          data: activity
        }
        $http(req)
            .then(function (data) {
                if (data.status === 200) {
                    deferred.resolve(data);
                } else {
                    deferred.reject();
                }
            })
            .catch(function (error) {
                deferred.reject(error.data);
            });

        return deferred.promise;
    }

    function assignUser(email, address) {
      var body = {
        email: email,
        address: address
      }
      
      var req = {
        method: 'POST',
        url: API_URL + '/assignActivity',
        headers: { 'Authorization': "Bearer " + token , 'Content-Type': 'application/json'},
        data: body
      }
      var deferred = $q.defer();

      $http(req)
          .then(function (data) {
              if (data.status === 200) {
                  deferred.resolve(data);
              } else {
                  deferred.reject();
              }
          })
          .catch(function (error) {
              deferred.reject(error.data);
          });

      return deferred.promise;
    }

    function getActivitiesForUser(token) {
        // create a new instance of deferred
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: API_URL + '/getActivities',
          headers: { 'Authorization': "Bearer " + token , 'Content-Type': 'application/json'}
        }
        $http(req)
            .then(function (data) {
                if (data.status === 200) {
                    deferred.resolve();
                    user = {status: false};
                } else {
                    deferred.reject();
                }
            })
            .catch(function (error) {
                deferred.reject(error.data);
            });

        return deferred.promise;
    }

    function getActivities(token) {
        // create a new instance of deferred
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: API_URL + '/activity',
          headers: { 'Authorization': "Bearer " + token , 'Content-Type': 'application/json'}
        }
        $http(req)
            .then(function (data) {
                if (data.status === 200) {
                    deferred.resolve(data.data);
                    user = {status: false};
                } else {
                    deferred.reject();
                }
            })
            .catch(function (error) {
                deferred.reject(error.data);
            });

        return deferred.promise;
    }
}]);

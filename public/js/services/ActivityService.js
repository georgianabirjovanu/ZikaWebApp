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
      console.log(activity, token)
      activity = {activity: activity}
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: 'https://zikaapp.herokuapp.com/addActivity',
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

    function assignUser(activityID) {
        // create a new instance of deferred
        var deferred = $q.defer();

        $http.post('https://zikaapp.herokuapp.com/assignActivity', user)
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

    function getActivities() {
        // create a new instance of deferred
        var deferred = $q.defer();

        $http.get('https://zikaapp.herokuapp.com/getActivities')
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
}]);

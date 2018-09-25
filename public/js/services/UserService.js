var zika = angular.module('zikaApp');

zika.service('UserService', ['$q', '$http', function ($q, $http) {

    var user = {status: false};

    // return available functions for use in the controllers
    return ({
        getUsers: getUsers
    });

    function getUsers(token) {
        // create a new instance of deferred
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: API_URL + '/user',
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

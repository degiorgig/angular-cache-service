'use strict';

angular
    .module('myApp')
    .factory("userService", userService);

userService.$inject = ["$http", "$q", "$log"];

function userService($http, $q, $log) {
    var deferred = $q.defer();
    var promise = null;
    var cachedUser = null;
    return {
        getUserInfo: function () {
            if (promise) {
                $log.info("cached value: " + cachedUser);
                deferred.resolve(cachedUser);
                return (cachedUser) ? deferred.promise : promise;
            }
            else {
                $log.info("initial request");
                promise = $http.get("http://swapi.co/api/people/1/").then(function (response) {
                    return cachedUser = response.data.name;
                });
                return promise;
            }
        }
    }
}

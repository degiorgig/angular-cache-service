'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'myApp.view1',
        'myApp.view2'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])


    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push(function ($timeout) {
            return {
                "response": function (response) {
                    return $timeout(function () {
                        return response;
                    }, 500);
                }
            };
        });
    }]);


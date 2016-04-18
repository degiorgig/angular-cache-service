'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'vc'
        });
    }])

    .controller('View1Ctrl', function (userService) {
        var vm = this;
        userService.getUserInfo().then(function (result) {
            vm.name = result
        }, function (err) {
            vm.name = err
        });
    });
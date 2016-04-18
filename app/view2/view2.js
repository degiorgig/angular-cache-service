'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'vc2'
        });
    }])

    .controller('View2Ctrl', function (userService) {
        var vm = this;
        userService.getUserInfo().then(function (result) {
            vm.name = result
        }, function (err) {
            vm.name = err
        });
    });
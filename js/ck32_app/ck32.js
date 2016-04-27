var ck32 = angular
    .module('ck32', ['ngRoute', 'ui.bootstrap']);

ck32.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'snipets/dashboard/index.html',
        })
        .when('/theme', {
            templateUrl: 'snipets/themes/theme.html',
        });
});

ck32.controller('BasicCtrl', function DemoCtrl($scope) {


});

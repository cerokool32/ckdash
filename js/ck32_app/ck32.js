var ck32 = angular
    .module('ck32', ['ngRoute', 'ngMaterial', 'ck32Theme']);

ck32.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'snipets/dashboard/index.html',
        })
        .when('/theme', {
            templateUrl: 'snipets/themes/theme.html',
        });
});

ck32.controller('BasicCtrl', function DemoCtrl($scope, $mdDialog, $mdSidenav) {

    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle();
    };

    $scope.action = function (name, ev) {
        $mdDialog.show($mdDialog.alert()
            .title(name)
            .textContent('You triggered the "' + name + '" action')
            .ok('Great')
            .targetEvent(ev)
        );
    };
});

var ck32 = angular
    .module('ck32', ['ngRoute', 'ck32_sidenav', 'ngAnimate', 'treasure-overlay-spinner']);

ck32.run(run);
run.$inject = ['$rootScope'];

function run($rootScope) {
    $rootScope.spinner = {
        active: false,
        on: function () {
            this.active = true;
        },
        off: function () {
            this.active = false;
        }
    };
};

ck32.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'snipets/dashboard/index.html',
        })
        .when('/theme', {
            templateUrl: 'snipets/themes/theme.html',
        });
});

ck32.controller('BasicCtrl', function DemoCtrl($scope, $aside) {});

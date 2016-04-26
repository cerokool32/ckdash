(function () {

    var app = angular.module('ck32Theme', ['ngMaterial']);

    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('soft')
            .primaryPalette('light-blue')
            .accentPalette('purple')
            .warnPalette('pink')
            .backgroundPalette('grey');
        $mdThemingProvider.theme('normal')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .warnPalette('red')
            .backgroundPalette('blue-grey');
        $mdThemingProvider.alwaysWatchTheme(true);
    });


    app.controller('ck32ThemeController', ['$scope', function ($scope) {
        $scope.dynamicTheme = 'soft';

}]);

    /*
    app.controller('ck32ThemeController', ['$scope', '$mdThemingProvider', function ($scope, $mdThemingProvider) {


        $scope.changeTheme = function (theme) {
            $mdThemingProvider.setDefaultTheme(theme);
            $scope.theme = theme;
        }

    }]);
    */
})();

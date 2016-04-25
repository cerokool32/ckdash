angular
    .module('ck32', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
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
    })
    .controller('DemoBasicCtrl', function DemoCtrl($mdDialog) {

        this.action = function (name, ev) {
            $mdDialog.show($mdDialog.alert()
                .title(name)
                .textContent('You triggered the "' + name + '" action')
                .ok('Great')
                .targetEvent(ev)
            );
        };
    });

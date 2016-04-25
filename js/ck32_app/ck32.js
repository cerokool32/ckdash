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
    .config(function ($mdIconProvider) {
        $mdIconProvider
            .iconSet('action', 'img/iconsets/action-icons.svg', 24)
            .iconSet('alert', 'img/iconsets/alert-icons.svg', 24)
            .iconSet('av', '.img/iconsets/av-icons.svg', 24)
            .iconSet('communication', 'img/iconsets/communication-icons.svg', 24)
            .iconSet('content', 'img/iconsets/content-icons.svg', 24)
            .iconSet('device', 'img/iconsets/device-icons.svg', 24)
            .iconSet('editor', 'img/iconsets/editor-icons.svg', 24)
            .iconSet('file', 'img/iconsets/file-icons.svg', 24)
            .iconSet('hardware', 'img/iconsets/hardware-icons.svg', 24)
            .iconSet('icons', 'img/iconsets/icons-icons.svg', 24)
            .iconSet('image', 'img/iconsets/image-icons.svg', 24)
            .iconSet('maps', 'img/iconsets/maps-icons.svg', 24)
            .iconSet('navigation', 'img/iconsets/navigation-icons.svg', 24)
            .iconSet('notification', 'img/iconsets/notification-icons.svg', 24)
            .iconSet('social', 'img/iconsets/social-icons.svg', 24)
            .iconSet('toggle', 'img/iconsets/toggle-icons.svg', 24)
    })
    .filter('keyboardShortcut', function ($window) {
        return function (str) {
            if (!str) return;
            var keys = str.split('-');
            var isOSX = /Mac OS X/.test($window.navigator.userAgent);
            var seperator = (!isOSX || keys.length > 2) ? '+' : '';
            var abbreviations = {
                M: isOSX ? '⌘' : 'Ctrl',
                A: isOSX ? 'Option' : 'Alt',
                S: 'Shift'
            };
            return keys.map(function (key, index) {
                var last = index == keys.length - 1;
                return last ? key : abbreviations[key];
            }).join(seperator);
        };
    })
    .controller('DemoBasicCtrl', function DemoCtrl($mdDialog) {
        this.settings = {
            printLayout: true,
            showRuler: true,
            showSpellingSuggestions: true,
            presentationMode: 'edit'
        };
        this.sampleAction = function (name, ev) {
            $mdDialog.show($mdDialog.alert()
                .title(name)
                .textContent('You triggered the "' + name + '" action')
                .ok('Great')
                .targetEvent(ev)
            );
        };
    });

var ck32 = angular
    .module('ck32', ['ngRoute', 'ngMaterial', 'ck32Theme', 'sasrio.angular-material-sidenav']);

ck32.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'snipets/dashboard/index.html',
        })
        .when('/theme', {
            templateUrl: 'snipets/themes/theme.html',
        });
});

ck32.config(function (ssSideNavSectionsProvider) {
    ssSideNavSectionsProvider.initWithSections([
        {
            name: 'section heading 1',
            type: 'heading',
            childre: [{
                name: 'toggle 1',
                type: 'toggle',
                pages: [{
                        name: 'item1',
                        state: 'common.toogle1.item1'
                },
                    {
                        name: 'item2',
                        state: 'common.toggle2.item2'
                }]
            }]
        },
        {
            name: 'Simple link to index state',
            state: 'common.index',
            type: 'link'
        }

    ]);
});

ck32.controller('BasicCtrl', function DemoCtrl($scope, $mdDialog, $mdSidenav, ssSideNav) {

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

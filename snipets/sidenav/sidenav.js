(function () {
    var app = angular.module('ck32_sidenav', ['ui.bootstrap', 'ngAside']);

    app.controller('sidenavController', ['$scope', '$aside', function ($scope, $aside) {
        $scope.asideState = {
            open: false
        };

        $scope.openAside = function (position, backdrop) {
            $scope.asideState = {
                open: true,
                position: position
            };

            function postClose() {
                $scope.asideState.open = false;
            }

            $aside.open({
                templateUrl: 'snipets/sidenav/sidenav.html',
                placement: position,
                size: 'sm',
                backdrop: backdrop,
                controller: function ($scope, $uibModalInstance) {
                    $scope.ok = function (e) {
                        $uibModalInstance.close();
                        e.stopPropagation();
                    };
                    $scope.cancel = function (e) {
                        $uibModalInstance.dismiss();
                        e.stopPropagation();
                    };
                }
            }).result.then(postClose, postClose);
        }
    }]);
})();

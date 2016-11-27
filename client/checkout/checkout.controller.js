angular.module('curryBhariApp')
    .controller("checkoutController", ['$scope', '$http', '$q', '$auth', 'UserService', function(
        $scope,
        $http, $q, $auth, UserService) {
        $scope.user = UserService.user;

        $scope.authenticate = function(provider) {
            UserService.authenticate(provider);
            $scope.user = UserService.user;
        };
    }]);

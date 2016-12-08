angular.module('curryBhariApp')
    .controller("checkoutController", ['$scope', '$http', '$q', '$auth', 'UserService','$state', function(
        $scope,
        $http, $q, $auth, UserService, $state) {
        $scope.user = UserService.user;

        $scope.authenticate = function(provider) {
            UserService.authenticate(provider);
            $scope.user = UserService.user;
        };

        $scope.confirmOrder = function() {
            $state.go('payment');
        }
    }]);

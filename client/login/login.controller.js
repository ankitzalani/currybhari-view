angular.module('curryBhariApp')
    .controller("loginController", ['$scope', '$http', '$q', 'UserService','$state', function(
        $scope,
        $http, $q, UserService, $state) {
        $scope.login = function() {
            UserService.login().then(function(data) {
                $state.go('checkout');
            });
        }
    }]);

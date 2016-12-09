angular.module('curryBhariApp')
    .controller("loginController", ['$scope', '$http', '$q', 'UserService', '$state', function(
        $scope,
        $http, $q, UserService, $state) {

        $scope.error = "";
        $scope.user = {
            username: "",
            email: "",
            password: "",
            mobile: ""
        };

        $scope.login = function() {
            UserService.login().then(function(promise) {
                $state.go('checkout');
            });
        }

        $scope.register = function() {
            if ($scope.user.username.trim().length > 0 &&
                $scope.user.password.trim().length > 0 &&
                $scope.user.email.trim().length > 0 &&
                $scope.user.email.trim().length > 0) {
                UserService.register($scope.user).then(function(promise) {
                    $state.go("checkout");
                });
            } else {
                $scope.error = "Please enter all values to login.";
            }

        }
    }]);

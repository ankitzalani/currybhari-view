angular.module('curryBhariApp')
    .controller("loginController", ['$scope', '$rootScope', '$http', '$q', 'UserService', '$state', function(
        $scope, $rootScope,
        $http, $q, UserService, $state) {

        $scope.error = "";
        $scope.user = {
            username: "",
            email: "",
            password: "",
            mobile: ""
        };

        $scope.login = {
            username: "",
            password: ""
        }

        $scope.login = function() {
            if ($scope.login.username.trim().length > 0 &&
                $scope.login.password.trim().length > 0) {
                UserService.login($scope.login).then(function(promise) {
                    if (promise.data.error && promise.data.error.length) {
                        $scope.error = promise.data.error;
                    } else {
                        $scope.stateTransition();
                    }
                });
            } else {
                $scope.error = "Invalid credentials";
            }
        }

        $scope.stateTransition = function() {
            if ($rootScope.previousState.name === 'cart') {
                $state.go('checkout');
            } else if ($rootScope.previousState.name === '') {
                $state.go('container');
            } else {
                $state.go($rootScope.previousState.name);
            }
        }

        $scope.register = function() {
            if ($scope.user.username.trim().length > 0 &&
                $scope.user.password.trim().length > 0 &&
                $scope.user.email.trim().length > 0 &&
                $scope.user.mobile.trim().length > 0) {
                  
                UserService.register($scope.user).then(function(promise) {
                    if (promise.data.error && promise.data.error.length) {
                        $scope.error = promise.data.error;
                    } else {
                        $scope.stateTransition();
                    }
                });
            } else {
                $scope.error = "Please enter all values to login.";
            }
        }
    }]);

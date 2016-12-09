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
                        $state.go('checkout');
                    }
                });
          } else {
              $scope.error = "Invalid credentials";
          }
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

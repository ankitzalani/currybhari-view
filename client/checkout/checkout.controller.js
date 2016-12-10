angular.module('curryBhariApp')
    .controller("checkoutController", ['$scope', '$http', '$q', '$auth', 'UserService', '$state', function(
        $scope,
        $http, $q, $auth, UserService, $state) {
        $scope.user = UserService.user;
        $scope.error;

        $scope.address = {
            address: '',
            city: '',
            postCode: '',
            country: '',
            region: ''
        };

        $scope.addAddress = function() {
            var controller = this;
            UserService.addAddress($scope.address).then(function(promise) {
                if(promise.data.success) {
                    $state.go('payment');
                } else {
                    controller.error = promise.data.error;
                }
            });
        }

        $scope.authenticate = function(provider) {
            UserService.authenticate(provider);
            $scope.user = UserService.user;
        };

        $scope.confirmOrder = function() {
            UserService.addAddress($scope.address).then(function(promise) {
                if (!promise.data.error) {
                    $state.go('payment');
                }
            });
        }
    }]);

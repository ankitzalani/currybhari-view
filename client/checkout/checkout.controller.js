angular.module('curryBhariApp')
    .controller("checkoutController", ['$scope', '$http', '$q', '$auth', 'UserService', '$state', 'PinCodeService', function(
        $scope,
        $http, $q, $auth, UserService, $state, PinCodeService) {
        $scope.user = UserService.user;
        $scope.error;

        $scope.countryList = ['India'];
        $scope.regionList = ['Karnataka'];
        $scope.cityList = ['Bangalore'];
        $scope.pinCodesList = [];

        $scope.address = {
            address: '',
            city: '',
            postCode: '',
            country: '',
            region: ''
        };

        if(UserService.user && UserService.user.addresses) {
            $scope.address = UserService.user.addresses[0];
        }

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

        $scope.getPinCodes = function() {
            var controller = this;
            PinCodeService.getPinCodes().then(function(promise) {
                controller.pinCodesList = JSON.parse(promise.data);
            });
        }

        $scope.getPinCodes();
    }]);

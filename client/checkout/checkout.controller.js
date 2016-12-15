angular.module('curryBhariApp')
    .controller("checkoutController", ['$scope', '$http', '$q', '$auth', 'UserService', '$state', 'PostCodeService', function(
        $scope,
        $http, $q, $auth, UserService, $state, postCodeService) {
        $scope.user = UserService.user;
        $scope.error;

        $scope.countryList = ['India'];
        $scope.regionList = ['Karnataka'];
        $scope.cityList = ['Bangalore'];
        $scope.postCodesList = [];
        $scope.location = '';

        $scope.address = {
            address: '',
            city: '',
            postCode: '',
            country: '',
            region: ''
        };

        if (UserService.user && UserService.user.addresses) {
            $scope.address = UserService.user.addresses[0];
        }

        $scope.addAddress = function() {
            var controller = this;
            UserService.addAddress($scope.address).then(function(promise) {
                if (promise.data.success) {
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

        $scope.$watch('address.postCode', function(event, value) {
            if (value) {
                $scope.location = value.Location;
            }
        });

        $scope.getpostCodes = function() {
            var controller = this;
            postCodeService.getpostCodes().then(function(promise) {
                controller.postCodesList = JSON.parse(promise.data);
                controller.address.postCode = controller.postCodesList[0].postCode;
            });
        }

        $scope.getpostCodes();
    }]);

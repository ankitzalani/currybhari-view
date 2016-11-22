angular.module('curryBhariApp')
    .controller("checkoutController", ['$scope', '$http', '$q','$auth', function(
        $scope,
        $http, $q, $auth) {
        $scope.login = function() {
            $("#loginDialogue").dialog();
        };

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    }]);

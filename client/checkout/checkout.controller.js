angular.module('curryBhariApp')
    .controller("checkoutController", ['$scope', '$http', '$q','$auth', function(
        $scope,
        $http, $q, $auth) {

        $scope.user = {};

        $scope.login = function() {
            $("#loginDialogue").dialog();
        };

        $scope.authenticate = function(provider) {
            var authPromise = $auth.authenticate(provider);

            authPromise.then(function(res) {
                console.log(res.data);
                $scope.user = res.data.user;
            });
        };
    }]);

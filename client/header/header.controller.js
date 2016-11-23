angular.module('curryBhariApp')
    .controller("headerController", ['$scope', '$http', '$q', '$auth', function(
        $scope,
        $http, $q, $auth) {

        $scope.user = {};

        $scope.showLoginDialogue = function() {
            $("#loginDialogue").dialog();
        }

        $scope.authenticate = function(provider) {
            var authPromise = $auth.authenticate(provider);

            authPromise.then(function(res) {
                $("#loginDialogue").dialog('close');
                $scope.user = res.data.user;
            });
        };
    }]);

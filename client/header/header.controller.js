angular.module('curryBhariApp')
    .controller("headerController", ['$scope', '$http', '$q', '$auth', 'UserService', function(
        $scope,
        $http, $q, $auth, UserService) {

        $scope.userService = UserService;

        $scope.showLoginDialogue = function() {
            $("#loginDialogue").dialog();
        }

        $scope.authenticate = function(provider) {
            $("#loginDialogue").dialog('close');
            UserService.authenticate(provider);
        };

        $scope.logout = function() {
            UserService.logout();
        }
    }]);

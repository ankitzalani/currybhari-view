angular.module('curryBhariApp')
    .controller("headerController", ['$scope', '$http', '$q', '$auth', 'UserService', 'Products', function(
        $scope,
        $http, $q, $auth, UserService, Products) {

        $scope.userService = UserService;

        $scope.searchText = '';

        $scope.showLoginDialogue = function() {
            $("#loginDialogue").dialog();
        }

        $scope.authenticate = function(provider) {
            $("#loginDialogue").dialog('close');
            UserService.authenticate(provider);
        }

        $scope.logout = function() {
            UserService.logout();
        }

        $scope.search = function() {
            Products.filter($scope.searchText);
        }
    }]);

angular.module('curryBhariApp')
    .controller("headerController", ['$scope', '$http', '$q', '$auth', 'UserService', 'Products', '$state', function(
        $scope,
        $http, $q, $auth, UserService, Products, $state) {

        $scope.userService = UserService;

        $scope.searchText = '';

        $scope.showLoginDialogue = function() {
            $("#loginDialogue").dialog();
        }

        $scope.authenticate = function(provider) {
            $("#loginDialogue").dialog('close');
            UserService.authenticate(provider);
        }

        $scope.closePopup = function() {
            $("#loginDialogue").dialog('close');
        }

        $scope.logout = function() {
            UserService.logout();
        }

        $scope.search = function() {
            Products.filter($scope.searchText);
        }

        $scope.navigateToContainer = function() {
            $state.go('container', {});
        }
    }]);

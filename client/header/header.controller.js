angular.module('curryBhariApp')
    .controller("headerController", ['$scope', '$http', '$q', '$auth', 'UserService', 'Products', '$state', '$rootScope', function(
        $scope,
        $http, $q, $auth, UserService, Products, $state, $rootScope) {

          $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
              $rootScope.previousState = from;
          });

        $scope.userService = UserService;

        $scope.searchText = '';

        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from;
        });

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
            $state.go('container');
        }

        $scope.search = function() {
            $state.go('container',{q:$scope.searchText});
        }

        $scope.navigateToContainer = function() {
            $state.go('container', {});
        }
    }]);

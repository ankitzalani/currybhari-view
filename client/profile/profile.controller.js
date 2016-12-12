angular.module('curryBhariApp')
    .controller("profileController", ['$scope', '$http', '$q','UserService','$state', function(
        $scope,
        $http, $q, UserService, $state) {
          $scope.user = UserService.user;
          if(!$scope.user) {
              $state.go('container')
          }

    }]);

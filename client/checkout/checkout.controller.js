angular.module('curryBhariApp')
  .controller("checkoutController", ['$scope', '$http', '$q', function(
  $scope,
  $http, $q) {
    $scope.login = function() {
        $( "#loginDialogue" ).dialog();
    };

}]);

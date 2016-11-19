angular.module('curryBhariApp')
  .controller("cartController", ['$scope', '$http', '$q','Cart', function(
  $scope,
  $http, $q, Cart) {
    $scope.products = Cart.products;

}]);

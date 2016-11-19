angular.module('curryBhariApp')
  .controller("cartController", ['$scope', '$http', '$q','Cart', function(
  $scope,
  $http, $q, Cart) {
    $scope.products = Cart.products;

    $scope.removeItem = function(product) {
        $scope.products = $scope.products.filter(function(p){
            return product.productid !== p.productid;
        });
    }
}]);

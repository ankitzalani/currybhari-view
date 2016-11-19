angular.module('curryBhariApp')
  .controller('containerController', ['$scope', '$http', '$q','Products', 'Cart', function(
  $scope,
  $http, $q, Products, Cart) {
    $scope.products = [];

    var getProducts = function() {
        Products.list().then(function(promise){
            $scope.products = promise.data;
        });
    };

    $scope.addToCart = function(product) {
        Cart.addProduct(product);
    };

    getProducts();
}]);

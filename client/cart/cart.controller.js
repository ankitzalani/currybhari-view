angular.module('curryBhariApp')
    .controller("cartController", ['$scope', '$http', '$q', 'Cart', function(
        $scope,
        $http, $q, Cart) {
        $scope.products = Cart.products;

        $scope.removeItem = function(product) {
            Cart.products = Cart.products.filter(function(p) {
                return product.productid !== p.productid;
            });
            $scope.products = Cart.products;
        }
    }]);

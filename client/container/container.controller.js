angular.module('curryBhariApp')
    .controller('containerController', ['$scope', '$http', '$q', 'Products', 'Cart', 'Notification', function(
        $scope,
        $http, $q, Products, Cart, Notification) {
        $scope.products = [];

        var getProducts = function() {
            Products.list().then(function(promise) {
                $scope.products = promise.data;
            });
        };

        $scope.addToCart = function(product) {
            if (product) {
                Cart.addProduct(product);
                Notification.success({
                    message: product.name + ' added to cart',
                    delay:1000
                });
            }
        };

        getProducts();
    }]);

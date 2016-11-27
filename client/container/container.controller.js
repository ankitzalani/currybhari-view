angular.module('curryBhariApp')
    .controller('containerController', ['$scope', '$http', '$q', 'Products', 'Cart', 'Notification', function(
        $scope,
        $http, $q, Products, Cart, Notification) {
        $scope.products = [];
        $scope.allProducts = [];

        $scope.getProducts = function() {
            Products.list().then(function(promise) {
                $scope.products = promise.data;
                $scope.allProducts = promise.data;
            });
        };

        $scope.addToCart = function(product) {
            if (product) {
                Cart.addProduct(product);
                Notification.success({
                    message: product.name + ' added to cart',
                    delay: 1000, positionY: 'bottom', positionX: 'right'
                });
            }
        };

        $scope.$on('products.filter', function(newState) {
            $scope.products = $scope.allProducts.filter(function(product) {
                return product.name.toLowerCase().indexOf(Products.searchText.toLowerCase()) !== -1;
            });
        });

        $scope.getProducts();
    }]);

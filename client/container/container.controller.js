angular.module('curryBhariApp')
    .controller('containerController', ['$scope', '$http', '$q', 'Products', 'Cart', 'Notification', '$stateParams', function(
        $scope,
        $http, $q, Products, Cart, Notification, $stateParams) {
        $scope.products = [];

        $scope.getProducts = function() {
            Products.list().then(function(promise) {
                $scope.products = promise.data;

                var query = $stateParams.q;
                if (query) {
                    $scope.products = $scope.products.filter(function(product) {
                        return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
                    });
                }
            });
        };

        $scope.addToCart = function(product) {
            if (product) {
                Cart.addProduct(product);
                Notification.success({
                    message: product.name + ' added to cart',
                    delay: 1000,
                    positionY: 'bottom',
                    positionX: 'right'
                });
            }
        };

        $scope.getProducts();
    }]);

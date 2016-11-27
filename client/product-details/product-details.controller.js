angular.module('curryBhariApp')
    .controller("productDetailsController", ['$stateParams', '$scope', '$http', '$q', 'Products', 'Cart', 'Notification',
        function($stateParams,
            $scope,
            $http, $q, Products, Cart, Notification) {
            $scope.product = [];
            $scope.id = $stateParams.id;
            $scope.quantity = 1;

            var getProduct = function(id) {
                Products.getProduct(id).then(function(promise) {
                    $scope.product = promise.data;
                });
            };

            $scope.addToCart = function(product) {
                Cart.addProduct(product, $scope.quantity);
                Notification.success({
                    message: product.name + ' added to cart',
                    delay: 1000
                });
            };

            getProduct($scope.id);
        }
    ]);

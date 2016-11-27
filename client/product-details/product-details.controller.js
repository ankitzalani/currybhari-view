angular.module('curryBhariApp')
    .controller("productDetailsController", ['$stateParams', '$scope', '$http', '$q', 'Products', 'Cart', 'Notification', '$cookieStore',
        function($stateParams,
            $scope,
            $http, $q, Products, Cart, Notification, $cookieStore) {
            $scope.product = $cookieStore.get('product') || [];
            $scope.id = $stateParams.id;
            $scope.quantity = 1;

            var getProduct = function(id) {
                if(id) {
                  Products.getProduct(id).then(function(promise) {
                      $scope.product = promise.data;
                      $cookieStore.put('product', $scope.product);
                  });
                }
            };

            $scope.addToCart = function(product) {
                Cart.addProduct(product, parseInt($scope.quantity));
                Notification.success({
                    message: product.name + ' added to cart',
                    delay: 1000, positionY: 'bottom', positionX: 'right'
                });
            };

            getProduct($scope.id);
        }
    ]);

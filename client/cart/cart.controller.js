angular.module('curryBhariApp')
    .controller("cartController", ['$scope', '$http', '$q', 'Cart', function(
        $scope,
        $http, $q, Cart) {

        $scope.cart = Cart.cart;
        $scope.payment = Cart.calculatePayment();

        $scope.removeItem = function(id) {
            Cart.removeProduct(id);
            $scope.cart = Cart.cart;
            $scope.payment = Cart.calculatePayment();
        };

        $scope.changeQuantity = function(id, quantity) {
            Cart.changeQuantity(id, quantity);
            $scope.payment = Cart.calculatePayment();
        };
    }]);

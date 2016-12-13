angular.module('curryBhariApp')
    .controller("cartController", ['$scope', '$http', '$q', 'Cart', 'UserService', '$state', function(
        $scope,
        $http, $q, Cart, UserService, $state) {

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

        $scope.goToCheckout = function() {
            if (!UserService.user || !UserService.user.username) {
                $state.go('login');
            } else {
                $state.go('checkout');
            }
        }
    }]);

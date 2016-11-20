'use strict';

angular.module('curryBhariApp').service('Cart', ['$http', '$q', 'Config', function($http, $q, Config) {
    this.count = 0;
    this.cart = [];

    this.addProduct = function(product) {
        this.cart.push({
            'id': this.count++,
            'product': product,
            'quantity': 1,
            'total': product.rate
        });
    };

    this.removeProduct = function(id) {
        this.cart = this.cart.filter(function(temp) {
            return id !== temp.id;
        });
    };

    this.changeQuantity = function(id, quantity) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id == id) {
                this.cart[i].quantity = quantity;
                this.cart[i].total = this.cart[i].quantity * this.cart[i].product.rate;
            }
        }
    };

    this.calculatePayment = function() {
        Config.getConfig().then(function(promise) {
            var config = promise.data;

            var subtotal = 0;
            this.cart.forEach(function(obj) {
                subtotal += parseFloat(obj.total);
            });

            var tax = (subtotal * config.serviceTax) / 100;
            var grandTotal = subtotal + tax;

            return {
                'subTotal': subtotal,
                'tax': tax,
                'grandTotal': grandTotal
            };
        });
    };
}]);
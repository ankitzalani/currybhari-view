'use strict';

angular.module('curryBhariApp').service('Cart', ['$http', '$q', function($http, $q) {
    this.count = 0;
    this.cart = [];
    this.grandTotal = 0;

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

    this.incrementQuantity = function(id) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id == id) {
                this.cart[i].quantity++;
                this.cart[i].total = this.cart[i].quantity * this.cart[i].product.rate;
            }
        }
    };

    this.decrementQuantity = function(id) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id == id) {
                this.cart[i].quantity--;
                this.cart[i].total = this.cart[i].quantity * this.cart[i].product.rate;
            }
        }
    };
}]);

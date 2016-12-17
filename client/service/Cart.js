'use strict';
angular.module('curryBhariApp').service('Cart', ['$http', '$q', 'Config', '$cookieStore', function($http, $q, Config, $cookieStore) {
    this.count = 0;
    this.cart = this.cart || $cookieStore.get('cart') || [];
    this.serviceTax = 20.5;

    this.addProduct = function(product, quantity) {
        var self = this;
        var itemExists = false;
        self.cart.forEach(function(obj) {
            if (obj.id === product._id) {
                itemExists = true;
            }
        });

        if (!itemExists) {
            this.cart.push({
                'id': product._id,
                'product': product,
                'rate': product.rate,
                'quantity': (quantity || 1),
                'total': product.rate * (quantity || 1)
            });
        }
        $cookieStore.put('cart', this.cart);
    };

    this.removeProduct = function(id) {
        this.cart = this.cart.filter(function(temp) {
            return id !== temp.id;
        });
        $cookieStore.put('cart', this.cart);
    };

    this.changeQuantity = function(id, quantity) {
        if (quantity <= 0) return;
        quantity = parseInt(quantity);
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id == id) {
                this.cart[i].quantity = quantity;
                this.cart[i].total = this.cart[i].quantity * this.cart[i].product.rate;
            }
        }
        $cookieStore.put('cart', this.cart);
    };

    this.calculatePayment = function() {
        var self = this;

        var subtotal = 0;
        self.cart.forEach(function(obj) {
            subtotal += parseFloat(obj.total);
        });

        var tax = (subtotal * this.serviceTax) / 100;
        var grandTotal = subtotal + tax;

        return {
            'subTotal': subtotal,
            'tax': tax,
            'grandTotal': grandTotal
        };
    };

    this.saveCart = function() {
        var service = this;
        var cartObject = {
            'user':service.user,
            'product': service.cart,
            'subTotal': cart.service,
            'tax': '93.45',
            'grandTotal': '4567'
        };

        var promise = $http.post(appconfig.host + '/cart', cartObject).success(
            function(data) {
                return data;
            });
        return promise;
    }
    $cookieStore.put('cart', this.cart);
}]);

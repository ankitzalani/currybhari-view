'use strict';

var appconfig = {
    host: 'https://currybhari-view.herokuapp.com'
};

angular.module('curryBhariApp').service('Cart', ['$http', '$q', function($http, $q) {
    this.products = [];

    this.addProduct = function(product) {
        this.products.push(product);
    };
}]);

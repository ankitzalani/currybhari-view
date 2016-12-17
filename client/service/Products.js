'use strict';

var appconfig = {
    host: ''
};

angular.module('curryBhariApp').service('Products', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {
    this.searchText = '';

    this.products = [];

    this.productObj = {};

    this.list = function(disableCaching) {
        var service = this;
        if (disableCaching || service.products.length == 0) {
            return $http.get(appconfig.host + '/products').success(
                function(data) {
                    service.products = data;
                    return data;
                });
        } else {
            var deferred = $q.defer();
            deferred.resolve({
                data: service.products
            });
            return deferred.promise;
        }
    };

    this.getProduct = function(id) {
        if (id) {
            var promise = $http.get(appconfig.host + '/product/' + id).success(
                function(data) {
                    return data;
                });
            return promise;
        } else {
            return [];
        }
    };

    this.add = function(productObj) {
        var self = this;
        if (productObj) {
            var promise = $http.post(appconfig.host + '/product', {
                product: productObj,
            }).success(
                function(data) {
                    return data;
                });
            return promise;
        }
    }

    this.delete = function(id) {
        var promise = $http.delete(appconfig.host + '/product/' + id).success(
            function(data) {
                return data;
            });
        return promise;
    }
}]);

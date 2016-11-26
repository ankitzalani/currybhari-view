'use strict';

var appconfig = {
    host: ''
};

angular.module('curryBhariApp').service('Products', ['$http', '$q','$rootScope', function($http, $q,$rootScope) {
    this.searchText = '';

    this.list = function() {
        var promise = $http.get(appconfig.host + '/products').success(
            function(data) {
                return data;
            });
        return promise;
    };

    this.filter = function(searchText) {
        this.searchText = searchText;
        $rootScope.$broadcast('products.filter', searchText);
    };
}]);

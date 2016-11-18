'use strict';

var appconfig = {
    host: 'https://currybhari-view.herokuapp.com'
};

angular.module('curryBhariApp').service('Products', ['$http', '$q', function($http, $q) {
    this.list = function() {

        var promise = $http.get(appconfig.host + '/productDetails').success(
            function(data) {
                return data;
            });

        return promise;
    };
}]);

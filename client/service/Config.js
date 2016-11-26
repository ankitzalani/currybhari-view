'use strict';

var appconfig = {
    host: ''
};

angular.module('curryBhariApp').service('Config', ['$http', '$q', function($http, $q) {
    this.config = {};

    this.getConfig = function() {
        var self = this;
        var promise = $http.get(appconfig.host + '/config').success(
            function(data) {
                self.config = data;
                return data;
            });

        return promise;
    };
}]);

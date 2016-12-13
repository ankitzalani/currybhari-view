'use strict';

var appconfig = {
    host: ''
};

angular.module('curryBhariApp').service('PinCodeService', ['$http', '$q',
    function($http, $q) {
        this.pinCodes = [];

        this.getPinCodes = function() {
            var self = this;
            var promise = $http.get(appconfig.host + '/pincode').success(
                function(data) {
                    self.pinCodes = data;
                    return data;
                });
            return promise;
        }
    }
]);

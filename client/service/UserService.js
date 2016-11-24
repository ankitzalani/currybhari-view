'use strict';

var appconfig = {
    host: 'https://currybhari-view.herokuapp.com'
};

angular.module('curryBhariApp').service('UserService', ['$http', '$q', '$auth', '$cookieStore', function($http, $q, $auth, $cookieStore) {
    this.user = $cookieStore.get('user');

    this.authenticate = function(provider) {
        var self = this;
        var authPromise = $auth.authenticate(provider);
        authPromise.then(function(res) {
            self.user = res.data.user;
            $cookieStore.put('user', self.user);
        });
    };

    this.logout = function() {
        $cookieStore.remove('user');
        this.user = {};
    }
}]);

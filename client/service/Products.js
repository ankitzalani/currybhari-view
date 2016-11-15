'use strict';

angular.module('curryBhariApp').service('Products',['$http','$q', function($http, $q){
  this.list = function() {

      var promise = $http.get('https://currybhari-view.herokuapp.com/productDetails').success(
      function(data) {
          return data;
      });

      return promise;
  };
}]);

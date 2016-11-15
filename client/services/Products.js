var module = angular.module('curryBhariApp', []);

module.service('Products', function(){
  this.list = function() {
    $http.get('https://currybhari-view.herokuapp.com/productDetails').success(
      function(data) {
        return data;
      });
  };
});
